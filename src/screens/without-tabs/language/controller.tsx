import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Routes } from 'constants/routes';
import React, { useState } from 'react';
import { useAppDispatch } from 'utils/hooks';
import { WithoutStackParamList } from '..';
import LanguageView from './view';
import { setUserLanguage } from 'store/slices/userSlice';

const arr = ['Русский', 'O’zbekcha', 'English'];

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
