import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { colors } from 'constants/colors';
import { Routes } from 'constants/routes';
import { strings } from 'locales/locales';
import React, { useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { windowWidth } from 'constants/sizes';
import { styles } from './stlye';

let image1 = require('assets/images/Group.png');
let image2 = require('assets/images/document.png');
let image3 = require('assets/images/watch.png');

export interface IntroProps {
	navigation: NativeStackNavigationProp<any>;
}

let data = [
	{
		img: image1,style:styles.img
	},
	{
		img: image2, style:{width: 10}
	},
	{
		img: image3, 
	},
];

const IntroView = ({}: IntroProps) => {
	const [activeSlide, setActiveSlide] = useState(0);
	let navigation = useNavigation();
	let onNextPress = () => {
		navigation.navigate(Routes.TABS);
	};
	return (
		<View style={styles.container}>
			<View style={styles.boxOne}>
				<Carousel
					contentContainerCustomStyle={
						{
							// flex: 1,
						}
					}
					onSnapToItem={(index) => setActiveSlide(index)}
					data={data}
					sliderWidth={windowWidth}
					sliderHeight={385}
					itemWidth={windowWidth}
					itemHeight={385}
					renderItem={({ item: { img } }) => (
						<View style={styles.itemContainer}>
							<Image style={img.style } source={img} />
						</View>
					)}
				/>
			</View>
			<View style={styles.boxTwo}>
				<Text style={styles.textOne}>{strings.toGoToTheBazaar}</Text>
				<Text style={styles.textTwo}>{strings.favorablePrices}</Text>
				<Pressable style={styles.button} onPress={onNextPress}>
					<Text style={styles.buttonText}>{strings.farther}</Text>
				</Pressable>
				<Pagination
					dotColor={colors.blue}
					dotStyle={styles.pdot}
					dotsLength={3}
					dotContainerStyle={styles.pdotcont}
					inactiveDotScale={1}
					inactiveDotOpacity={0.5}
					activeDotIndex={activeSlide}
					inactiveDotColor={colors.gray}
					inactiveDotStyle={{ backgroundColor: colors.gray }}
				/>
			</View>
		</View>
	);
};

export default IntroView;
