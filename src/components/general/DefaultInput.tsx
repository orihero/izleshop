import { colors } from 'constants/colors';
import React, { useState } from 'react';
import { KeyboardTypeOptions, StyleSheet, TextInput, View } from 'react-native';

interface DefaultInputProps {
	value: string;
	onChange: (value: string) => void;
	isPassword?: boolean;
	isTextArea?: boolean;
	placeholder?: string;
	keyboardType?: KeyboardTypeOptions | undefined;
}

const DefaultInput = ({
	value,
	onChange,
	isPassword,
	isTextArea,
	placeholder = `Номер телефона 
	+998 (99) 456-95-50`,
	keyboardType,
}: DefaultInputProps) => {
	const [showPassword, setShowPassword] = useState(false);

	const onPress = () => {
		setShowPassword(!showPassword);
	};

	return (
		<View>
			<TextInput
				value={value}
				multiline={isTextArea}
				onChangeText={(e) => onChange(e)}
				numberOfLines={isTextArea ? 3 : 1}
				placeholder={placeholder}
				placeholderTextColor="gray"
				secureTextEntry={isPassword}
				style={isTextArea ? styles.textarea : styles.input}
				keyboardType={keyboardType}
			/>
		</View>
	);
};

export default DefaultInput;

const styles = StyleSheet.create({
	input: {
		width: 335,
		height: 55,
		marginLeft: 30,
		paddingLeft: 10,
		paddingTop: -10,
		borderRadius: 10,
		backgroundColor: colors.white,
	},
	absolute: {
		top: 0,
		right: 14,
		bottom: 0,
		position: 'absolute',
		justifyContent: 'center',
	},
	text: {
		fontSize: 14,
		lineHeight: 20,
		fontWeight: '400',
		color: colors.brown,
	},
	textarea: {
		height: 78,
		borderRadius: 10,
		fontSize: 14,
		backgroundColor: colors.white,
	},
	text1: {},
});
