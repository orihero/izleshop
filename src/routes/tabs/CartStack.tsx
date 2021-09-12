import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CartScreen, CheckoutScreen, PreCheckoutScreen } from 'screens/tabs';
import { Routes } from 'constants/routes';

export type CartStackParamList = {
	[Routes.CART]: undefined;
	[Routes.PRE_CHECKOUT]: undefined;
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
