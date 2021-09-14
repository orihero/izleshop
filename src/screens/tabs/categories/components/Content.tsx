import React from 'react';

import {
	FlatList,
	ListRenderItemInfo,
	StyleSheet,
	Text,
	View,
} from 'react-native';

import { colors } from 'constants/colors';
import { categories } from '../data';
import CategoryItem from './Item';

export type ContentItemProps = typeof categories[0];

type IContentItemProp = ListRenderItemInfo<ContentItemProps>;

interface IContentProps {
	item: IContentItemProp;
	disableTitle?: boolean;
}

const Content = ({ item, disableTitle }: IContentProps) => {
	return (
		<View>
			{disableTitle ? null : (
				<Text style={styles.title}>{item.label}</Text>
			)}
			<FlatList
				horizontal
				data={item.subCategories}
				renderItem={CategoryItem}
				contentContainerStyle={{ paddingLeft: 15 }}
			/>
		</View>
	);
};

export default Content;

const styles = StyleSheet.create({
	title: {
		fontWeight: '700',
		fontSize: 14,
		color: colors.black,
		paddingLeft: 20,
		paddingTop: 20,
	},
});
