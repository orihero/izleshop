import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { colors } from 'constants/colors';
import { Routes } from 'constants/routes';
import { BackIcon, CartIcon, SearchIcon } from '../../assets/icons/icons';

export interface HeaderProps {
	title?: string;
	hasBorder?: boolean;
	hasCartIcon?: boolean;
	hideRightIcon?: boolean;
	disableGoBack?: boolean;
}

const Header = ({
	title,
	hasBorder,
	hasCartIcon,
	hideRightIcon,
	disableGoBack,
}: HeaderProps) => {
	const navigation = useNavigation();

	const onBackPressed = () => {
		if (navigation.canGoBack()) {
			navigation.goBack();
		}
	};
	let onCartPress = () => {
		navigation.navigate(Routes.CART);
	};
	return (
		<View style={[styles.container, hasBorder ? styles.bbw : null]}>
			<View>
				{disableGoBack ? null : (
					<TouchableOpacity onPress={onBackPressed}>
						<BackIcon size={20} />
					</TouchableOpacity>
				)}
			</View>
			<Text style={styles.title}>{title}</Text>
			<View>
				{hideRightIcon ? null : hasCartIcon ? (
					<TouchableOpacity onPress={onCartPress}>
						<View>
							<View style={styles.badge}>
								<Text style={styles.badgeText}>2</Text>
							</View>
							<CartIcon size={20} />
						</View>
					</TouchableOpacity>
				) : (
					<SearchIcon size={20} />
				)}
			</View>
		</View>
	);
};

export default Header;

const styles = StyleSheet.create({
	container: {
		height: 60,
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: colors.white,
		width: '100%',
		paddingHorizontal: 20,
		alignItems: 'center',
	},
	bbw: {
		borderTopWidth: 1,
		borderBottomWidth: 1,
		borderColor: colors.gray4,
	},
	title: {
		fontSize: 18,
		color: colors.black,
	},
	badge: {
		width: 15,
		height: 15,
		position: 'absolute',
		right: -8,
		top: -8,
		zIndex: 1,
		padding: 3,
		borderRadius: 10,
		backgroundColor: colors.red,
	},
	badgeText: {
		fontSize: 8,
		textAlign: 'center',
		textAlignVertical: 'center',
		lineHeight: 10,
		fontWeight: '700',
		color: colors.white,
	},
});
