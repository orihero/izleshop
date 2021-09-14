import React from 'react';

import { View } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import SearchInput from 'components/general/Search';

import { Categories, Brands } from './views';

import { windowWidth } from 'constants/sizes';
import { strings } from 'locales/locales';
import { styles } from './style';

const renderScene = SceneMap({
	categories: Categories,
	brands: Brands,
});

const CategoriesView = () => {
	const [index, setIndex] = React.useState(0);
	const [routes] = React.useState([
		{ key: 'categories', title: strings.categories },
		{ key: 'brands', title: strings.brands },
	]);
	return (
		<View style={styles.container}>
			<SearchInput />
			<TabView
				navigationState={{ index, routes }}
				renderScene={renderScene}
				onIndexChange={setIndex}
				initialLayout={{ width: windowWidth }}
				swipeEnabled={false}
				renderTabBar={(props) => (
					<TabBar
						{...props}
						style={styles.tabStyle}
						labelStyle={styles.labelStyle}
						indicatorStyle={styles.indicatorStyle}
					/>
				)}
			/>
		</View>
	);
};

export default CategoriesView;
