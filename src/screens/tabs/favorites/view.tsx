import React from 'react';
import { FlatList, View } from 'react-native';
import Header from 'components/navigation/Header';
import { strings } from 'locales/locales';
import ProductItem from '../home/components/ProductItem';
import { products } from '../home/data';
import { styles } from './style';

const FavoritesView = () => {
	return (
		<View>
			<Header title={strings.favorites} />
			<FlatList
				contentContainerStyle={styles.flatList}
				data={products}
				renderItem={({ ...props }) => <ProductItem {...props} />}
				decelerationRate={'fast'}
				showsVerticalScrollIndicator={false}
				numColumns={2}
			/>
		</View>
	);
};

export default FavoritesView;
