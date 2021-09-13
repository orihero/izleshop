import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Routes } from 'constants/routes';
import { CartStackParamList } from 'routes/tabs/CartStack';
import CartView from './view';

export type CartScreenNavigationProp = NativeStackNavigationProp<
	CartStackParamList,
	Routes.CART
>;

type CartScreenProps = {
	navigation: CartScreenNavigationProp;
};

const CartController = ({ navigation }: CartScreenProps) => {
	return <CartView navigation={navigation} />;
};

export default CartController;
