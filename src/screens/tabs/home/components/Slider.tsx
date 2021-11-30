import React, { useState } from 'react';
import {
	Linking,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import SliderItem from 'components/special/SliderItem';
import { colors } from 'constants/colors';
import { paddingVertical, windowWidth } from 'constants/sizes';
import { strings } from 'locales/locales';
import { EmptyBanner } from '../view';

const Slider = ({ banners }) => {
	let width = windowWidth - 2 * paddingVertical;
	const [activeSlide, setActiveSlide] = useState(0);
	return (
		<View>
			{banners.length === 0 ? (
				<EmptyBanner />
			) : (
				<Carousel
					data={banners}
					renderItem={(props) => (
						<TouchableOpacity
							onPress={() => Linking.openURL(props.item.url)}
						>
							<SliderItem {...props} dwh />
						</TouchableOpacity>
					)}
					sliderWidth={width}
					itemWidth={width}
					containerCustomStyle={styles.carousel}
					onSnapToItem={(index) => {
						setActiveSlide(index);
					}}
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
				inactiveDotStyle={{
					backgroundColor: colors.gray,
				}}
			/>
			<Text style={styles.text}>{strings.recomendedForYou}</Text>
		</View>
	);
};

export default Slider;

const styles = StyleSheet.create({
	emptyBanner: {
		width: windowWidth - 30,
		height: windowWidth / 2 - 30,
		alignSelf: 'center',
		borderRadius: 7.5,
		overflow: 'hidden',
		marginHorizontal: 20,
		marginTop: paddingVertical,
	},
	emptyContainer: {
		// paddingHorizontal: 15,
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	emptyCard: {
		width: windowWidth / 2 - 30,
		height: 250,
		shadowOpacity: 0.2,
		borderRadius: 7.5,
		elevation: 2,
		marginLeft: 18,
		marginBottom: 10,
		// marginHorizontal: 3,
		backgroundColor: colors.white,
	},
	container: {
		backgroundColor: colors.lightBlue,
		// paddingHorizontal: 20,
		paddingVertical: 10,
		flex: 1,
	},
	scroll: {
		marginTop: 10,
	},
	carousel: {
		borderRadius: 7.5,
		overflow: 'hidden',
		marginHorizontal: 20,
		marginTop: paddingVertical,
	},
	pdotcont: {
		height: 20,
		marginVertical: 0,
		paddingVertical: 0,
		paddingHorizontal: 0,
		marginHorizontal: 2.5,
	},
	pdot: {
		width: 10,
		height: 10,
		borderRadius: 5,
		marginTop: 10,
		paddingHorizontal: 2,
		backgroundColor: colors.blue,
	},
	text: {
		color: colors.black,
		fontSize: 18,
		marginHorizontal: 20,
		marginBottom: 10,
	},
	flatList: {
		paddingBottom: 40,
		paddingRight: 20,
		paddingVertical: 10,
	},
});
