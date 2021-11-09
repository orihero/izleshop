import React, { useEffect, useState } from 'react';

import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Header from 'components/navigation/Header';
import DefaultInput from 'components/general/DefaultInput';
import DefaultSelect from 'components/general/DefaultSelect';
import DefaultButton from 'components/general/DefaultButton';

import { styles } from './style';
import { strings } from 'locales/locales';
import { useAppDispatch, useAppSelector } from 'utils/hooks';
import { selectUser } from 'store/slices/userSlice';
import { useNavigation } from '@react-navigation/core';
import { Routes } from 'constants/routes';
import { useDispatch } from 'react-redux';
import { requests } from 'api/requests';

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

const ChecoutView = ({ route }: ICheckoutViewProps) => {
	let effect = async () => {
		try {
			let res = await requests.helpers.getRegions();
			setRegions(res.data);
		} catch (error) {}
	};

	useEffect(() => {
		effect();
	}, []);

	const [regions, setRegions] = useState([]);
	let products = route.params;
	let navigation = useNavigation();

	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [city, setCity] = useState('');
	const [district, setDistrict] = useState('');
	const [address, setAddress] = useState('');
	const [note, setNote] = useState('');

	let onNextPress = async () => {
		//@ts-ignore
		try {
			let response = await requests.product.makeOrder({
				receiverName: name,
				paymentType: 'payme',
				receiverPhone: phone,
				address: address,
				district: district,
				note: 'note message',
				index: '111201',
				city: city,
				products: products,
			});
			if (!!response) {
				navigation.navigate(Routes.HOME_STACK);
			}
		} catch (error) {
			console.log(error.response);
		}

		console.log('LOLLL');
	};

	return (
		<View style={styles.container}>
			<Header title={strings.checkout} />
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.ph20}>
					<View style={styles.mt20}>
						<Text style={styles.text1}>{`${strings.name}*`}</Text>
						<View style={styles.mt10}>
							<DefaultInput
								placeholder={'ФИО'}
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
							<DefaultInput
								placeholder={'+998901234567'}
								value={phone}
								onChange={setPhone}
							/>
						</View>
					</View>
					<View style={styles.mt25}>
						<Text
						// style={styles.text1}
						>{`${strings.selectCity}*`}</Text>
						<DefaultSelect
							value={city}
							values={regions}
							setValue={setCity}
							placeholder={strings.cityNotSelected || ''}
						/>
					</View>
					<View style={styles.mt20}>
						<Text
							style={styles.text1}
						>{`${strings.selectDistrict}*`}</Text>
						<View style={styles.mt10}>
							<DefaultInput
								placeholder={'Видите район '}
								value={name}
								onChange={setName}
							/>
						</View>
					</View>
					<View style={styles.mt19}>
						<Text
						// style={styles.text1}
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
						<Text>{`${strings.note}`}</Text>
						<View style={styles.mt12}>
							<DefaultInput
								placeholder={''}
								isTextArea
								value={note}
								onChange={setNote}
							/>
						</View>
					</View>
					<View style={styles.mt19}>
						<View style={styles.mapContainer}>
							<MapView
								// region={region}
								showsUserLocation={true}
								showsMyLocationButton={true}
								style={styles.map}
								initialRegion={{
									latitude: 41.311081,
									longitude: 69.240562,
									latitudeDelta: 0.0922,
									longitudeDelta: 0.0421,
								}}
							>
								{/* <Marker coordinate={coordinate} /> */}
							</MapView>
						</View>
					</View>
					<View style={styles.mt21}>
						<DefaultButton
							marginDisabled
							text={strings.checkout}
							onPress={onNextPress}
						/>
					</View>
				</View>
				<View style={styles.mb80} />
			</ScrollView>
		</View>
	);
};

export default ChecoutView;
