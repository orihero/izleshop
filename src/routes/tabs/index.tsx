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
import React from 'react';
import { Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FavoritesScreen, ProfileScreen } from 'screens/tabs';
import { strings } from 'locales/locales';
import { store } from 'store/configureStore';
import CartStack from './CartStack';
import CategoriesStack from './CategoriesStack';
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
		paddingTop: Platform.OS === 'ios' ? 20 : 0,
	},
	container: {
		flex: 1,
		backgroundColor: colors.lightBlue,
	},
});

// let renderIcon= Icon=>{
// 	return (props:string | ((props: {
// 		focused: boolean;
// 		color: string;
// 	}) => {

// 	}
// };

let renderIcon = (Icon: typeof HomeIcon) => {
	return ({ color, focused }: { focused: boolean; color: string }) => {
		return <Icon active={focused} color={color} size={28} />;
	};
};

const Tabs = () => {
	const insets = useSafeAreaInsets();

	return (
		<View style={{ ...styles.container, paddingTop: insets.top }}>
			<Tab.Navigator
				barStyle={styles.bar}
				key={Object.keys(store.getState().cart).length}
				renderTouchable={(props) => <TouchableOpacity {...props} />}
				shifting={false}
				sceneAnimationEnabled={false}
			>
				<Tab.Screen
					options={{
						tabBarIcon: renderIcon(HomeIcon),
						tabBarLabel: strings.home,
					}}
					name={Routes.HOME_STACK}
					component={HomeStack}
				/>
				<Tab.Screen
					options={{
						tabBarIcon: renderIcon(CategoriesIcon),
						tabBarLabel: strings.category,
					}}
					name={Routes.CATEGORIES_STACK}
					component={CategoriesStack}
				/>
				<Tab.Screen
					options={{
						tabBarIcon: renderIcon(HeartIcon),
						tabBarLabel: strings.favorites,
					}}
					name={Routes.FAVORITES}
					component={FavoritesScreen}
				/>
				<Tab.Screen
					options={{
						tabBarIcon: renderIcon(CartIcon),
						tabBarBadge: Object.keys(store.getState().cart).length,
						tabBarLabel: strings.cart,
					}}
					name={Routes.CART_STACK}
					component={CartStack}
				/>
				<Tab.Screen
					options={{
						tabBarIcon: renderIcon(ProfileIcon),
						tabBarLabel: strings.profile,
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
