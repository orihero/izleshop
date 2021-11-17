import React, { useState } from 'react';

import { StyleSheet, TextInput, View, Text } from 'react-native';
import Pressable from './Pressable';

import { colors } from 'constants/colors';
import { strings } from 'locales/locales';
import RegisterView from 'src/screens/without-tabs/register/view';
import { IconProps, PhoneIcon } from 'assets/icons/icons';

interface PhoneInputProps {
	value: string;
	onChange: (value: string) => void;
	isPassword?: boolean;
	isTextArea?: boolean;
	placeholder?: string;
	keyboardType?: string;
	Icon?: (props: IconProps) => JSX.Element;
}

const PhoneInput = ({
	value,
	onChange,
	isPassword,
	isTextArea,
	placeholder = `Номер телефона 
	+998 (99) 456-95-50`,
	keyboardType,
	Icon,
}: PhoneInputProps) => {
	const [showPassword, setShowPassword] = useState(false);

	const onPress = () => {
		setShowPassword(!showPassword);
	};

	return (
		<View style={isTextArea ? styles.textarea : styles.input}>
			{Icon === undefined ? null : <Icon />}
			<TextInput
				style={styles.textInput}
				value={value}
				multiline={isTextArea}
				onChangeText={(e) => onChange(e)}
				numberOfLines={isTextArea ? 3 : 1}
				placeholder={placeholder}
				placeholderTextColor="gray"
				secureTextEntry={isPassword}
				keyboardType={keyboardType}
			></TextInput>
		</View>
	);
};

export default PhoneInput;

const styles = StyleSheet.create({
	input: {
		width: 345,
		height: 55,
		marginLeft: 3,
		marginTop: 12,
		paddingLeft: 10,
		borderRadius: 5,
		borderWidth: 1,
		flexDirection: 'row',
		alignItems: 'center',
		color: colors.black,
		borderColor: colors.blueLight,
		backgroundColor: colors.white,
	},
	textInput: {
		color: colors.black,
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
		color: colors.black,
		backgroundColor: colors.white,
	},
	text1: {},
});
