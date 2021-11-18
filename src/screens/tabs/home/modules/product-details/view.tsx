import { useNavigation } from '@react-navigation/core';
import { CartIcon, HeartIcon, PressableIcon } from 'assets/icons/icons';
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
import React from 'react';
import {
	FlatList,
	Platform,
	ScrollView,
	Text,
	ToastAndroid,
	TouchableOpacity,
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

export interface ProductDetailsViewProps {
	setActiveSlide: (e: number) => void;
	activeSlide: number;
	details: any;
	loading: boolean
}

const ProductDetailsView = ({
	setActiveSlide,
	activeSlide,
	details,
	loading
}: ProductDetailsViewProps) => {
	let navigation = useNavigation();
	let favorites = useAppSelector(selectFavorites);
	let cart = useAppSelector(selectCart);
	let isInCart = !!cart[details.id];
	let isFavorite = !!favorites[details.id];
	let dispatch = useAppDispatch();
	let dollarRate = useAppSelector(selectDollarRate);

	let ListEmptyComponent = () => {
		return (
			<View style={styles.emptyContainer}>
				<Shimmer
					LinearGradient={LinearGradient}
					style={[styles.emptyCard]}
				/>
				<Shimmer
					LinearGradient={LinearGradient}
					style={[styles.emptyCard]}
				/>
			</View>
		);
	};

	let onHeartPress = () => {
		if (isFavorite) {
			dispatch(removeItem(details.id.toString()));
		} else {
			console.log({ details });

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

	let onBackPress = () => {
		navigation.navigate(Routes.HOME);
	};

	let p = (details.price * dollarRate)
		.toString()
		.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
	p = p.substr(0, p.length - 2) + '00';

	return (
		loading ? <View style={styles.indicatorContainer}>
			<ActivityIndicator size="large" />
		</View> : <View style={styles.container}>
			<Header hasBorder hasCartIcon title={'Смартфон'} />
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.bgw}>
					<Carousel
						data={!!details.images ? details.images : []}
						renderItem={(props) => (
							<SliderItem
								{...{ item: { image: props.item } }}
								contain
							/>
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
								{`${details.old_price * dollarRate} ${item.currency
									}`}
							</Text>
						)}
					</View>
				</View>
				<View style={styles.accordion}>
					<Accordion
						items={accordionData}
						characteristics={details.characteristics}
					/>
				</View>
				{details.relatedProducts && details.relatedProducts.length > 0 && <View style={styles.mt20}>
					<Text style={styles.text4}>{strings.similarProducts}</Text>
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
				</View>}
				<View style={styles.mb60} />
			</ScrollView>
			<View style={styles.btnCont}>
				<DefaultButton onPress={onNextPress} text={strings.addToCart} />
			</View>
		</View>
	);
};

export default ProductDetailsView;
