import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { AdditionalParallaxProps } from 'react-native-snap-carousel';
import { paddingVertical, windowWidth } from 'constants/sizes';

export interface SliderItemProps {
	image: string;
}
interface ItemProps {
	item: SliderItemProps;
	index: number;
	parallaxProps?: AdditionalParallaxProps;
	contain?: boolean;
	dwh?: boolean;
}

const SliderItem = ({ item, contain, dwh }: ItemProps) => (
	<Image
		source={{ uri: item.image }}
		style={[
			styles.br,
			contain ? styles.rc : null,
			dwh ? styles.dwh : styles.oh,
		]}
	/>
);

export default SliderItem;

const styles = StyleSheet.create({
	br: {
		borderRadius: 7.5,
	},
	dwh: {
		width: windowWidth - 2 * paddingVertical,
		height: (windowWidth - 2 * paddingVertical) / 2,
	},
	oh: {
		height: (windowWidth - 2 * paddingVertical) / 1.2,
	},
	rc: {
		resizeMode: 'contain',
	},
});
