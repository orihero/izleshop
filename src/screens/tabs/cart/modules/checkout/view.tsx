import { useNavigation } from '@react-navigation/core';
import { requests } from 'api/requests';
import DefaultButton from 'components/general/DefaultButton';
import DefaultInput from 'components/general/DefaultInput';
import DefaultSelect from 'components/general/DefaultSelect';
import Header from 'components/navigation/Header';
import { Routes } from 'constants/routes';
import { strings } from 'locales/locales';
import React, { useEffect, useState } from 'react';
import { Alert, Linking, Platform, ScrollView, Text, View } from 'react-native';
import {
	selectUser,
	setUserOrders,
	setUserPhone,
} from 'store/slices/userSlice';
import { clearCart } from 'store/slices/cartSlice';
import { useAppDispatch, useAppSelector } from 'utils/hooks';
import { styles } from './style';
import SweetAlert from 'react-native-sweet-alert';
import MaskInput, { createNumberMask, Masks } from 'react-native-mask-input';
import { colors } from 'constants/colors';
import { first } from 'underscore';

const arr1 = [
	'Value 1',
	'Value 2',
	'Value 3',
	'Value 4',
	'Value 5',
	'Value 6',
	'Value 7',
	'Value 8',
	'Value 9',
	'Value 10',
	'Value 11',
	'Value 12',
	'Value 13',
	'Value 14',
	'Value 15',
	'Value 16',
	'Value 17',
	'Value 18',
	'Value 19',
	'Value 20',
];

const arr2 = [
	'Valuee 1',
	'Valuee 2',
	'Valuee 3',
	'Valuee 4',
	'Valuee 5',
	'Valuee 6',
	'Valuee 7',
	'Valuee 8',
	'Valuee 9',
	'Valuee 10',
	'Valuee 11',
	'Valuee 12',
	'Valuee 13',
	'Valuee 14',
	'Valuee 15',
	'Valuee 16',
	'Valuee 17',
	'Valuee 18',
	'Valuee 19',
	'Valuee 20',
];

interface ICheckoutViewProps {
	password: string;
	setPassword: (e: string) => void;
	onPress: () => void;
	navigate: () => void;
}

let convertToMaskedPhone = (num: string) => {
	if (num.length > 7 && num.substr(0, 3) === '998') {
		num = num.substr(3, num.length);
	}
	let first = num.substr(0, 2);
	let last = num.substr(2, num.length);
	return `(${first}) ${last}`;
};

const ChecoutView = ({ route }: ICheckoutViewProps) => {
	let user = useAppSelector(selectUser);
	let effect = async () => {
		try {
			let res = await requests.helpers.getRegions();
			setRegions(res.data);
			let resCity = await requests.helpers.getCity();
			setCities(resCity.data);
		} catch (error) {}
	};

	useEffect(() => {
		effect();
	}, []);

	const [regions, setRegions] = useState([]);
	const [cities, setCities] = useState([]);
	let { products, paymentMethod, installment_plan } = route.params || {};
	let navigation = useNavigation();

	let el = convertToMaskedPhone(user.userData?.phone || '');
	const [name, setName] = useState(user.userData?.first_name);
	const [phone, setPhone] = useState('');
	const [city, setCity] = useState('');
	const [regionCities, setRegionCities] = useState('');
	const [district, setDistrict] = useState('');
	const [address, setAddress] = useState('');
	const [note, setNote] = useState('');
	const [value, setValue] = useState(el);

	const [loading, setLoading] = useState(false);

	let dispatch = useAppDispatch();

	let onNextPress = async () => {
		console.log({ address, name, phone, city, district });

		if (!address || !name || !city || !district) {
			Alert.alert(strings.warning, strings.fillAllFields);
			return;
		}
		setLoading(true);
		//@ts-ignore
		try {
			let req = {
				receiverName: name,
				paymentType: paymentMethod,
				receiverPhone: phone,
				address: address,
				district: district,
				note: note,
				index: '111201',
				city: city,
				regionCities: district,
				products: products,
				installment_plan: installment_plan,
			};
			let response = await requests.product.makeOrder(req);
			let orderRes = await requests.product.getUserOrders();
			dispatch(setUserOrders(orderRes.data));
			if (Platform.OS === 'ios') {
				Alert.alert(strings.warning, strings.success, [
					{
						onPress: () => {
							if (!!response) {
								dispatch(clearCart());
								if (
									response.data.paymentUrl &&
									installment_plan === null
								) {
									Linking.openURL(response.data.paymentUrl);
								}
								navigation.navigate(Routes.CART);
							}
						},
						style: 'default',
						text: 'OK',
					},
				]);
			} else {
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
						if (!!response) {
							dispatch(clearCart());
							if (
								response.data.paymentUrl &&
								installment_plan === null
							) {
								Linking.openURL(response.data.paymentUrl);
							}
							navigation.navigate(Routes.CART);
						}
					}
				);
			}
		} catch (error) {
		} finally {
			setLoading(false);
		}
	};

	const localPhoneMask = [
		'+',
		'9',
		'9',
		'8',
		'(',
		/\d/,
		/\d/,
		')',
		' ',
		/\d/,
		/\d/,
		/\d/,
		' ',
		/\d/,
		/\d/,
		' ',
		/\d/,
		/\d/,
	];
	let currentCity = cities?.find((e) => e.name === city);
	let regs = [];
	if (!!currentCity) {
		regs = regions
			.filter((e) => e.city_id === currentCity.id)
			.map((e) => e.name);
	}
	return (
		<View style={styles.container}>
			<Header title={strings.checkout} />
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.box}>
					<View style={styles.ph20}>
						<View style={styles.mt20}>
							<Text
								style={styles.text1}
							>{`${strings.name}*`}</Text>
							<View style={styles.mt10}>
								<DefaultInput
									placeholder={strings.fio}
									value={name}
									onChange={setName}
								/>
							</View>
						</View>
						<View style={styles.mt20}>
							<Text
								style={styles.text1}
							>{`${strings.phoneNumber}*`}</Text>
							<View style={styles.mt10}>
								<MaskInput
									value={value}
									onChangeText={(masked, unmasked) => {
										setValue(masked);
										setPhone(unmasked);
									}}
									mask={localPhoneMask}
									onFocus={() => setValue('+998')}
									keyboardType="numeric"
									placeholderTextColor={colors.black}
									style={styles.inputColor}
								/>
							</View>
						</View>
						<View style={styles.mt25}>
							<Text
								style={styles.text4}
							>{`${strings.selectCity}*`}</Text>
							<DefaultSelect
								value={city}
								values={cities.map((e) => e.name)}
								setValue={setCity}
								placeholder={strings.cityNotSelected || ''}
							/>
						</View>
						<View style={styles.mt25}>
							<Text
								style={styles.text4}
							>{`${strings.selectDistrict}*`}</Text>
							<DefaultSelect
								value={district}
								values={regs}
								setValue={setDistrict}
								placeholder={strings.cityNotSelected || ''}
							/>
						</View>
						<View style={styles.mt9}>
							<View style={styles.mt19}>
								<Text
									style={styles.text5}
								>{`${strings.address}*`}</Text>
								<View style={styles.mt12}>
									<DefaultInput
										placeholder={''}
										isTextArea
										value={address}
										onChange={setAddress}
									/>
								</View>
							</View>
							<View style={styles.mt19}>
								<Text
									style={styles.text5}
								>{`${strings.note}`}</Text>
								<View style={styles.mt12}>
									<DefaultInput
										placeholder={''}
										isTextArea
										value={note}
										onChange={setNote}
									/>
								</View>
							</View>
						</View>
						<View style={styles.mt21}>
							<DefaultButton
								marginDisabled
								text={strings.checkout}
								onPress={onNextPress}
								loading={loading}
							/>
						</View>
					</View>
				</View>
				<View style={styles.mb80} />
			</ScrollView>
		</View>
	);
};

export default ChecoutView;
