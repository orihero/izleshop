import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {
	CartIcon,
	CategoriesIcon,
	HeartIcon,
	HomeIcon,
	ProfileIcon,
} from 'assets/icons/icons';
import Text from 'components/general/Text';
import { colors } from 'constants/colors';
import { Routes } from 'constants/routes';
import { strings } from 'locales/locales';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FavoritesScreen, ProfileScreen } from 'screens/tabs';
import { selectUser } from 'store/slices/userSlice';
import { useAppSelector } from 'utils/hooks';
import { store } from 'store/configureStore';
import CartStack from './CartStack';
import CategoriesStack from './CategoriesStack';
import HomeStack from './HomeStack';

const Tab = createMaterialBottomTabNavigator();

let styles = StyleSheet.create({
	bar: {
		backgroundColor: colors.white,
		height: 70,
		overflow: 'visible',
	},
	container: {
		flex: 1,
		backgroundColor: colors.lightBlue,
	},
	label: {
		textAlign: 'center',
		fontSize: 10,
		color: colors.barGray,
		lineHeight: 13,
		top: 8,
	},
});

let renderIcon = (Icon: typeof HomeIcon) => {
	return ({ color }: { focused: boolean; color: string }) => {
		return <Icon active={false} color={color} size={29} />;
	};
};

const Tabs = () => {
	let labelMapper = {
		[Routes.HOME_STACK]: strings.home,
		[Routes.CATEGORIES_STACK]: strings.category,
		[Routes.FAVORITES]: strings.favorites,
		[Routes.CART_STACK]: strings.cart,
		[Routes.PROFILE_STACK]: strings.profile,
	};
	const insets = useSafeAreaInsets();
	const user = useAppSelector(selectUser);
	return (
		<View style={{ ...styles.container, paddingTop: insets.top }}>
			<Tab.Navigator
				key={user?.languageIndex}
				barStyle={styles.bar}
				renderTouchable={(props) => <TouchableOpacity {...props} />}
				shifting={false}
				sceneAnimationEnabled={false}
				activeColor={colors.blue}
				inactiveColor={colors.barGray}
				//@ts-ignore
				renderLabel={(props) => {
					return (
						<Text
							style={[
								styles.label,
								props.focused && { color: colors.blue },
							]}
						>
							{/*@ts-ignore */}
							{labelMapper[props.route.name]}
						</Text>
					);
				}}
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
						tabBarBadge:
							Object.keys(store.getState().cart).length > 0
								? Object.keys(store.getState().cart).length
								: undefined,
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
		</View>
	);
};

export default Tabs;
