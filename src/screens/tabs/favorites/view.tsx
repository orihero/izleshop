import { SearchIcon } from 'assets/icons/icons';
import Header from 'components/navigation/Header';
import HorizontalItem from 'components/special/HorizontalItem';
import { strings } from 'locales/locales';
import React from 'react';
import { FlatList, View } from 'react-native';
import { selectFavoritesList } from 'store/slices/favoritesSlice';
import { useAppSelector } from 'utils/hooks';
import FavoriteItem from '../cart/components/FavoriteItem';
import { styles } from './style';

const FavoritesView = () => {
	let favorites = useAppSelector(selectFavoritesList);
	return (
		<View style={styles.container}>
			<Header
				title={strings.favorites}
				bold
				// rightEdge={() => <SearchIcon size={20} />}
			/>
			<FlatList
				contentContainerStyle={styles.flatList}
				data={favorites}
				renderItem={(props) => (
					<View style={styles.mt15}>
						<FavoriteItem
							hasBasket={true}
							hasRemove={false}
							{...props}
						/>
					</View>
				)}
				decelerationRate={'normal'}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
};

export default FavoritesView;
