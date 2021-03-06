import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { IntroScreen } from '../screens/intro';
import Tabs from './tabs';
import WithoutTabs from '../screens/without-tabs';

import { Routes } from 'constants/routes';
import TestScreen from 'screens/TestScreen';
import { useAppSelector } from 'utils/hooks';
import { selectUser } from 'store/slices/userSlice';
import { store } from '../store/configureStore';

export type RootStackParamList = {
	[Routes.TABS]: undefined;
	[Routes.WITHOUT_TABS]: undefined;
	[Routes.INTRO_SCREEN]: undefined;
	test: undefined;
};

let RootStack = createNativeStackNavigator<RootStackParamList>();

const AppRouter = () => {
	let user = useAppSelector(selectUser);
	return (
		<NavigationContainer key={user.languageIndex}>
			<RootStack.Navigator screenOptions={{ headerShown: false }}>
				{!user.token && (
					<RootStack.Screen
						name={Routes.INTRO_SCREEN}
						component={IntroScreen}
					/>
				)}
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
