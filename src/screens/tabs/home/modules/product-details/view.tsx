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
import { FlatList, ScrollView, Text, View } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { addToCart, removeFromCart, selectCart } from 'store/slices/cartSlice';
import {
	addItem,
	removeItem,
	selectFavorites
} from 'store/slices/favoritesSlice';
import { useAppDispatch, useAppSelector } from 'utils/hooks';
import { styles } from './style';
import Toast from 'react-native-toast-message'

export interface ProductDetailsViewProps {
	setActiveSlide: (e: number) => void;
	activeSlide: number;
	details: any;
}

const ProductDetailsView = ({
	setActiveSlide,
	activeSlide,
	details,
}: ProductDetailsViewProps) => {
	let navigation = useNavigation();
	let favorites = useAppSelector(selectFavorites);
	let cart = useAppSelector(selectCart);
	let isInCart = !!cart[details.id];
	let isFavorite = !!favorites[details.id];
	let dispatch = useAppDispatch();

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
			Toast.show({
				text1: strings.warning,
				text2: strings.alreadyInCart
			})
		} else {
			dispatch(addToCart(details));
		}
		navigation.navigate(Routes.CART);
	};

	return (
		<View style={styles.container}>
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
							{`${details.price} ${item.currency}`}
						</Text>
						{details.old_price && (
							<Text style={styles.text2}>
								{`${details.old_price} ${item.currency}`}
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
				<Text style={styles.text4}>{strings.similarProducts}</Text>
				<View style={styles.mt20}>
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
				<View style={styles.mb60} />
			</ScrollView>
			<View style={styles.btnCont}>
				<DefaultButton onPress={onNextPress} text={strings.addToCart} />
			</View>
		</View>
	);
};

export default ProductDetailsView;
