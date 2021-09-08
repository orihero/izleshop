import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Routes } from 'constants/routes';
import {
	CartScreen,
	CheckoutScreen,
	PreCheckoutScreen,
	TmpScreen,
} from 'screens/tabs';

let Stack = createNativeStackNavigator();

const CartStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name={Routes.TMP_SCREEN} component={TmpScreen} />
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
