import React from 'react';
import { Text, View, } from 'react-native';

import ProfileLayout from '../ProfileLayout';
import { styles } from './style';
import { strings } from 'locales/locales';
import DefaultInput from 'components/general/DefaultInput';
import { useNavigation } from '@react-navigation/core';
import { useAppSelector } from 'utils/hooks';
import { useDispatch } from 'react-redux';
import { selectUser, setUserName } from 'store/slices/userSlice';
import DefaultButton from 'components/general/DefaultButton';

import {Routes} from 'constants/routes'



interface IVerificationProps {

	arr: string[];
	onPress: () => {};
}

const VerificationView = ({

}: IVerificationProps) => {
	let navigation = useNavigation();
	let user = useAppSelector(selectUser);
	let dispatch = useDispatch()
	let setName = (name: string) => { dispatch(setUserName(name)) }
	let onNextPress = () => {
		//@ts-ignore
		navigation.navigate(Routes.REGISTER);
	};
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{strings.confirmation}</Text>

			<View style={styles.input}>
				<DefaultInput
					placeholder={strings.confirmationCode}
					value={user.name}
					onChange={setName}
				/>
			</View>
			<View style={styles.buttom}>
				<DefaultButton
					text={strings.toComeIn}
					onPress={onNextPress}
				/>
			</View>
			<Text style={styles.izle}>izle</Text>
		</View>
	);
};

export default VerificationView;