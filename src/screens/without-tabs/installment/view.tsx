import React, { useState,useRef } from 'react';

import { Text, View } from 'react-native';
import Header from 'components/navigation/Header';
import ModalDropdown from 'react-native-modal-dropdown';
import { styles } from './style';
import { strings } from 'locales/locales';
import { SearchIcon } from 'assets/icons/icons';
import { colors } from 'constants/colors';

const InstallmentView = () => {
	let options  = useRef([
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
			<View>
				<ModalDropdown
					options={options}
					textStyle={styles.textStyle}
					dropdownTextHighlightStyle={{color: colors.blue}}
					dropdownStyle={{
						borderTopLeftRadius:0,
						borderTopRightRadius:0,
						borderBottomRightRadius: 7,
						borderBottomLeftRadius: 7,
						paddingHorizontal: 10,
					}}
					adjustFrame={(style) => {
						return {
							...style,
							top: style.top + 28,
							left: style.left - 6,
							height: style.height + 27 * options.length,
							flex:1
						};
					}}
					defaultValue={options[0]}
					renderRow={(option, index) => (
						<View style={styles.value}>
							<Text style={styles.valueText}>{index + 1}</Text>
							<Text style={styles.valueTexts}>{option}</Text>
						</View>
					)}
					style={styles.dropdownStyle}
				/>
			</View>
		</View>
	);
};

export default InstallmentView;
