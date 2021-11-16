import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { colors } from 'constants/colors';
import { ActivityIndicator } from 'react-native-paper';

export interface IDefaultButtonProps {
	onPress?: () => void;
	text?: string;
	marginDisabled?: boolean;
	loading?: boolean;
}

const DefaultButton = ({
	onPress,
	text,
	marginDisabled,
	loading,
}: IDefaultButtonProps) => {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<View
				style={[styles.container, marginDisabled ? null : styles.mh20]}
			>
				{loading ? (
					<ActivityIndicator color={colors.white} />
				) : (
					<Text style={styles.text}>{text}</Text>
				)}
			</View>
		</TouchableWithoutFeedback>
	);
};

export default DefaultButton;

const styles = StyleSheet.create({
	container: {
		marginTop: 10,
		paddingVertical: 10,
		borderRadius: 9,
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
