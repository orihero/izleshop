import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
	CategoriesScreen,
	Products,
	FilterScreen,
	SearchScreen,
} from 'screens/tabs';
import { Routes } from 'constants/routes';

export type CategoriesStackParamList = {
	[Routes.CATEGORIES]: undefined;
	[Routes.PRODUCTS]: { from?: string; title?: string };
	[Routes.FILTER]: { from?: string; title?: string };
	[Routes.SEARCH]: { from?: string };
};

let Stack = createNativeStackNavigator<CategoriesStackParamList>();

const CategoriesStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen
				name={Routes.CATEGORIES}
				component={CategoriesScreen}
			/>
			<Stack.Screen name={Routes.PRODUCTS} component={Products} />
			<Stack.Screen name={Routes.FILTER} component={FilterScreen} />
			<Stack.Screen name={Routes.SEARCH} component={SearchScreen} />
		</Stack.Navigator>
	);
};

export default CategoriesStack;
