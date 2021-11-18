import React, { useState, useRef } from 'react';

import { Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import Header from 'components/navigation/Header';
import ModalDropdown from 'react-native-modal-dropdown';
import { styles } from './style';
import { strings } from 'locales/locales';
import { SearchIcon } from 'assets/icons/icons';
import { colors } from 'constants/colors';
import DefaultButton from 'components/general/DefaultButton';
import { useNavigation } from '@react-navigation/core';
import SweetAlert from 'react-native-sweet-alert';
import { Routes } from 'constants/routes';


const InstallmentView = () => {
	let navigation = useNavigation();
	let options = useRef([
		'Месяцы',
		'Месяцы',
		'Месяцы',
		'Месяцы',
		'Месяцы',
		'Месяцы',
		'Месяцы',
		'Месяцы',
		'Месяцы',
		'Месяцы',
		'Месяцы',
		'Месяцы',
	]).current;
	const [selectedIndex, setSelectedIndex] = useState(0)
	let onOrder = () => {
		SweetAlert.showAlertWithOptions(
			{
				title: strings.warning,
				subTitle: strings.success,
				confirmButtonTitle: 'OK',
				confirmButtonColor: '#000',
				otherButtonTitle: 'Cancel',
				otherButtonColor: '#dedede',
				style: 'success',
				cancellable: true,
			},
			() => {
				navigation.navigate(Routes.HOME_STACK);
			}
		);
	}
	return (
		<View style={styles.container}>
			<Header
				title={strings.installment}
				bold
				rightEdge={() => <SearchIcon size={20} />}
			/>
			<View style={styles.installment}>
				<Text style={styles.text}>%</Text>
				<Text style={styles.installments}>{strings.installment}</Text>
			</View>
			<View style={styles.boxOne}>
				<View>
					<ModalDropdown
						options={options}
						textStyle={styles.textStyle}
						dropdownTextHighlightStyle={{ color: colors.blue }}
						dropdownStyle={{
							borderTopLeftRadius: 0,
							borderTopRightRadius: 0,
							borderBottomRightRadius: 7,
							borderBottomLeftRadius: 7,
							paddingHorizontal: 10,
						}}
						adjustFrame={(style) => {
							return {
								...style,
								top: style.top + 28,
								left: style.left - 6,
								height: style.height + 10 * options.length,
								flex: 1,
							};
						}}
						defaultValue={options[selectedIndex]}
						renderRow={(option, index) => (
							<TouchableOpacity onPress={() => setSelectedIndex(index)}>
								<View style={styles.value}>
									<Text style={styles.valueText}>
										{index + 1}
									</Text>
									<Text style={styles.valueTexts}>{option}</Text>
								</View>
							</TouchableOpacity>
						)}
						style={styles.dropdownStyle}
						showsVerticalScrollIndicator={false}
					/>
				</View>
				<View style={styles.boxTwo}>
					<Text style={styles.textTwo}>
						Я согласен с правилами покупки товаров
					</Text>
				</View>
				<DefaultButton text={strings.order} onPress={onOrder} />
			</View>
		</View>
	);
};

export default InstallmentView;
