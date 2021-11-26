import { requests } from 'api/requests';
import SearchInput from 'components/general/Search';
import VerticalItem from 'components/special/VerticalItem';
import { strings } from 'locales/locales';
import React, { useEffect, useRef, useState } from 'react';
import { FlatList, View } from 'react-native';
import ProfileLayout from '../../../../without-tabs/ProfileLayout';
import {
	ProductsScreenNavigationProp,
	ProductsScreenRouteProp,
} from './controller';
import { styles } from './stlye';
import * as _ from 'underscore';
interface ISearchView {
	route?: ProductsScreenRouteProp;
	navigation?: ProductsScreenNavigationProp;
}

const SearchView = ({ route, navigation }: ISearchView) => {
	const [products, setProducts] = useState([]);
	const [searchQuery, setSearchQuery] = useState('');
	let [loading, setLoading] = useState(false);
	useEffect(() => {
		ref.current?.focus();
	}, []);
	let effect = async () => {
		try {
			let res = await requests.product.getProducts({
				searchQuery,
				pageSize: 100,
			});
			setProducts(res.data.data);
		} catch (error) {}
	};
	useEffect(() => {
		effect();
	}, [searchQuery]);
	const ref = useRef(null);
	return (
		<ProfileLayout headerTitle={strings.searchs || ''}>
			<View style={styles.container}>
				<SearchInput
					ref={ref}
					setText={_.debounce(setSearchQuery, 500)}
					containerStyle={{ marginTop: 30 }}
				/>
				<FlatList
					data={products}
					numColumns={2}
					renderItem={(props) => (
						<VerticalItem {...props} bigSize hasMargin />
					)}
					decelerationRate={'fast'}
					showsHorizontalScrollIndicator={false}
					keyExtractor={(e) => e.id.toString()}
				/>
			</View>
		</ProfileLayout>
	);
};

export default SearchView;
