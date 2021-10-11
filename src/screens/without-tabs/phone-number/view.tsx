import React from 'react';
import { Text, View, } from 'react-native';

import { styles } from './stlye';
import { strings } from 'locales/locales';
import ProfileLayout from '../ProfileLayout';
import DefaultInput from 'components/general/DefaultInput';
import { useNavigation } from '@react-navigation/core';
import { useAppSelector } from 'utils/hooks';
import { useDispatch } from 'react-redux';
import { selectUser, setUserPhone } from 'store/slices/userSlice';

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
	return (
		<ProfileLayout headerTitle={strings.phoneNamber || ''}>
			<View style={styles.container}>
				<View style={styles.phoneInput}>
					<Text>{strings.phoneNamber}</Text>
					<DefaultInput
						placeholder={'(307) 555-0133'}
						value={user.phone}
						onChange={setPhone}
						keyboardType={'numeric'}
					/>
				</View>
			</View>
		</ProfileLayout>
	);
};

export default PhoneNumberView;