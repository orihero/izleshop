import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CategoriesScreen, Products, FilterScreen } from 'screens/tabs';
import { Routes } from 'constants/routes';

export type CategoriesStackParamList = {
	[Routes.CATEGORIES]: undefined;
	[Routes.PRODUCTS]: undefined;
	[Routes.FILTER]: undefined;
};

let Stack = createNativeStackNavigator<CategoriesStackParamList>();

const CategoriesStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			{/* <Stack.Screen
				name={Routes.CATEGORIES}
				component={CategoriesScreen}
			/> */}
			<Stack.Screen name={Routes.PRODUCTS} component={Products} />
			<Stack.Screen name={Routes.FILTER} component={FilterScreen} />
		</Stack.Navigator>
	);
};

export default CategoriesStack;
