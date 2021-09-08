import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {
	CartIcon,
	CategoriesIcon,
	HeartIcon,
	HomeIcon,
	ProfileIcon,
} from 'assets/icons/icons';
import { colors } from 'constants/colors';
import { Routes } from 'constants/routes';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
	CategoriesScreen,
	FavoritesScreen,
	HomeScreen,
	ProfileScreen,
} from 'screens/tabs';
import { store } from 'store/configureStore';
import CartStack from './CartStack';

const Tab = createMaterialBottomTabNavigator();

let styles = StyleSheet.create({
	bar: {
		backgroundColor: colors.blue,
		height: 75,
		borderTopLeftRadius: 15,
		borderTopRightRadius: 15,
		alignItems: 'center',
		justifyContent: 'center',
		overflow: 'hidden',
		paddingTop: 20,
	},
	container: {
		flex: 1,
		backgroundColor: colors.lightBlue,
	},
});

const AppRouter = () => {
	const insets = useSafeAreaInsets();

	return (
		<View style={{ ...styles.container, paddingTop: insets.top }}>
			<NavigationContainer>
				<Tab.Navigator
					initialRouteName={'cart'}
					barStyle={styles.bar}
					key={Object.keys(store.getState().cart).length}
				>
					<Tab.Screen
						options={{
							tabBarIcon: ({ color, focused }) => {
								return (
									<HomeIcon active={focused} color={color} />
								);
							},
						}}
						name="Home"
						component={HomeScreen}
					/>
					<Tab.Screen
						options={{
							tabBarIcon: ({ color, focused }) => {
								return (
									<CategoriesIcon
										active={focused}
										color={color}
									/>
								);
							},
						}}
						name="Categories"
						component={CategoriesScreen}
					/>
					<Tab.Screen
						options={{
							tabBarIcon: ({ color, focused }) => {
								return (
									<HeartIcon active={focused} color={color} />
								);
							},
						}}
						name="Favorites"
						component={FavoritesScreen}
					/>
					<Tab.Screen
						options={{
							tabBarIcon: ({ color, focused }) => {
								return (
									<CartIcon active={focused} color={color} />
								);
							},
							tabBarBadge: Object.keys(store.getState().cart)
								.length,
						}}
						name={Routes.CART}
						component={CartStack}
					/>
					<Tab.Screen
						options={{
							tabBarIcon: ({ color, focused }) => {
								return (
									<ProfileIcon
										active={focused}
										color={color}
									/>
								);
							},
						}}
						name="Profile"
						component={ProfileScreen}
					/>
				</Tab.Navigator>
			</NavigationContainer>
			<View
				style={{
					height: insets.bottom,
					backgroundColor: colors.blue,
				}}
			/>
		</View>
	);
};

export default AppRouter;
