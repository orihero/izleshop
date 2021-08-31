import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BackIcon, HeartIcon, SearchIcon } from '../../assets/icons/icons';
import { colors } from 'constants/colors';

export interface HeaderProps {
	title?: string;
}

const Header = ({ title }: HeaderProps) => {
	return (
		<View style={styles.container}>
			<BackIcon size={20} />
			<Text style={styles.title}>{title}</Text>
			<SearchIcon size={20} />
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
	title: {
		fontSize: 18,
		color: colors.black,
	},
});
