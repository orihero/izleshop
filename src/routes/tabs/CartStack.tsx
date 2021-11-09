import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CartScreen, CheckoutScreen, PreCheckoutScreen } from 'screens/tabs';
import { Routes } from 'constants/routes';
import { IPreCheckoutProductsModel } from 'screens/tabs/cart/modules/pre-checkout/view';

export type CartStackParamList = {
	[Routes.CART]: undefined;
	[Routes.PRE_CHECKOUT]: {
		total: number;
		cartList: { count: number; data: IPreCheckoutProductsModel }[];
		count: number;
	};
	[Routes.CHECKOUT]: undefined;
};

let Stack = createNativeStackNavigator<CartStackParamList>();

const CartStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name={Routes.CART} component={CartScreen} />
			<Stack.Screen
				name={Routes.PRE_CHECKOUT}
				component={PreCheckoutScreen}
			/>
			<Stack.Screen name={Routes.CHECKOUT} component={CheckoutScreen} />
		</Stack.Navigator>
	);
};

export default CartStack;
