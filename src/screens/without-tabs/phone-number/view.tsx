import React, { useState } from 'react';
import { Text, View, } from 'react-native';

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

interface IPhoneNumberViewProps {
	password: string;
	setPassword: (e: string) => void;
	onPress: () => void;
	navigate: () => void
}


const PhoneNumberView = ({ }: IPhoneNumberViewProps) => {
	let navigation = useNavigation();
	let user = useAppSelector(selectUser);
	let dispatch = useDispatch()
	let setPhone = (num: string) => { dispatch(setUserPhone(num)) }

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
				<View style={styles.codeInput}>
					<Text style={styles.text}>{strings.confirmationCode}</Text>
					<PhoneInput
						placeholder={'1255'}
						 value={code} 
						 onChange={setCode}
						  keyboardType={'numeric'}
					/>
				</View>
			</View>
		</ProfileLayout>
	);
};

export default PhoneNumberView;