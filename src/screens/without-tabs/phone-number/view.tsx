import React, { useState } from 'react';
import { Text, View } from 'react-native';

import { styles } from './stlye';
import { strings } from 'locales/locales';
import ProfileLayout from '../ProfileLayout';
import { useNavigation } from '@react-navigation/core';
import { useAppSelector } from 'utils/hooks';
import { useDispatch } from 'react-redux';
import { selectUser, setUserPhone } from 'store/slices/userSlice';
import PhoneInput from 'components/general/PhoneInput';
import { PhoneIcon } from 'assets/icons/icons';
import { colors } from 'constants/colors';
import DefaultButton from 'components/general/DefaultButton';
import { Routes } from 'constants/routes';

interface IPhoneNumberViewProps {
	password: string;
	setPassword: (e: string) => void;
	onPress: () => void;
	navigate: () => void;
}

const PhoneNumberView = ({}: IPhoneNumberViewProps) => {
	let navigation = useNavigation();
	let user = useAppSelector(selectUser);
	let dispatch = useDispatch();
	let setPhone = (num: string) => {
		dispatch(setUserPhone(num));
	};
	const [loading, setLoading] = useState(false);
	let onNextPress = () => {
		if (loading) {
			return;
		}
		setLoading(true);
		setLoading(false);
		//@ts-ignore
		navigation.navigate(Routes.CONFIRATION_CODE);
	};

	const [code, setCode] = useState('');

	return (
		<ProfileLayout headerTitle={strings.phoneNamber || ''}>
			<View style={styles.container}>
				<View style={styles.phoneInput}>
					<Text style={styles.text}>{strings.phoneNamber}</Text>
					<PhoneInput
						placeholder={'(307) 555-0133'}
						value={user.phone}
						onChange={setPhone}
						keyboardType={'numeric'}
						Icon={PhoneIcon}
					/>
				</View>
				<View style={styles.center}>
					<DefaultButton
						text={strings.send}
						marginDisabled
						onPress={onNextPress}
						loading={loading}
					/>
				</View>
			</View>
		</ProfileLayout>
	);
};

export default PhoneNumberView;
