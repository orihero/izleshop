import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Header from 'components/navigation/Header';
import SecondButton from 'components/general/SecondButton';
import { strings } from 'locales/locales';
import { CloseIcon } from 'assets/icons/icons';
import { colors } from 'constants/colors';
import { styles } from './style';
import { FilterScreenNavigationProp, FilterScreenRouteProp } from './controller';

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
}

const FilterView = ({ navigation, route }: IFilterView) => {
	const tmp = route.params.from === 'categories';

	return (
		<View style={styles.container}>
			<Header
				title={strings.filter}
				rightEdge={() => <CloseIcon size={20} color={colors.gray} />}
			/>
			<ScrollView showsVerticalScrollIndicator={true}>
				<Text style={styles.title}>{strings.sort}</Text>
				<View style={styles.range}>
					<Text>RangeView</Text>
				</View>
				<Text style={styles.title}>
					{tmp ? strings.categories : strings.manufacturers}
				</Text>
				<View style={styles.box}>
					{tmp
						? arr1.map((e, i) => (
								<View key={i} style={styles.row}>
									<Text style={styles.text}>{e}</Text>
									<View style={styles.square} />
								</View>
						  ))
						: arr2.map((e, i) => (
								<View key={i} style={styles.row}>
									<Text style={styles.text}>{e}</Text>
									<View
										style={
											tmp ? styles.circle : styles.square
										}
									/>
								</View>
						  ))}
				</View>
				<View style={styles.buttonRow}>
					<SecondButton
						onPress={() => {}}
						ph={32}
						text={tmp ? strings.cancel : strings.allBrands}
					/>
					<SecondButton
						onPress={() => {}}
						ph={16}
						bg={colors.darkBlue}
						bl={colors.darkBlue}
						cl={colors.white}
						text={tmp ? strings.sort : strings.byRating}
					/>
				</View>
				<View style={styles.mb20} />
			</ScrollView>
		</View>
	);
};

export default FilterView;
