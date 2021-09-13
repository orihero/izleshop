import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {
	CartIcon,
	CategoriesIcon,
	HeartIcon,
	HomeIcon,
	ProfileIcon,
} from 'assets/icons/icons';
import { colors } from 'constants/colors';
import { Routes } from 'constants/routes';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { CategoriesScreen, FavoritesScreen, ProfileScreen } from 'screens/tabs';
import { store } from 'store/configureStore';
import CartStack from './CartStack';
import HomeStack from './HomeStack';

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

const Tabs = () => {
	const insets = useSafeAreaInsets();

	return (
		<View style={{ ...styles.container, paddingTop: insets.top }}>
			<Tab.Navigator
				initialRouteName={Routes.PROFILE_STACK}
				labeled={false}
				barStyle={styles.bar}
				key={Object.keys(store.getState().cart).length}
			>
				<Tab.Screen
					options={{
						tabBarIcon: ({ color, focused }) => {
							return (
								<HomeIcon
									size={28}
									active={focused}
									color={color}
								/>
							);
						},
					}}
					name={Routes.HOME_STACK}
					component={HomeStack}
				/>
				<Tab.Screen
					options={{
						tabBarIcon: ({ color, focused }) => {
							return (
								<CategoriesIcon
									size={28}
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
								<HeartIcon
									size={28}
									active={focused}
									color={color}
								/>
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
								<CartIcon
									size={28}
									active={focused}
									color={color}
								/>
							);
						},
						tabBarBadge: Object.keys(store.getState().cart).length,
					}}
					name={Routes.CART_STACK}
					component={CartStack}
				/>
				<Tab.Screen
					options={{
						tabBarIcon: ({ color, focused }) => {
							return (
								<ProfileIcon
									size={28}
									active={focused}
									color={color}
								/>
							);
						},
					}}
					name={Routes.PROFILE_STACK}
					component={ProfileScreen}
				/>
			</Tab.Navigator>
			<View
				style={{
					height: insets.bottom,
					backgroundColor: colors.blue,
				}}
			/>
		</View>
	);
};

export default Tabs;
