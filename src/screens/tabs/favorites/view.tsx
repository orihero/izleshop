import React from 'react';

import { selectFavoritesList } from 'store/slices/favoritesSlice';
import { useAppSelector } from 'utils/hooks';

import { FlatList, View } from 'react-native';
import Header from 'components/navigation/Header';
import ProductItem from 'components/special/ProductItem';

import { SearchIcon } from 'assets/icons/icons';
import { strings } from 'locales/locales';
import reactotron from 'store/reactotron.config';
import { styles } from './style';

const FavoritesView = () => {
	let favorites = useAppSelector(selectFavoritesList);
	reactotron.log(favorites);

	return (
		<View>
			<Header
				title={strings.favorites}
				rightEdge={() => <SearchIcon size={20} />}
			/>
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
