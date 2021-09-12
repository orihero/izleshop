import { RouteProp } from '@react-navigation/core';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Routes } from 'src/constants/routes';
import { RootStackParamList } from 'src/routes/AppRouter';
import AuthView from './view';

export type AuthScreenRouteProp = RouteProp<RootStackParamList, Routes.AUTH>;

export type AuthScreenProps = {
	route: AuthScreenRouteProp;
};

const AuthController = ({ route }: AuthScreenProps) => {
	const insets = useSafeAreaInsets();

	return <AuthView insets={insets} route={route} />;
};

export default AuthController;
