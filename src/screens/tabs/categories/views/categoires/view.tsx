import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { FlatList, View, Image } from 'react-native';
import { styles } from './style';
import Content from '../../components/Content';
import { CategoriesNavigationProp } from '../../controller';
import { categories } from '../../data';

export interface CategoriesViewProps {
	setActiveSlide: (e: number) => void;
	activeSlide: number;
	categories: any;
}

const CategoriesView = ({
	setActiveSlide,
	activeSlide,
	categories,
}: CategoriesViewProps) => {
	const navigation = useNavigation<CategoriesNavigationProp>();
	console.log({categories});
	return (
		<View style={styles.container}>
			<FlatList
				data={categories}
				renderItem={(props) => (
					<Content
						{...props}
						fromPage="categories"
						navigation={navigation}
					/>
				)}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
};

export default CategoriesView;
