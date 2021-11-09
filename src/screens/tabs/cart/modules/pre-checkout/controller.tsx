import React from 'react';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CartStackParamList } from 'routes/tabs/CartStack';

import PreCheckoutView from './view';
import { Routes } from 'constants/routes';
import { RouteProp } from '@react-navigation/core';

export type PreCheckoutScreenNavigationProps = NativeStackNavigationProp<
	CartStackParamList,
	Routes.PRE_CHECKOUT
>;

export type PreCheckoutScreenRouteProps = RouteProp<
	CartStackParamList,
	Routes.PRE_CHECKOUT
>;

export type PreCheckoutScreenProps = {
	navigation: PreCheckoutScreenNavigationProps;
	route: PreCheckoutScreenRouteProps;
};

const PreCheckoutController = ({
	route,
	navigation,
}: PreCheckoutScreenProps) => {
	return <PreCheckoutView navigation={navigation} route={route} />;
};

export default PreCheckoutController;
