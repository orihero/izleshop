import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { colors } from 'constants/colors';

interface DefaultInputProps {
	value: string;
	onChange: (value: string) => void;
}

const DefaultInput = ({ value, onChange }: DefaultInputProps) => {
	return (
		<TextInput
			style={styles.input}
			value={value}
			onChangeText={(e) => onChange(e)}
		/>
	);
};

export default DefaultInput;

const styles = StyleSheet.create({
	input: {
		padding: 14,
		borderRadius: 10,
		backgroundColor: colors.white,
	},
});
