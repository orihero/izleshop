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
import { strings } from 'locales/locales';
import { store } from 'store/configureStore';

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
	let lang = strings.getLanguage();
	let title = item.title;
	// switch (lang) {
	// 	case 'kk':
	// 		title = item.title_qr;
	// 	case 'ru':
	// 		title = item.title;
	// 	default:
	// 		title = item.title_uz;
	// }
	console.log({ lang, lng: store.getState().user.languageIndex });

	switch (store.getState().user.languageIndex) {
		case 0:
			title = item.title_qr;
			break;
		case 1:
			title = item.title;
			break;
		default:
			title = item.title_uz;
	}
	// if (lang !== title) {
	// 	strings.setLanguage(title);
	// }
	return (
		<View>
			{disableTitle ? null : <Text style={styles.title}>{title}</Text>}
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
