import React, { useState } from 'react';

import { StyleSheet, TextInput, View, Text } from 'react-native';
import Pressable from './Pressable';

import { colors } from 'constants/colors';
import { strings } from 'locales/locales';

interface DefaultInputProps {
	value: string;
	onChange: (value: string) => void;
	isPassword?: boolean;
	isTextArea?: boolean;
}

const DefaultInput = ({
	value,
	onChange,
	isPassword,
	isTextArea,
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
				placeholder="Номер телефона 
+998 (99) 456-95-50"
				placeholderTextColor= "gray"
				secureTextEntry={isPassword}
				style={isTextArea ? styles.textarea : styles.input}
			/>
		</View>
	);
};

export default DefaultInput;

const styles = StyleSheet.create({
	input: {
		height: 55,
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
	text1: {}
});
