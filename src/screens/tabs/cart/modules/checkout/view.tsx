import React, { useState } from 'react';

import { Text, View, ScrollView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Header from 'components/navigation/Header';
import DefaultInput from 'components/general/DefaultInput';
import DefaultSelect from 'components/general/DefaultSelect';
import DefaultButton from 'components/general/DefaultButton';

import { styles } from './style';
import { strings } from 'locales/locales';

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

const ChecoutView = () => {
	const [region, setRegion] = useState({
		latitude: 41.311081,
		longitude: 69.240562,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421,
	});
	const [coordinate, setCoordinate] = useState({
		latitude: 41.311081,
		longitude: 69.240562,
	});
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [city, setCity] = useState('');
	const [district, setDistrict] = useState('');
	const [address, setAddress] = useState('');
	const [note, setNote] = useState('');

	const onPress = () => {
		console.log('onPressed');
	};

	return (
		<View style={styles.container}>
			<Header hideRightIcon title={strings.checkout} />
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.ph20}>
					<View style={styles.mt20}>
						<Text style={styles.text1}>{`${strings.name}*`}</Text>
						<View style={styles.mt12}>
							<DefaultInput value={name} onChange={setName} />
						</View>
					</View>
					<View style={styles.mt20}>
						<Text
							style={styles.text1}
						>{`${strings.phoneNumber}*`}</Text>
						<View style={styles.mt12}>
							<DefaultInput value={phone} onChange={setPhone} />
						</View>
					</View>
					<View style={styles.mt20}>
						<Text
							style={styles.text1}
						>{`${strings.selectCity}*`}</Text>
						<DefaultSelect
							value={city}
							values={arr1}
							setValue={setCity}
							placeholder={strings.cityNotSelected || ''}
						/>
					</View>
					<View style={styles.mt20}>
						<Text
							style={styles.text1}
						>{`${strings.selectDistrict}*`}</Text>
						<DefaultSelect
							value={district}
							values={arr2}
							setValue={setDistrict}
							placeholder={strings.districtNotSelected || ''}
						/>
					</View>
					<View style={styles.mt20}>
						<Text
							style={styles.text1}
						>{`${strings.address}*`}</Text>
						<View style={styles.mt12}>
							<DefaultInput
								isTextArea
								value={address}
								onChange={setAddress}
							/>
						</View>
					</View>
					<View style={styles.mt20}>
						<Text style={styles.text1}>{`${strings.note}`}</Text>
						<View style={styles.mt12}>
							<DefaultInput
								isTextArea
								value={note}
								onChange={setNote}
							/>
						</View>
					</View>
					<View style={styles.mt20}>
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
					<View style={styles.mt20}>
						<DefaultButton
							marginDisabled
							text={strings.checkout}
							onPress={onPress}
						/>
					</View>
				</View>
				<View style={styles.mb80} />
			</ScrollView>
		</View>
	);
};

export default ChecoutView;
