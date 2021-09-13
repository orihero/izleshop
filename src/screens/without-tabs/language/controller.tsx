import React, { useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { WithoutStackParamList } from '..';
import LanguageView from './view';
import { Routes } from 'src/constants/routes';

const arr = ['Русский', 'O’zbekcha', 'English'];

export type LoginScreenNavigationProp = NativeStackNavigationProp<
	WithoutStackParamList,
	Routes.LANGUAGE
>;

export type LoginScreenProps = {
	navigation: LoginScreenNavigationProp;
};

const LanguageController = ({ navigation }: LoginScreenProps) => {
	const [language, setLanguage] = useState(0);

	const onPress = () => {
		if (navigation.canGoBack()) {
			navigation.goBack();
		}
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
