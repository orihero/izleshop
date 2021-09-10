import React, { useState } from 'react';

import { useAppDispatch, useAppSelector } from 'utils/hooks';
import { selectCart, addToCart, removeFromCart } from 'store/slices/cartSlice';
import {
	addItem,
	removeItem,
	selectFavorites,
} from 'store/slices/favoritesSlice';

import {
	Text,
	View,
	FlatList,
	ScrollView,
	TouchableWithoutFeedback,
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import DefaultButton from 'components/general/DefaultButton';
import Header from 'components/navigation/Header';
import SliderItem from '../../components/SliderItem';
import Rating from '../../components/Rating';
import ProductItem from '../../components/ProductItem';

import { styles } from './style';
import { item, accordionItems } from 'mockup/data';
import { colors } from 'constants/colors';
import { windowWidth } from 'constants/sizes';
import { strings } from 'locales/locales';
import { products } from '../../data';
import {
	CartIcon,
	ChevronIcon,
	HeartIcon,
	PressableIcon,
} from 'assets/icons/icons';

export interface ProductDetailsViewProps {
	setActiveSlide: (e: number) => void;
	activeSlide: number;
}

const ProductDetailsView = ({
	setActiveSlide,
	activeSlide,
}: ProductDetailsViewProps) => {
	const [openedContent, setOpenedContent] = useState(0);

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

	let onCloseOpenContent = (index: number) => {
		if (openedContent === index) {
			setOpenedContent(0);
			return;
		}

		setOpenedContent(index);
	};

	return (
		<View style={styles.container}>
			<Header hasCartIcon hasBorder title={'Смартфон'} />
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
						<Text style={styles.text2}>
							{`${item.oldPrice} ${item.currency}`}
						</Text>
						<Text style={styles.text3}>
							{`${item.newPrice} ${item.currency}`}
						</Text>
					</View>
				</View>
				<View style={[styles.mt20, styles.mh20]}>
					<View style={styles.accordion}>
						{accordionItems.map((e, i) => (
							<View key={i}>
								<TouchableWithoutFeedback
									onPress={() => onCloseOpenContent(i + 1)}
								>
									<View style={styles.accordionItem}>
										<Text style={styles.text5}>
											{e.title}
										</Text>
										<View
											style={
												openedContent === i + 1
													? styles.iconOpened
													: styles.iconClosed
											}
										>
											<ChevronIcon
												size={20}
												color={
													openedContent === i + 1
														? colors.blue
														: colors.black
												}
											/>
										</View>
										{/* <View style={styles.tmpBox} /> */}
									</View>
								</TouchableWithoutFeedback>
								{openedContent === i + 1 ? (
									<View style={styles.accordionContent}>
										{e.content.items.map((ee, ii) => (
											<View key={ii}>
												{ee.preTitle ? (
													<Text
														style={[
															styles.accordionText1,
															styles[
																ee.preTitle
																	.style
															],
															ii
																? styles.mt20
																: null,
														]}
													>
														{ee.preTitle.text || ''}
													</Text>
												) : null}
												{ee.content
													? ee.content.items.map(
															(eee, iii) =>
																eee.isRow ? (
																	<View
																		style={[
																			styles.accordionRow,
																			iii
																				? styles.mt10
																				: i ===
																				  2
																				? styles.mt20
																				: null,
																		]}
																	>
																		<View
																			style={
																				styles.accordionRowLeft
																			}
																		>
																			<Text
																				style={[
																					styles.accordionText2,
																					styles[
																						eee
																							.title
																							.style
																					],
																				]}
																			>
																				{
																					eee
																						.title
																						.text
																				}
																			</Text>
																		</View>
																		<View
																			style={
																				styles.accordionRowRight
																			}
																		>
																			<Text
																				style={[
																					styles.accordionText2,
																					styles[
																						eee
																							.data
																							.style
																					],
																				]}
																			>
																				{
																					eee
																						.data
																						.text
																				}
																			</Text>
																		</View>
																	</View>
																) : (
																	<View
																		style={
																			iii
																				? styles.mt10
																				: styles.mt20
																		}
																	>
																		<Text
																			style={[
																				styles.accordionText2,
																				styles[
																					eee
																						.title
																						.style
																				],
																			]}
																		>
																			{
																				eee
																					.title
																					.text
																			}
																		</Text>
																		<Text
																			style={[
																				styles.accordionText2,
																				styles[
																					eee
																						.data
																						.style
																				],
																			]}
																		>
																			{
																				eee
																					.data
																					.text
																			}
																		</Text>
																	</View>
																)
													  )
													: null}
											</View>
										))}
										{e.content.finally ? (
											<View style={styles.mt14}>
												<Text
													style={[
														styles.accordionText2,
														styles[
															e.content.finally
																?.style
														],
														styles[
															e.content.finally
																?.position
														],
													]}
												>
													{`${e.content.finally?.text} +99871 123 45 67`}
												</Text>
											</View>
										) : null}
									</View>
								) : null}
							</View>
						))}
					</View>
				</View>
				<Text style={[styles.text4, styles.ml20]}>
					{strings.similarProducts}
				</Text>
				<View style={styles.mt20}>
					<FlatList
						snapToInterval={windowWidth / 2 - 5}
						data={products}
						horizontal
						renderItem={(props) => <ProductItem {...props} />}
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
