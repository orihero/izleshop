import SearchInput from 'components/general/Search';
import Text from 'components/general/Text';
import SliderItem from 'components/special/SliderItem';
import VerticalItem from 'components/special/VerticalItem';
import { colors } from 'constants/colors';
import { windowWidth } from 'constants/sizes';
import { strings } from 'locales/locales';
import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Shimmer from 'react-native-shimmer-placeholder';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { data, products } from './data';
import styles from './style';

export interface HomeViewProps {
	width: number;
	setActiveSlide: (e: number) => void;
	activeSlide: number;
	products: [];
	banners: [];
}

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
}: HomeViewProps) => {

	return (
		<ScrollView
			showsVerticalScrollIndicator={false}
			style={styles.container}
		>
			<SearchInput />
			{banners.length === 0 ? (
				<EmptyBanner />
			) : (
				<Carousel
					data={banners}
					renderItem={(props) => <SliderItem {...props} dwh />}
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
				contentContainerStyle={styles.flatList}
				snapToInterval={windowWidth / 2 - 5}
				data={products}
				numColumns={2}
				renderItem={(props) => (
					<VerticalItem {...props} bigSize hasMargin />
				)}
				decelerationRate={'fast'}
				showsHorizontalScrollIndicator={false}
				keyExtractor={(e) => e.id.toString()}
				ListEmptyComponent={ListEmptyComponent}
			/>
		</ScrollView>
	);
};

export default HomeView;
