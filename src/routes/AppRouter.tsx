import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { IntroScreen } from '../screens/intro';
import Tabs from './tabs';
import WithoutTabs from '../screens/without-tabs';

import { Routes } from 'constants/routes';
import TestScreen from 'screens/TestScreen';

export type RootStackParamList = {
	[Routes.TABS]: undefined;
	[Routes.WITHOUT_TABS]: undefined;
	[Routes.INTRO_SCREEN]: undefined;
	test: undefined
};

let RootStack = createNativeStackNavigator<RootStackParamList>();

const AppRouter = () => {
	return (
		<NavigationContainer>
			<RootStack.Navigator screenOptions={{ headerShown: false }}>
				{/* <RootStack.Screen  name={'test'} component={TestScreen} /> */}
				<RootStack.Screen
					name={Routes.INTRO_SCREEN}
					component={IntroScreen}
				/>
				<RootStack.Screen name={Routes.TABS} component={Tabs} />
				<RootStack.Screen
					name={Routes.WITHOUT_TABS}
					component={WithoutTabs}
				/>
			</RootStack.Navigator>
		</NavigationContainer>
	);
};

export default AppRouter;
