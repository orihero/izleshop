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
		<View></View>
	);
};

export default Header;

const styles = StyleSheet.create({
});
