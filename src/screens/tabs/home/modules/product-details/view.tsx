import { useNavigation } from '@react-navigation/core';
import { CartIcon, HeartIcon, PressableIcon } from 'assets/icons/icons';
import DefaultButton from 'components/general/DefaultButton';
import Pressable from 'components/general/Pressable';
import Header from 'components/navigation/Header';
import Accordion from 'components/special/Accordion';
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
import Rating from 'components/special/Rating';
import { addToCart, removeFromCart, selectCart } from 'store/slices/cartSlice';
import {
	addItem,
	removeItem,
	selectFavorites,
} from 'store/slices/favoritesSlice';
import { useAppDispatch, useAppSelector } from 'utils/hooks';
import { products } from '../../data';
import { styles } from './style';

export interface ProductDetailsViewProps {
	setActiveSlide: (e: number) => void;
	activeSlide: number;
}

const ProductDetailsView = ({
	setActiveSlide,
	activeSlide,
}: ProductDetailsViewProps) => {
	let navigation = useNavigation();
	let favorites = useAppSelector(selectFavorites);
	let cart = useAppSelector(selectCart);
	let isInCart = !!cart[item.id];
	let isFavorite = !!favorites[item.id];
	let dispatch = useAppDispatch();

	const onPress = () => console.log('onPressed');

	let onHeartPress = () => {
		if (isFavorite) {
			dispatch(removeItem(item.id.toString()));
		} else {
			dispatch(addItem(item));
		}
	};

	let onCartPress = () => {
		if (isInCart) {
			dispatch(removeFromCart(item.id.toString()));
		} else {
			dispatch(addToCart(item));
		}
	};

	let onCartIconPress = () => {
		navigation.navigate(Routes.CART);
	};

	return (
		<View style={styles.container}>
			<Header
				hasBorder
				hasCartIcon
				title={'Смартфон'}
				rightEdge={() => (
					<Pressable onPress={onCartIconPress}>
						<View>
							<View style={styles.badge}>
								<Text style={styles.badgeText}>{'2'}</Text>
							</View>
							<CartIcon size={20} />
						</View>
					</Pressable>
				)}
			/>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.bgw}>
					<Carousel
						data={item.images}
						renderItem={(props) => (
							<SliderItem {...props} contain />
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
							dotsLength={item.images.length}
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
					<Text style={styles.text1}>{item.title}</Text>
					<Rating styleChanged />
					<View style={styles.pr}>
						<Text style={styles.text3}>
							{`${item.newPrice} ${item.currency}`}
						</Text>
						<Text style={styles.text2}>
							{`${item.oldPrice} ${item.currency}`}
						</Text>
					</View>
				</View>
				<View style={styles.accordion}>
					<Accordion items={accordionData} />
				</View>
				<Text style={styles.text4}>{strings.similarProducts}</Text>
				<View style={styles.mt20}>
					<FlatList
						snapToInterval={windowWidth / 2 - 5}
						data={products}
						horizontal
						renderItem={(props) => <VerticalItem {...props} />}
						decelerationRate={'fast'}
						showsHorizontalScrollIndicator={false}
						keyExtractor={(e) => e.id.toString()}
					/>
				</View>
				<View style={styles.mb60} />
			</ScrollView>
			<View style={styles.btnCont}>
				<DefaultButton onPress={onPress} text={strings.addToCart} />
			</View>
		</View>
	);
};

export default ProductDetailsView;
