import React, { useState } from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import DefaultButton from 'components/general/DefaultButton';
import DefaultInput from 'components/general/DefaultInput';

import { styles } from './style';
import { strings } from 'locales/locales';
import { ChevronIcon } from 'assets/icons/icons';
import LoginView from '../login/view';
import { useNavigation } from '@react-navigation/core';
import { Routes } from 'constants/routes';

const RegisterView = () => {
	let navigation = useNavigation();
	let onNextPress = () => {
		navigation.navigate(Routes.TABS);
	};
	const [phone, setPhone] = useState('');

	return (
		<View style={styles.container}>
			<View style={styles.top}>
				<View style={styles.mt20}>
					<View style={styles.mt12}>
						<Text style={styles.textConfirmation}>{strings.confirmation}</Text>
						<DefaultInput placeholder={'Код с подтверждение'} value={phone} onChange={setPhone} />
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
