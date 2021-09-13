import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AuthView from './view';

const AuthController = () => {
	const insets = useSafeAreaInsets();

	return <AuthView insets={insets} />;
};

export default AuthController;
