import { HeartsIcon, SearchIcon } from 'assets/icons/icons';
import Header from 'components/navigation/Header';
import HorizontalItem from 'components/special/HorizontalItem';
import { strings } from 'locales/locales';
import React from 'react';
import { FlatList, View, Text, Image, ScrollView } from 'react-native';
import { colors } from 'constants/colors';
import { selectFavoritesList } from 'store/slices/favoritesSlice';
import { useAppSelector } from 'utils/hooks';
import FavoriteItem from '../cart/components/FavoriteItem';
import { styles } from './style';

const FavoritesView = () => {
	let favorites = useAppSelector(selectFavoritesList);

	return (
		<View style={styles.container}>
			<Header title={strings.favorites} bold />
			<ScrollView showsVerticalScrollIndicator={false}>
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
					ListEmptyComponent={() => (
						<View style={styles.emptyContent}>
							<Text style={styles.cartText}>
								{' '}
								{strings.heartText}{' '}
							</Text>
							<HeartsIcon size={140} />
						</View>
					)}
					decelerationRate={'normal'}
					showsVerticalScrollIndicator={false}
				/>
			</ScrollView>
		</View>
	);
};

export default FavoritesView;
