import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Auth from 'screens/auth';
import Tabs from './tabs';

import { Routes } from 'constants/routes';

export type RootStackParamList = {
	[Routes.AUTH]: { cangoBack: boolean };
	[Routes.TABS]: undefined;
};

let RootStack = createNativeStackNavigator<RootStackParamList>();

const AppRouter = () => {
	const tmp = false;

	return (
		<NavigationContainer>
			<RootStack.Navigator screenOptions={{ headerShown: false }}>
				{tmp ? (
					<RootStack.Screen
						initialParams={{ cangoBack: false }}
						name={Routes.AUTH}
						component={Auth}
					/>
				) : null}
				<RootStack.Screen name={Routes.TABS} component={Tabs} />
				{!tmp ? (
					<RootStack.Screen name={Routes.AUTH} component={Auth} />
				) : null}
			</RootStack.Navigator>
		</NavigationContainer>
	);
};

export default AppRouter;
