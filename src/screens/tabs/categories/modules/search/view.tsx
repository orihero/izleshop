import React from 'react';
import { Text, TextInput, View } from 'react-native';

import ProfileLayout from '../../../../without-tabs/ProfileLayout';
import { styles } from './stlye';
import { strings } from 'locales/locales';
import {
	ProductsScreenNavigationProp,
	ProductsScreenRouteProp,
} from './controller';
import SearchInput from 'components/general/Search';

interface ISearchView {
	route?: ProductsScreenRouteProp;
	navigation?: ProductsScreenNavigationProp;
}

const SearchView = ({ route, navigation }: ISearchView) => {
	return (
		<ProfileLayout headerTitle={strings.searchs || ''}>
			<View style={styles.container}>
				<SearchInput />
			</View>
		</ProfileLayout>
	);
};

export default SearchView;
