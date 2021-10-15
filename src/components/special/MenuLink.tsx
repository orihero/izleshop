import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ChevronRightIcon, IconProps } from 'assets/icons/icons';
import { colors } from 'constants/colors';
import { windowWidth } from 'constants/sizes';

export interface MenuLinkProps {
	text?: string;
	onPress?: () => {};
	Icon?: (props:IconProps)=>JSX.Element
}

const MenuLink = ({ onPress, text, Icon }: MenuLinkProps) => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}> {text}</Text>
			{Icon===undefined? <ChevronRightIcon />: <Icon />}
		</View>
	);
};

export default MenuLink;

const styles = StyleSheet.create({
	container: {
		height: 50,
		marginHorizontal: 20,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 10,
		borderBottomWidth: 1,
		borderColor: colors.lightGray,
		// width: windowWidth - 40,
		backgroundColor: colors.white,
	},
	text: {
		color: colors.black,
		fontSize: 14,
	},
});
