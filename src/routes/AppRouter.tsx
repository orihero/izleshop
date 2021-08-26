import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import React from "react";
import {
	CartIcon,
	CategoriesIcon,
	HeartIcon,
	HomeIcon,
	ProfileIcon,
} from "../assets/icons/icons";
import { colors } from "../constants/colors";

const Stack = createNativeStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const AppRouter = () => {
	return (
		<NavigationContainer>
			<Tab.Navigator
				barStyle={{
					backgroundColor: colors.blue,
					height: 75,
					borderTopLeftRadius: 15,
					borderTopRightRadius: 15,
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Tab.Screen
					options={{
						tabBarIcon: ({ color, focused }) => {
							return <HomeIcon active={focused} color={color} />;
						},
					}}
					name="Home"
					component={() => null}
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
							return <HeartIcon active={focused} color={color} />;
						},
					}}
					name="Favorites"
					component={() => null}
				/>
				<Tab.Screen
					options={{
						tabBarIcon: ({ color, focused }) => {
							return <CartIcon active={focused} color={color} />;
						},
					}}
					name="Cart"
					component={() => null}
				/>
				<Tab.Screen
					options={{
						tabBarIcon: ({ color, focused }) => {
							return (
								<ProfileIcon active={focused} color={color} />
							);
						},
					}}
					name="Profile"
					component={() => null}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
};

export default AppRouter;
