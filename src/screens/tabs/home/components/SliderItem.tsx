import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { AdditionalParallaxProps } from 'react-native-snap-carousel';
import { paddingVertical, windowWidth } from '../../../../constants/sizes';

export interface SliderItemProps {
	url: string;
}
interface ItemProps {
	item: SliderItemProps;
	index: number;
	parallaxProps?: AdditionalParallaxProps;
}

const SliderItem = ({ item }: ItemProps) => {
	let width = windowWidth - 2 * paddingVertical;
	return (
		<Image
			source={{ uri: item.url }}
			style={{ width, height: width / 2, borderRadius: 7.5 }}
		/>
	);
};

export default SliderItem;

const styles = StyleSheet.create({});
