import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Routes } from 'constants/routes';
import React, { useState } from 'react';
import { useAppDispatch } from 'utils/hooks';
import { WithoutStackParamList } from '..';
import LanguageView from './view';
import { setUserLanguage } from 'store/slices/userSlice';
import { strings } from 'locales/locales';

const arr = ['Karakalpakstan', 'Русский', 'O’zbekcha'];

export type LoginScreenNavigationProp = NativeStackNavigationProp<
	WithoutStackParamList,
	Routes.LANGUAGE
>;

export type LoginScreenProps = {
	navigation: LoginScreenNavigationProp;
};

const LanguageController = ({}: LoginScreenProps) => {
	const [language, setLanguage] = useState(0);
	let dispatch = useAppDispatch();
	let navigation = useNavigation();
	const onPress = () => {
		dispatch(setUserLanguage(language));
		let l = 'kk';
		switch (language) {
			case 1:
				l = 'ru';
				break;
			case 3:
				l = 'uz';
				break;
			default:
				l = 'kk';
		}
		strings.setLanguage(l);
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
