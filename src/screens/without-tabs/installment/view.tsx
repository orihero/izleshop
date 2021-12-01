import React, { useState, useRef, useEffect } from 'react';

import {
	Text,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import Header from 'components/navigation/Header';
import ModalDropdown, { ModalDropdownProps } from 'react-native-modal-dropdown';
import { styles } from './style';
import { strings } from 'locales/locales';
import { SearchIcon } from 'assets/icons/icons';
import { colors } from 'constants/colors';
import DefaultButton from 'components/general/DefaultButton';
import { useNavigation, useRoute } from '@react-navigation/core';
import SweetAlert from 'react-native-sweet-alert';
import { Routes } from 'constants/routes';
import { useSelector } from 'react-redux';
import { selectDollarRate } from 'store/slices/userSlice';
import { requests } from 'src/api/requests';

const InstallmentView = ({}) => {
	const [loading, setLoading] = useState(false);
	let navigation = useNavigation();
	let options = useRef([
		'1 ' + strings.month,
		'2 ' + strings.months,
		'3 ' + strings.months,
		'4 ' + strings.months,
		'5 ' + strings.months,
		'6 ' + strings.months,
	]).current;
	let {
		params: { data },
	} = useRoute();
	let dollar = useSelector(selectDollarRate);
	let [monthlyRate, setMonthlyRate] = useState(1.05);
	const [selectedIndex, setSelectedIndex] = useState(0);
	let _modal = useRef(null);

	useEffect(() => {}, [monthlyRate]);

	let onOrder = async () => {
		navigation.navigate(Routes.TABS, {
			screen: Routes.CART_STACK,
			params: {
				screen: Routes.CHECKOUT,
				params: {
					products: [
						{
							id: data.id,
							amount: 1,
							option: '',
							color: '',
							color_name: '',
						},
					],
					paymentMethod: 'payme',
					installment_plan: 1,
				},
			},
		});
	};

	const onSelect = (index) => {
		setSelectedIndex(index);

		switch (parseInt(index)) {
			case 0:
				setMonthlyRate(1.05);
				break;
			case 1:
				setMonthlyRate(1.1);
				break;
			case 2:
				setMonthlyRate(1.15);
				break;
			case 3:
				setMonthlyRate(1.2);
				break;
			case 4:
				setMonthlyRate(1.25);
				break;
			case 5:
				setMonthlyRate(1.3);
				break;

			default:
				setMonthlyRate(1);
				break;
		}

		_modal.current.hide();
	};
	let p = (dollar * data?.price + '')
		.toString()
		.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
	p = p.substr(0, p.length - 2) + '00';

	return (
		<View style={styles.container}>
			<Header title={strings.installment} bold />
			<View style={styles.installment}>
				<Text style={styles.name}>{strings.name} : </Text>
				<Text numberOfLines={1} style={styles.text}>
					{data?.name}
				</Text>
			</View>
			<View style={styles.installmen}>
				<Text style={styles.name}>{strings.sum} :</Text>
				<Text style={styles.installments}>
					{p} {strings.soum}
				</Text>
			</View>
			<View style={styles.boxOne}>
				<View>
					<ModalDropdown
						ref={_modal}
						options={options}
						textStyle={styles.textStyle}
						dropdownTextHighlightStyle={{ color: colors.blue }}
						animated={true}
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
								top: style.top + 18,
								left: style.left - 11,
								height: style.height + 10 * options.length,
								flex: 1,
							};
						}}
						defaultValue={options[selectedIndex]}
						renderRow={(option, index) => (
							<TouchableOpacity onPress={() => onSelect(index)}>
								<View style={styles.value}>
									<Text style={styles.valueText}>
										{index + 1}
									</Text>
									<Text style={styles.valueTexts}>
										{option}
									</Text>
								</View>
							</TouchableOpacity>
						)}
						style={styles.dropdownStyle}
						showsVerticalScrollIndicator={false}
					/>
				</View>
				<View style={{ justifyContent: 'center' }}>
					<View style={styles.boxTwo}>
						<Text style={styles.textTwo}>
							{strings.firstPaymentText} 30% :
						</Text>
						<Text style={styles.textTwo}>
							{Math.round(data?.price * dollar * 0.3)
								.toString()
								.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
								.substr(0, p.length - 4) + '00'}{' '}
							{strings.soum}
						</Text>
					</View>
					<View style={styles.boxTwo}>
						<Text style={styles.textTwo}>
							{strings.monthlyPaymentText} :
						</Text>
						<Text style={styles.textTwo}>
							{Math.round(
								(data?.price * 0.7 * dollar * monthlyRate) /
									(selectedIndex + 1)
							)
								.toString()
								.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
								.substr(0, p.length - 4) + '00'}{' '}
							{strings.soum}
						</Text>
					</View>
					<View style={styles.button}>
						<DefaultButton text={strings.order} onPress={onOrder} />
					</View>
				</View>
			</View>
		</View>
	);
};

export default InstallmentView;
