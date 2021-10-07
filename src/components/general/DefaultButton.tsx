import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { colors } from 'constants/colors';


export interface IDefaultButtonProps {
	onPress?: () => {};
	text?: string;
	marginDisabled?: boolean;
}

const DefaultButton = ({
	onPress,
	text,
	marginDisabled,
}: IDefaultButtonProps) => {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<View
				style={[styles.container, marginDisabled ? null : styles.mh20]}
			>
				<Text style={styles.text}>{text}</Text>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default DefaultButton;

const styles = StyleSheet.create({
	container: {
		width: 335,
		marginLeft: 30,
		marginTop: 10,
		paddingVertical: 15,
		borderRadius: 30,
		alignItems: 'center',
		backgroundColor: colors.darkBlue,
	},
	text: {
		color: colors.white,
		fontSize: 18,
	},
	mh20: {
		marginHorizontal: 20,
	},
});
