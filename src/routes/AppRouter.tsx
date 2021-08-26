import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
	CartIcon,
	CategoriesIcon,
	HeartIcon,
	HomeIcon,
	ProfileIcon,
} from '../assets/icons/icons';
import { colors } from '../constants/colors';
import { HomeScreen } from '../screens/tabs';

const Stack = createNativeStackNavigator();

const Tab = createMaterialBottomTabNavigator();

let styles = StyleSheet.create({
	bar: {
		backgroundColor: colors.blue,
		height: 75,
		borderTopLeftRadius: 15,
		borderTopRightRadius: 15,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

const AppRouter = () => {
	const insets = useSafeAreaInsets();

	return (
		<View
			style={{
				paddingTop: insets.top,
				flex: 1,
				backgroundColor: colors.lightBlue,
			}}
		>
			<NavigationContainer>
				<Tab.Navigator barStyle={styles.bar}>
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
						component={() => null}
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
						component={() => null}
					/>
					<Tab.Screen
						options={{
							tabBarIcon: ({ color, focused }) => {
								return (
									<CartIcon active={focused} color={color} />
								);
							},
						}}
						name="Cart"
						component={() => null}
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
						component={() => null}
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
