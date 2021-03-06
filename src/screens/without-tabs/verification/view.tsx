import React, { useState } from 'react';
import { Text, View } from 'react-native';

import ProfileLayout from '../ProfileLayout';
import { styles } from './style';
import { strings } from 'locales/locales';
import DefaultInput from 'components/general/DefaultInput';
import { useNavigation } from '@react-navigation/core';
import { useAppSelector } from 'utils/hooks';
import { useDispatch } from 'react-redux';
import { selectUser, setUserName, setUserData } from 'store/slices/userSlice';
import DefaultButton from 'components/general/DefaultButton';

import { Routes } from 'constants/routes';
import { requests } from 'api/requests';

interface IVerificationProps {
	arr: string[];
	onPress: () => {};
}

const VerificationView = ({}: IVerificationProps) => {
	let navigation = useNavigation();
	let user = useAppSelector(selectUser);
	const dispatch = useDispatch();
	const [code, setCode] = useState('');
	const [loading, setLoading] = useState(false);
	let onNextPress = async () => {
		if (loading) {
			return;
		}
		setLoading(true);
		try {
			let res = await requests.auth.login(
				'+998' + user.userData?.phone || '',
				code
			);

			if (res.data.success === 'false') {
				alert(res.data.message);
				setLoading(false);
				return;
			}
			dispatch(setUserData(res.data));
		} catch (error) {
			alert('код введён неправильно');
			return;
		} finally {
			setLoading(false);
		}
		//@ts-ignore
		navigation.navigate(Routes.TABS);
	};
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{strings.confirmation}</Text>

			<View style={styles.input}>
				<DefaultInput
					value={code}
					onChange={(e) => setCode(e)}
					placeholder={strings.confirmationCode}
					keyboardType="numeric"
					maxLength={6}
				/>
			</View>
			<View style={styles.buttom}>
				<DefaultButton
					loading={loading}
					text={strings.toComeIn}
					onPress={onNextPress}
					marginDisabled
				/>
			</View>
			<Text style={styles.izle}>izle</Text>
		</View>
	);
};

export default VerificationView;
