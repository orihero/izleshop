import React from 'react';
import { FlatList, ScrollView } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import SearchInput from 'components/general/Search';
import Text from 'components/general/Text';
import { colors } from 'constants/colors';
import { windowWidth } from 'constants/sizes';
import { strings } from 'locales/locales';
import ProductItem from './components/ProductItem';
import SliderItem from './components/SliderItem';
import styles from './style';
import { products, data } from './data';

export interface HomeViewProps {
	width: number;
	setActiveSlide: (e: number) => void;
	activeSlide: number;
}

const HomeView = ({ activeSlide, setActiveSlide, width }: HomeViewProps) => {
	return (
		<ScrollView
			showsVerticalScrollIndicator={false}
			style={styles.container}
		>
			<SearchInput />
			<Carousel
				data={data}
				renderItem={(props) => <SliderItem {...props} dwh />}
				sliderWidth={width}
				itemWidth={width}
				containerCustomStyle={styles.carousel}
				onSnapToItem={(index) => setActiveSlide(index)}
			/>
			<Pagination
				dotColor={colors.blue}
				dotStyle={styles.pdot}
				dotsLength={data.length}
				dotContainerStyle={styles.pdotcont}
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
				horizontal
				renderItem={(props) => <ProductItem
					{...props}
					closeIcon={true}
				/>}
				decelerationRate={'fast'}
				showsHorizontalScrollIndicator={false}
				keyExtractor={(e) => e.id.toString()}
			/>
		</ScrollView>
	);
};

export default HomeView;
