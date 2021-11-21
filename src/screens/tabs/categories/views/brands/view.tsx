import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Shimmer from 'react-native-shimmer';
import BrandsItem from '../../components/BrandsItem';
import { CategoriesNavigationProp } from '../../controller';
import { styles } from './style';

// let ListEmptyComponent = () => {
// 	return (
// 		<View style={styles.emptyContainer}>
// 			<Shimmer
// 				LinearGradient={LinearGradient}
// 				style={[styles.emptyCard]}
// 			/>
// 			<Shimmer
// 				LinearGradient={LinearGradient}
// 				style={[styles.emptyCard]}
// 			/>
// 			<Shimmer
// 				LinearGradient={LinearGradient}
// 				style={[styles.emptyCard]}
// 			/>
// 			<Shimmer
// 				LinearGradient={LinearGradient}
// 				style={[styles.emptyCard]}
// 			/>
// 			<Shimmer
// 				LinearGradient={LinearGradient}
// 				style={[styles.emptyCard]}
// 			/>
// 			<Shimmer
// 				LinearGradient={LinearGradient}
// 				style={[styles.emptyCard]}
// 			/>
// 			<Shimmer
// 				LinearGradient={LinearGradient}
// 				style={[styles.emptyCard]}
// 			/>
// 			<Shimmer
// 				LinearGradient={LinearGradient}
// 				style={[styles.emptyCard]}
// 			/>
// 		</View>
// 	);
// };

export interface BrandsViewProps {
	brands: any;
}

const BrandsView = ({ brands }: BrandsViewProps) => {
	const navigation = useNavigation<CategoriesNavigationProp>();

	return (
		<View style={{ paddingTop: 20 }}>
			<FlatList
				data={brands.length ? brands : []}
				renderItem={(props) => <BrandsItem {...props} />}
				showsVerticalScrollIndicator={false}
				numColumns={3}
				// ListEmptyComponent={ListEmptyComponent}
			/>
		</View>
	);
};

export default BrandsView;
