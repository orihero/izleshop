import React from 'react';

import {
	FlatList,
	Image,
	ListRenderItemInfo,
	StyleSheet,
	Text,
	View,
} from 'react-native';

import { colors } from 'constants/colors';
import { categories } from '../data';
import Item from './Item';
import { CategoriesNavigationProp } from '../controller';

export type ContentItemProps = typeof categories[0];

type IContentItemProp = ListRenderItemInfo<ContentItemProps>;

interface IContentProps {
	item: IContentItemProp;
	disableTitle?: boolean;
	navigation: CategoriesNavigationProp;
	fromPage: string;
	categories: any;
}

const Content = ({
	item,
	disableTitle,
	navigation,
	fromPage,
}: IContentProps) => {
	return (
		<View>
			{disableTitle ? null : (
				<Text style={styles.title}>{item.title}</Text>
			)}
			<FlatList
				horizontal
				renderItem={(props) => (
					<Item
						{...props}
						navigation={navigation}
						fromPage={fromPage}
					/>
				)}
				data={item?.childs || []}
				contentContainerStyle={{ paddingLeft: 15 }}
				showsHorizontalScrollIndicator={false}
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
		paddingTop: 10,
	},
	image: {
		width: 100,
		height: 100,
		resizeMode: 'contain',
		tintColor: 'red',
	},
});
