import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Routes } from 'constants/routes';
import React, { useState } from 'react';
import { useAppDispatch } from 'utils/hooks';
import { WithoutStackParamList } from '..';
import LanguageView from './view';
import { selectUser, setUserLanguage } from 'store/slices/userSlice';
import { strings } from 'locales/locales';
import { useSelector } from 'react-redux';
import { DevSettings } from 'react-native';

const arr = ['Karakalpakstan', 'Русский', 'O’zbekcha'];

export type LoginScreenNavigationProp = NativeStackNavigationProp<
	WithoutStackParamList,
	Routes.LANGUAGE
>;

export type LoginScreenProps = {
	navigation: LoginScreenNavigationProp;
};

const LanguageController = ({}: LoginScreenProps) => {
	let user = useSelector(selectUser);
	const [language, setLanguage] = useState(user.languageIndex);
	let dispatch = useAppDispatch();
	let navigation = useNavigation();
	console.log(user.languageIndex);

	const onPress = async () => {
		// await new Promise((resolve) => setTimeout(resolve, 1000));
		dispatch(setUserLanguage(language));
		// DevSettings.reload();
		navigation.goBack();
	};

	return (
		<LanguageView
			arr={arr}
			onPress={onPress}
			language={language}
			setLanguage={setLanguage}
		/>
	);
};

export default LanguageController;
