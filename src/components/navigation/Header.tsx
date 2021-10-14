import React, { ReactChild } from 'react';
import { useNavigation } from '@react-navigation/core';

import { StyleSheet, Text, View } from 'react-native';
import Pressable from '../general/Pressable';

import { colors } from 'constants/colors';
import { BackIcon } from '../../assets/icons/icons';

export interface HeaderProps {
	title?: string;
	bold?: boolean;
	hasBorder?: boolean;
	hasCartIcon?: boolean;
	hideRightIcon?: boolean;
	disableGoBack?: boolean;
	rightEdge?: () => ReactChild;
}

const Header = ({
	title,
	hasBorder,
	disableGoBack,
	bold = false,
	rightEdge = () => <View />,
}: HeaderProps) => {
	const navigation = useNavigation();

	const onBackPressed = () => {
		if (navigation.canGoBack()) {
			navigation.goBack();
		}
	};
	return (
		<View style={[styles.container, hasBorder ? styles.bbw : null]}>
			<View style={styles.leftEdge}>
				{disableGoBack ? null : (
					<Pressable to onPress={onBackPressed}>
						<BackIcon size={20} />
					</Pressable>
				)}
			</View>
			<View>
				<Text style={[styles.title, styles.bold]}>{title}</Text>
			</View>
			<View style={styles.rightEdge}>{rightEdge()}</View>
		</View>
	);
};

export default Header;

const styles = StyleSheet.create({
	container: {
		height: 60,
		flexDirection: 'row',
		justifyContent: 'center',
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
	leftEdge: {
		left: 20,
		position: 'absolute',
	},
	rightEdge: {
		right: 20,
		position: 'absolute',
	},
	title: {
		fontSize: 18,
		lineHeight: 18,
		fontWeight: '400',
		color: colors.black,
	},
	bold: {
		fontWeight: '700',
	},
});
