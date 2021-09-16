import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Pressable from 'components/general/Pressable';
import { colors } from 'constants/colors';

interface ISecondButton {
	text: string;
	onPress: () => void;
	ph?: number;
	bg?: string;
	cl?: string;
	bl?: string;
}

const SecondButton = ({ text, onPress, ph = 20, bg, cl, bl }: ISecondButton) => {
	return (
		<Pressable onPress={onPress}>
			<View
				style={[
					{ ...styles.container, paddingHorizontal: ph },
					bg ? { backgroundColor: bg } : null,
					bl ? { borderColor: bl } : null,
				]}
			>
				<Text style={[styles.text, cl ? { color: cl } : null]}>
					{text}
				</Text>
			</View>
		</Pressable>
	);
};

export default SecondButton;

const styles = StyleSheet.create({
	container: {
		borderWidth: 1,
		borderRadius: 15,
		paddingVertical: 7,
	},
	text: {
		fontSize: 14,
		lineHeight: 17,
		fontWeight: '400',
	},
});
