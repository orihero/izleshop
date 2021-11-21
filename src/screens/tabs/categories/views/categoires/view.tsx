import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { FlatList, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import LinearGradient from 'react-native-linear-gradient';
import Shimmer from 'react-native-shimmer';
import Content from '../../components/Content';
import Item from '../../components/Item';
import { CategoriesNavigationProp } from '../../controller';
import { styles } from './style';

let ListEmptyComponent = () => {
	return (
		<View style={styles.emptyContainer}>
			<Shimmer
				LinearGradient={LinearGradient}
				style={[styles.emptyCard]}
			/>
			<Shimmer
				LinearGradient={LinearGradient}
				style={[styles.emptyCard]}
			/>
			<Shimmer
				LinearGradient={LinearGradient}
				style={[styles.emptyCard]}
			/>
			<Shimmer
				LinearGradient={LinearGradient}
				style={[styles.emptyCard]}
			/>
			<Shimmer
				LinearGradient={LinearGradient}
				style={[styles.emptyCard]}
			/>
			<Shimmer
				LinearGradient={LinearGradient}
				style={[styles.emptyCard]}
			/>
			<Shimmer
				LinearGradient={LinearGradient}
				style={[styles.emptyCard]}
			/>
			<Shimmer
				LinearGradient={LinearGradient}
				style={[styles.emptyCard]}
			/>
		</View>
	);
};

export interface CategoriesViewProps {
	categories: any;
}

const CategoriesView = ({ categories }: CategoriesViewProps) => {
	const navigation = useNavigation<CategoriesNavigationProp>();

	return (
		<View style={styles.container}>
			<FlatList
				data={categories.length ? categories : []} // categories are {} before loading; FIX
				renderItem={(props) => <Content {...props} />}
				showsVerticalScrollIndicator={false}
				// numColumns={3}
				ListEmptyComponent={ListEmptyComponent}
			/>
		</View>
	);
};

export default CategoriesView;
