import { useNavigation } from '@react-navigation/core';
import SearchInput from 'components/general/Search';
import Text from 'components/general/Text';
import SliderItem from 'components/special/SliderItem';
import VerticalItem from 'components/special/VerticalItem';
import { colors } from 'constants/colors';
import { Routes } from 'constants/routes';
import { windowWidth } from 'constants/sizes';
import { strings } from 'locales/locales';
import React, { SetStateAction, useState } from 'react';
import { FlatList, ScrollView, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Shimmer from 'react-native-shimmer-placeholder';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Route } from 'react-native-tab-view';
import { IPage } from './controller';
import styles from './style';

export interface HomeViewProps {
	width: number;
	setActiveSlide: (e: number) => void;
	activeSlide: number;
	products: [];
	banners: [];
	setPage: (prev: number) => SetStateAction<IPage>;
	page: number;
}

export let ListEmptyComponent = () => {
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

let EmptyBanner = () => {
	return (
		<Shimmer LinearGradient={LinearGradient} style={[styles.emptyBanner]} />
	);
};

const HomeView = ({
	activeSlide,
	setActiveSlide,
	width,
	products,
	banners,
	setPage,
	page,
	loadMoreProducts,
}: HomeViewProps) => {
	let navigation = useNavigation();
	let onPress = (route: Route, params: any) => {
		navigation.navigate(route, params);
	};
	let dontFetch = true;

	return (
		<View showsVerticalScrollIndicator={false} style={styles.container}>
			<SearchInput />
			{banners.length === 0 ? (
				<EmptyBanner />
			) : (
				<Carousel
					data={banners}
					renderItem={(props) => (
						<TouchableOpacity
							onPress={() =>
								onPress(Routes.PRODUCT_DETAILS, {
									id: props.item.product_id,
								})
							}
						>
							<SliderItem {...props} dwh />
						</TouchableOpacity>
					)}
					sliderWidth={width}
					itemWidth={width}
					containerCustomStyle={styles.carousel}
					onSnapToItem={(index) => setActiveSlide(index)}
					pagingEnabled
				/>
			)}
			<Pagination
				dotColor={colors.blue}
				dotStyle={styles.pdot}
				dotsLength={banners.length}
				dotContainerStyle={styles.pdotcont}
				containerStyle={{ paddingVertical: 10 }}
				inactiveDotScale={1}
				inactiveDotOpacity={0.5}
				activeDotIndex={activeSlide}
				inactiveDotColor={colors.gray}
				inactiveDotStyle={{ backgroundColor: colors.gray }}
			/>
			<Text style={styles.text}>{strings.recomendedForYou}</Text>
			<FlatList
				onMomentumScrollBegin={() => {
					dontFetch = false;
				}}
				contentContainerStyle={styles.flatList}
				snapToInterval={windowWidth / 2 - 5}
				data={products.length ? products : []}
				numColumns={2}
				renderItem={(props) => (
					<VerticalItem {...props} bigSize hasMargin />
				)}
				decelerationRate={'fast'}
				showsHorizontalScrollIndicator={false}
				// keyExtractor={(e) => e.id.toString()}
				ListEmptyComponent={ListEmptyComponent}
				onEndReachedThreshold={0.01}
				onEndReached={({ distanceFromEnd }) => {
					if (!dontFetch) {
						// loadMoreProducts();
						loadMoreProducts();
						setPage(page + 1);
					} else {
						console.log('----------not working-----------');
					}
					dontFetch = true;
				}}
			/>
		</View>
	);
};

export default HomeView;
