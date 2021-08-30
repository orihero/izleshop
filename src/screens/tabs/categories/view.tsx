import React from 'react';
import { Text, View } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import SearchInput from '../../../components/general/Search';
import { colors } from '../../../constants/colors';
import { windowWidth } from '../../../constants/sizes';
import { strings } from '../../../locales/locales';
import BrandsView from './components/BrandsView';
import Categories from './components/CategoriewView';
import { styles } from './style';

const renderScene = SceneMap({
	categories: Categories,
	brands: BrandsView,
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
				renderTabBar={(props) => (
					<TabBar
						{...props}
						style={{
							backgroundColor: colors.lightBlue,
							borderWidth: 0,
							shadowOpacity: 0,
						}}
						indicatorStyle={{
							backgroundColor: colors.black,
							width: '30%',
							left: '10%',
							bottom: '15%',
						}}
						labelStyle={{
							textTransform: 'capitalize',
							color: colors.black,
						}}
					/>
				)}
			/>
		</View>
	);
};

export default CategoriesView;
