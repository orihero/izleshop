import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import SearchInput from '../../../components/general/Search';
import styles from './style';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import SliderItem from './components/SliderItem';
import { paddingVertical, windowWidth } from '../../../constants/sizes';
import { colors } from '../../../constants/colors';

export interface HomeViewProps {}

let data = [
	{
		url: 'https://www.warehousestationery.co.nz/on/demandware.static/-/Library-Sites-wsl-shared-library/default/dwcd375d89/Content/Category-Landing-Pages/technology/apple/fy21/s2455-iPhone-12mini-buy-now-988x494.jpg',
	},
	{
		url: 'https://creativepool.com/files/candidate/portfolio/full/930803.jpg',
	},
	{
		url: 'https://cdn.grabon.in/gograbon/images/web-images/uploads/1617801584557/apple-offers.jpg',
	},
	{
		url: 'https://ossaimaenterprise.com/wp-content/uploads/2020/10/headersml-desk-apple-watch-series-6-860x360-1.jpg',
	},
	{
		url: 'https://qmacstore.com/media/banner-macbook-air-chip-m1-qmac-store.png',
	},
];

const HomeView = () => {
	//TODO styles and move hooks to controller
	let width = windowWidth - 2 * paddingVertical;
	const [activeSlide, setActiveSlide] = useState(0);
	return (
		<ScrollView
			showsVerticalScrollIndicator={false}
			style={styles.container}
		>
			<SearchInput />
			<Carousel
				data={data}
				renderItem={SliderItem}
				sliderWidth={width}
				itemWidth={width}
				containerCustomStyle={styles.carousel}
				onSnapToItem={(index) => setActiveSlide(index)}
			/>
			<Pagination
				dotsLength={data.length}
				activeDotIndex={activeSlide}
				dotStyle={{
					width: 10,
					height: 10,
					borderRadius: 5,
					backgroundColor: colors.blue,
					paddingHorizontal: 2,
				}}
				inactiveDotColor={colors.gray}
				inactiveDotStyle={{ backgroundColor: colors.gray }}
				inactiveDotOpacity={0.5}
				inactiveDotScale={1}
				dotContainerStyle={{
					paddingHorizontal: 0,
					marginHorizontal: 2.5,
				}}
			/>
		</ScrollView>
	);
};

export default HomeView;
