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
import { useAppSelector } from 'utils/hooks';
import { selectUser } from 'store/slices/userSlice';

interface IFilterView {
	navigation: FilterScreenNavigationProp;
	route: FilterScreenRouteProp;
	categories: any;
}

const FilterView = ({ navigation, route, categories = [] }: IFilterView) => {
	const isCategory = route.params.from === 'categories';
	const [selected, setSelected] = useState(-1);
	const [low, setLow] = useState(0);
	const [high, setHigh] = useState(180000000);

	let { dollarRate } = useAppSelector(selectUser);
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
							console.log(route.params);
							let params = {
								priceMax: parseInt(high) / dollarRate,
								priceMin: parseInt(low) / dollarRate,
								from: route.params.from,
								title:
									selected !== -1
										? categories[selected].title
										: route.params.title,
							};
							if (selected !== -1) {
								params.categoryId = categories[selected].id;
							}
							route.params.setProducts([]);
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
