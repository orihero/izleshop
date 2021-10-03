import { SearchIcon } from 'assets/icons/icons';
import Header from 'components/navigation/Header';
import VerticalItem from 'components/special/VerticalItem';
import { strings } from 'locales/locales';
import React from 'react';
import { FlatList, View } from 'react-native';
import { selectFavoritesList } from 'store/slices/favoritesSlice';
import { useAppSelector } from 'utils/hooks';
import { styles } from './style';

const FavoritesView = () => {
	let favorites = useAppSelector(selectFavoritesList);
	return (
		<View>
			<Header
				title={strings.favorites}
				rightEdge={() => <SearchIcon size={20} />}
			/>
			<FlatList
				contentContainerStyle={styles.flatList}
				data={favorites}
				renderItem={({ ...props }) => <VerticalItem {...props} />}
				decelerationRate={'fast'}
				showsVerticalScrollIndicator={false}
				numColumns={2}
			/>
		</View>
	);
};

export default FavoritesView;
