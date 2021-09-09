import Header from 'components/navigation/Header';
import { strings } from 'locales/locales';
import React from 'react';
import { FlatList, View } from 'react-native';
import reactotron from 'store/reactotron.config';
import { selectFavoritesList } from 'store/slices/favoritesSlice';
import { useAppSelector } from 'utils/hooks';
import ProductItem from '../home/components/ProductItem';
import { styles } from './style';

const FavoritesView = () => {
	let favorites = useAppSelector(selectFavoritesList);
	reactotron.log(favorites);

	return (
		<View>
			<Header title={strings.favorites} />
			<FlatList
				extraData={[favorites]}
				contentContainerStyle={styles.flatList}
				data={favorites}
				renderItem={({ ...props }) => <ProductItem {...props} />}
				decelerationRate={'fast'}
				showsVerticalScrollIndicator={false}
				numColumns={2}
			/>
		</View>
	);
};

export default FavoritesView;
