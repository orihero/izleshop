import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
	ProfileScreen,
	AboutUsScreen,
	LanguageScreen,
	MyOrdersScreen,
} from 'screens/tabs';
import { Routes } from 'constants/routes';

export type ProfileStackParamList = {
	[Routes.PROFILE]: undefined;
	[Routes.ABOUT_US]: undefined;
	[Routes.LANGUAGE]: undefined;
	[Routes.MY_ORDERS]: undefined;
};

let Stack = createNativeStackNavigator();

const ProfileStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name={Routes.PROFILE} component={ProfileScreen} />
			<Stack.Screen name={Routes.ABOUT_US} component={AboutUsScreen} />
			<Stack.Screen name={Routes.LANGUAGE} component={LanguageScreen} />
			<Stack.Screen name={Routes.MY_ORDERS} component={MyOrdersScreen} />
		</Stack.Navigator>
	);
};

export default ProfileStack;
