import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/core';
import { View, Text, TouchableOpacity } from 'react-native';
import DefaultButton from 'components/general/DefaultButton';
import DefaultInput from 'components/general/DefaultInput';

import { styles } from './style';
import { strings } from 'locales/locales';
import { ChevronIcon } from 'assets/icons/icons';
import LoginView from '../login/view';
import { Routes } from 'constants/routes';
import { useAppSelector } from 'utils/hooks';
import { selectUser, setUserPhone } from 'store/slices/userSlice';
import { useDispatch } from 'react-redux';

const RegisterView = () => {
	let navigation = useNavigation();
	let user = useAppSelector(selectUser);
	// let dispatch = useDispatch()
	// let setPhone = (num: string) => { dispatch(setUserPhone(num)) }
	let onNextPress = () => {
		navigation.navigate(Routes.MY_PROFILE);
	};
	const [code, setCode] = useState('');

	return (
		<View style={styles.container}>
			<View style={styles.top}>
				<View style={styles.mt20}>
					<View style={styles.mt12}>
						<Text style={styles.textConfirmation}>{strings.confirmation}</Text>
						<DefaultInput placeholder={'Код с подтверждение'} value={code} onChange={setCode} keyboardType={'numeric'}/>
					</View>
				</View>
			</View>
			<View style={styles.center}>
				<DefaultButton
					text={strings.toComeIn}
					marginDisabled
					onPress={onNextPress}
				/>
			</View>
			<View style={styles.bottom}>
				<Text style={styles.text3}>izle</Text>
			</View>
		</View>
	);
};

export default RegisterView;
