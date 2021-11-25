import { CloseIcon } from 'assets/icons/icons';
import SecondButton from 'components/general/SecondButton';
import Header from 'components/navigation/Header';
import { colors } from 'constants/colors';
import { strings } from 'locales/locales';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import {
	FilterScreenNavigationProp,
	FilterScreenRouteProp,
} from './controller';
import { styles } from './style';
import RangeSlider from 'components/general/range-slider/RangeSlider';
import { Routes } from 'constants/routes';

const arr1 = [
	'Телефоны',
	'Телевизоры',
	'Стиральные машины',
	'Ноутбуки',
	'Планшеты',
	'Микроволновки',
];

const arr2 = [
	'Apple',
	'Doogee',
	'Huawei',
	'Samsung',
	'OnePlus',
	'Realme',
	'Techno',
	'BQ',
	'Xiomi',
	'Honor',
	'Nokia',
	'OPPO',
	'Vivo',
	'ZTE',
];

interface IFilterView {
	navigation: FilterScreenNavigationProp;
	route: FilterScreenRouteProp;
	categories: any;
}

const FilterView = ({ navigation, route, categories = [] }: IFilterView) => {
	const isCategory = route.params.from === 'categories';
	const [selected, setSelected] = useState(-1);
	const [low, setLow] = useState(1200000);
	const [high, setHigh] = useState(18000000);
	return (
		<View style={styles.container}>
			<Header
				title={strings.filter}
				rightEdge={() => (
					<Text style={styles.cancel}>{strings.reset}</Text>
				)}
			/>
			<ScrollView showsVerticalScrollIndicator={true}>
				<Text style={styles.title}>{strings.sort}</Text>
				<View style={styles.range}>
					<RangeSlider {...{ high, low, setLow, setHigh }} />
				</View>
				<Text style={styles.title}>
					{isCategory ? strings.categories : strings.manufacturers}
				</Text>
				<View style={styles.box}>
					{categories?.map((e, i) => (
						<TouchableOpacity
							onPress={() => setSelected(i)}
							key={i}
							style={styles.row}
						>
							<Text style={styles.text}>{e.title}</Text>
							<View style={styles.circle}>
								{selected === i && <View style={styles.dot} />}
							</View>
						</TouchableOpacity>
					))}
				</View>
				<View style={styles.buttonRow}>
					<SecondButton
						onPress={() => {
							navigation.goBack();
						}}
						ph={32}
						text={isCategory ? strings.cancel : strings.allBrands}
					/>
					<SecondButton
						onPress={() => {
							let params = {
								priceMax: high,
								priceMin: low,
							};
							if (selected !== -1) {
								params.categoryId = categories[selected].id;
							}
							navigation.navigate(Routes.PRODUCTS, params);
						}}
						ph={16}
						bg={colors.darkBlue}
						bl={colors.darkBlue}
						cl={colors.white}
						text={strings.sort}
					/>
				</View>
				<View style={styles.mb20} />
			</ScrollView>
		</View>
	);
};

export default FilterView;
