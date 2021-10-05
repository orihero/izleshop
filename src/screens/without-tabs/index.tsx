import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MyProfileScreen from './my-profile';
import SettingsScreen from './settings';
import MyOrdersScreen from './my-orders';
import NewsScreen from './news';
import AboutUsScreen from './about-us';
import LanguageScreen from './language';
import AboutAppScreen from './about-app';
import AuthScreen from './auth';
import HelpSupportScreen from './help-support';
import OurPartnersController from './our-partners';
import SingAccountController from './sing-account';
import ViewAllController from './view-all';

import { Routes } from 'constants/routes';


export type WithoutStackParamList = {
	[Routes.MY_PROFILE]: undefined;
	[Routes.SETTINGS]: undefined;
	[Routes.MY_ORDERS]: undefined;
	[Routes.NEWS]: undefined;
	[Routes.ABOUT_US]: undefined;
	[Routes.LANGUAGE]: undefined;
	[Routes.ABOUT_APP]: undefined;
	[Routes.AUTHORIZATION]: undefined;
	[Routes.HELP_SUPPORT]: undefined;
	[Routes.OUR_PARTNERS]: undefined;
	[Routes.SING_ACCOUNT]: undefined;
	[Routes.VIEW_ALL]: undefined;
};

let Stack = createNativeStackNavigator<WithoutStackParamList>();

const WithoutTabsStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name={Routes.VIEW_ALL} component={ViewAllController} />
			<Stack.Screen name={Routes.HELP_SUPPORT} component={HelpSupportScreen} />
			<Stack.Screen name={Routes.OUR_PARTNERS} component={OurPartnersController} />
			<Stack.Screen name={Routes.SING_ACCOUNT} component={SingAccountController} />
			<Stack.Screen name={Routes.MY_PROFILE} component={MyProfileScreen}/>
			<Stack.Screen name={Routes.SETTINGS} component={SettingsScreen} />
			<Stack.Screen name={Routes.MY_ORDERS} component={MyOrdersScreen} />
			<Stack.Screen name={Routes.NEWS} component={NewsScreen} />
			<Stack.Screen name={Routes.ABOUT_US} component={AboutUsScreen} />
			<Stack.Screen name={Routes.LANGUAGE} component={LanguageScreen} />
			<Stack.Screen name={Routes.ABOUT_APP} component={AboutAppScreen} />
			<Stack.Screen name={Routes.AUTHORIZATION} component={AuthScreen} />
		</Stack.Navigator>
	);
};

export default WithoutTabsStack;
