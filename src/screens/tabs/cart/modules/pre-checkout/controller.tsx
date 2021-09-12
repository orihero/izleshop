import React from 'react';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CartStackParamList } from 'routes/tabs/CartStack';

import PreCheckoutView from './view';
import { Routes } from 'constants/routes';

export type PreCheckoutScreenNavigationProps = NativeStackNavigationProp<
	CartStackParamList,
	Routes.PRE_CHECKOUT
>;

export type PreCheckoutScreenProps = {
	navigation: PreCheckoutScreenNavigationProps;
};

const PreCheckoutController = ({ navigation }: PreCheckoutScreenProps) => {
	return <PreCheckoutView navigation={navigation} />;
};

export default PreCheckoutController;
