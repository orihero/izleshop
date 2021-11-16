import React, { useState } from 'react';
import { Text, View } from 'react-native';

import ProfileLayout from '../ProfileLayout';
import { styles } from './style';
import { strings } from 'locales/locales';
import DefaultButton from 'components/general/DefaultButton';
import PhoneInput from 'components/general/PhoneInput';
import { PhoneIcon } from 'assets/icons/icons';
import { useNavigation } from '@react-navigation/core';
import { useAppSelector } from 'utils/hooks';
import { selectUser, setUserPhone } from 'store/slices/userSlice';
import { useDispatch } from 'react-redux';
import { Routes } from 'constants/routes';

interface IPhoneNumberViewProps {
	password: string;
	setPassword: (e: string) => void;
	onPress: () => void;
	navigate: () => void;
}

const ConfirmationCodeView = ({}: IPhoneNumberViewProps) => {
	let navigation = useNavigation();
	let user = useAppSelector(selectUser);
	let dispatch = useDispatch();
	let setPhone = (num: string) => {
		dispatch(setUserPhone(num));
	};

	const [code, setCode] = useState('');
	const [loading, setLoading] = useState(false);
	let onNextPress = () => {
		if (loading) {
			return;
		}
		setLoading(true);
		setLoading(false);
		//@ts-ignore
		navigation.navigate(Routes.SETTINGS);
	};

	return (
		<ProfileLayout headerTitle={strings.phoneNamber || ''}>
			<View style={styles.container}>
				<View style={styles.codeInput}>
					<View style={styles.textBox}>
						<Text style={styles.text}>
							{strings.confirmationCode}
						</Text>
					</View>
					<PhoneInput
						placeholder={'1255'}
						value={code}
						onChange={setCode}
						keyboardType={'numeric'}
					/>
				</View>
				<View style={styles.center}>
					<DefaultButton
						text={strings.save}
						marginDisabled
						onPress={onNextPress}
						loading={loading}
					/>
				</View>
			</View>
		</ProfileLayout>
	);
};

export default ConfirmationCodeView;
