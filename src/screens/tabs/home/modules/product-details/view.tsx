import { useNavigation } from '@react-navigation/core';
import {
	CartIcon,
	ChevronRightIcon,
	HeartIcon,
	PressableIcon,
} from 'assets/icons/icons';
import DefaultButton from 'components/general/DefaultButton';
import Header from 'components/navigation/Header';
import Accordion from 'components/special/Accordion';
import Rating from 'components/special/Rating';
import SliderItem from 'components/special/SliderItem';
import VerticalItem from 'components/special/VerticalItem';
import { colors } from 'constants/colors';
import { Routes } from 'constants/routes';
import { windowWidth } from 'constants/sizes';
import { strings } from 'locales/locales';
import { accordionData, item } from 'mockup/data';
import React, { useEffect, useState } from 'react';
import {
	Alert,
	Dimensions,
	FlatList,
	Platform,
	Pressable,
	ScrollView,
	Text,
	ToastAndroid,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { addToCart, removeFromCart, selectCart } from 'store/slices/cartSlice';
import {
	addItem,
	removeItem,
	selectFavorites,
} from 'store/slices/favoritesSlice';
import { useAppDispatch, useAppSelector } from 'utils/hooks';
import { styles } from './style';
import Toast from 'react-native-toast-message';
import Shimmer from 'react-native-shimmer';
import LinearGradient from 'react-native-linear-gradient';
import { selectDollarRate } from 'store/slices/userSlice';
import { ActivityIndicator } from 'react-native-paper';
import { Modal } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import { Screen } from 'react-native-screens';
import RenderHTML from 'react-native-render-html';

export interface ProductDetailsViewProps {
	setActiveSlide: (e: number) => void;
	activeSlide: number;
	details: any;
	loading: boolean;
	value: string;
	items: any;
}

const ProductDetailsView = ({
	setActiveSlide,
	activeSlide,
	details,
	loading,
	items,
	value,
	comments,
}: ProductDetailsViewProps) => {
	const [modalVisible, setModalVisible] = useState(false);
	const [open, setOpen] = useState(0);
	const [information, setInformation] = useState(true);
	const [characteristic, setCharacteristic] = useState(true);

	let navigation = useNavigation();
	let favorites = useAppSelector(selectFavorites);
	let cart = useAppSelector(selectCart);
	let isInCart = !!cart[details.id];
	let isFavorite = !!favorites[details.id];
	let dispatch = useAppDispatch();
	let dollarRate = useAppSelector(selectDollarRate);

	const onChangeContent = (index: number) => {
		if (index === 1) {
			//@ts-ignore
			navigation.navigate(Routes.WITHOUT_TABS, {
				screen: Routes.INSTALLMENT,
				params: { data: details },
			});
		} else if (open === index) {
			setOpen(0);
			return;
		}

		setOpen(index);
	};
	let onHeartPress = () => {
		if (isFavorite) {
			dispatch(removeItem(details.id.toString()));
		} else {
			dispatch(addItem(details));
		}
	};

	let onCartPress = () => {
		if (isInCart) {
			dispatch(removeFromCart(details.id.toString()));
		} else {
			dispatch(addToCart(details));
		}
	};
	let onNextPress = () => {
		if (isInCart) {
			if (Platform.OS === 'android') {
				ToastAndroid.show(strings.alreadyInCart, 500);
			} else {
				alert(strings.alreadyInCart);
			}
			return;
		} else {
			dispatch(addToCart(details));
		}
		navigation.navigate(Routes.CART);
	};

	let onHindPress = () => {
		navigation.navigate(Routes.WITHOUT_TABS, {
			screen: Routes.INSTALLMENT,
			params: { data: details },
		});
	};
	let onReversPress = () => {
		if (!comments || comments.length <= 0) {
			Alert.alert(strings.warning, strings.noComments);
			return;
		}
		navigation.navigate(Routes.WITHOUT_TABS, {
			screen: Routes.COMMENTS,
			params: { comments },
		});
	};
	let p = (details.price * dollarRate)
		.toString()
		.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
	p = p.substr(0, p.length - 2) + '00';

	let onModalToggle = () => {
		setModalVisible((e) => !e);
	};

	return loading ? (
		<View style={styles.indicatorContainer}>
			<ActivityIndicator size="large" />
		</View>
	) : (
		<View style={styles.container}>
			<Header hasBorder hasCartIcon title={'Смартфон'} />
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.bgw}>
					<Carousel
						data={!!details.images ? details.images : []}
						renderItem={(props) => (
							<TouchableOpacity onPress={onModalToggle}>
								<SliderItem
									{...{ item: { image: props.item } }}
									contain
								/>
							</TouchableOpacity>
						)}
						sliderWidth={windowWidth}
						itemWidth={windowWidth}
						containerCustomStyle={styles.carousel}
						onSnapToItem={(index) => setActiveSlide(index)}
						pagingEnabled
					/>
					<View style={styles.row}>
						<PressableIcon onPress={onCartPress}>
							<CartIcon
								active={isInCart}
								color={colors.blue}
								size={20}
							/>
						</PressableIcon>
						<Pagination
							dotColor={colors.blue}
							dotStyle={styles.pdot}
							dotsLength={details.images?.length}
							dotContainerStyle={styles.pdotcont}
							inactiveDotScale={1}
							inactiveDotOpacity={0.5}
							activeDotIndex={activeSlide}
							inactiveDotColor={colors.gray}
							containerStyle={{ paddingVertical: 0 || undefined }}
							inactiveDotStyle={{ backgroundColor: colors.gray }}
						/>
						<PressableIcon onPress={onHeartPress}>
							<HeartIcon
								active={isFavorite}
								color={colors.red}
								size={20}
								onPress={onHeartPress}
							/>
						</PressableIcon>
					</View>
				</View>
				<View style={styles.main}>
					<Text style={styles.text1}>{details.name}</Text>
					<Rating styleChanged />
					<View style={styles.pr}>
						<Text style={styles.text3}>
							{`${p} ${item.currency}`}
						</Text>
						{details.old_price && (
							<Text style={styles.text2}>
								{`${details.old_price * dollarRate} ${
									item.currency
								}`}
							</Text>
						)}
					</View>
				</View>

				<View style={styles.accordion}>
					<TouchableOpacity onPress={onHindPress}>
						<View style={styles.box}>
							<Text style={styles.text}>
								{strings.installment}
							</Text>
							<ChevronRightIcon size={20} />
						</View>
					</TouchableOpacity>
					<View style={styles.line}></View>
					<View>
						<TouchableOpacity
							onPress={() => {
								setInformation(!information);
							}}
						>
							<View style={styles.box}>
								<Text style={styles.text}>
									{strings.information}
								</Text>

								<View
									style={
										information === false
											? styles.opened
											: styles.closed
									}
								>
									<ChevronRightIcon
										size={20}
										color={
											information === false
												? colors.blue
												: colors.black
										}
									/>
								</View>
							</View>
						</TouchableOpacity>
						{!information ? (
							<View
								style={{
									padding: 10,
									marginHorizontal: 5,
									backgroundColor: colors.white,
								}}
							>
								<Text style={styles.text6}>{details.name}</Text>
								<RenderHTML
									source={{ html: details.description }}
									contentWidth={
										Dimensions.get('window').width - 50
									}
								/>
							</View>
						) : null}
					</View>
					<View style={styles.line}></View>
					<View>
						<TouchableOpacity
							onPress={() => {
								setCharacteristic(!characteristic);
							}}
						>
							<View style={styles.box}>
								<Text style={styles.text}>
									{strings.characteristic}
								</Text>
								<View
									style={
										characteristic === false
											? styles.opened
											: styles.closed
									}
								>
									<ChevronRightIcon
										size={20}
										color={
											characteristic === false
												? colors.blue
												: colors.black
										}
									/>
								</View>
							</View>
						</TouchableOpacity>
						{!characteristic ? (
							<View
								style={{
									backgroundColor: colors.white,
									marginHorizontal: 5,
								}}
							>
								<RenderHTML
									source={{ html: details.characteristic }}
								/>
							</View>
						) : null}
					</View>
					<View style={styles.line}></View>
					<TouchableOpacity onPress={onReversPress}>
						<View style={styles.box}>
							<Text style={styles.text}>{strings.reviews}</Text>
							<ChevronRightIcon size={20} />
						</View>
					</TouchableOpacity>
				</View>
				{details.relatedProducts && details.relatedProducts.length > 0 && (
					<View style={styles.mt20}>
						<Text style={styles.text4}>
							{strings.similarProducts}
						</Text>
						<FlatList
							snapToInterval={windowWidth / 3 - 5}
							data={details.relatedProducts}
							horizontal
							renderItem={(props) => (
								<View style={styles.margin}>
									<VerticalItem {...props} />
								</View>
							)}
							decelerationRate={'fast'}
							showsHorizontalScrollIndicator={false}
							keyExtractor={(e) => e.id.toString()}
						/>
					</View>
				)}
				<View style={styles.mb60} />
			</ScrollView>
			<View style={styles.btnCont}>
				<DefaultButton onPress={onNextPress} text={strings.addToCart} />
			</View>
			<Modal visible={modalVisible} onRequestClose={onModalToggle}>
				<ImageViewer
					imageUrls={details?.images?.map((e) => ({
						url: e,
						props: { style: { width: windowWidth, height: 100 } },
					}))}
				/>
			</Modal>
		</View>
	);
};

export default ProductDetailsView;
