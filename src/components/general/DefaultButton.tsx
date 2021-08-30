import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { colors } from '../../constants/colors';

export interface DefaultButtonProps {
	onPress?: () => {};
	text?: string;
}

const DefaultButton = ({ onPress, text }: DefaultButtonProps) => {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<View style={styles.container}>
				<Text style={styles.text}>{text}</Text>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default DefaultButton;

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 20,
		backgroundColor: colors.darkBlue,
		paddingVertical: 15,
		borderRadius: 9,
		alignItems: 'center',
	},
	text: {
		color: colors.white,
		fontSize: 18,
	},
});
