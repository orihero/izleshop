import SearchInput from 'components/general/Search';
import { strings } from 'locales/locales';
import React, { useEffect, useRef, useState } from 'react';
import { FlatList, View } from 'react-native';
import { requests } from 'api/requests';
import ProfileLayout from '../../../../without-tabs/ProfileLayout';
import {
	ProductsScreenNavigationProp,
	ProductsScreenRouteProp
} from './controller';
import { styles } from './stlye';
import { windowWidth } from 'constants/sizes';
import VerticalItem from 'components/special/VerticalItem';
import { ListEmptyComponent } from 'screens/tabs/home/view';

interface ISearchView {
	route?: ProductsScreenRouteProp;
	navigation?: ProductsScreenNavigationProp;
}

const SearchView = ({ route, navigation }: ISearchView) => {
	const [products, setProducts] = useState([])
	const [searchQuery, setSearchQuery] = useState("")
	let [loading, setLoading] = useState(false);
	useEffect(() => {
		ref.current?.focus()
	}, [])
	let effect = async () => {
		try {
			let res = await requests.product.getProducts({ searchQuery })
			setProducts(res.data.data)
		} catch (error) {

		}
	}
	useEffect(() => {
		effect();
	}, [searchQuery])
	const ref = useRef(null)
	return (
		<ProfileLayout headerTitle={strings.searchs || ''}>
			<View style={styles.container}>
				<SearchInput ref={ref} setText={setSearchQuery} />
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
