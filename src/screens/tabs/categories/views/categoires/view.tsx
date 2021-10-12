import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { FlatList, View } from 'react-native';
import { styles } from './style';
import Content from '../../components/Content';
import { CategoriesNavigationProp } from '../../controller';
import { categories } from '../../data';

const CategoriesView = () => {
	const navigation = useNavigation<CategoriesNavigationProp>();

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
