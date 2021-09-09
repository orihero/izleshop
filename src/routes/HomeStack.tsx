import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Routes } from 'constants/routes';
import { HomeScreen, ProductDetailsScreen } from 'screens/tabs';

let Stack = createNativeStackNavigator();

const HomeStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			{/* <Stack.Screen
				name={Routes.PRODUCT_DETAILS}
				component={ProductDetailsScreen}
			/> */}
			<Stack.Screen name={Routes.HOME} component={HomeScreen} />
		</Stack.Navigator>
	);
};

export default HomeStack;
