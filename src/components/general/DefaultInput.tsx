import { colors } from 'constants/colors';
import React, { useState } from 'react';
import {
	Dimensions,
	KeyboardTypeOptions,
	StyleSheet,
	TextInput,
	View,
} from 'react-native';

interface DefaultInputProps {
	value: string;
	onChange: (value: string) => void;
	isPassword?: boolean;
	isTextArea?: boolean;
	placeholder?: string;
	keyboardType?: KeyboardTypeOptions | undefined;
	maxLength?: number;
}

const DefaultInput = ({
	value,
	onChange = (value: string) => {},
	isPassword,
	isTextArea,
	placeholder = `(99) 456-95-50`,
	keyboardType,
	maxLength,
}: DefaultInputProps) => {
	const [showPassword, setShowPassword] = useState(false);

	const onPress = () => {
		setShowPassword(!showPassword);
	};
	const onTextChange = (e) => {
		onChange(e);
	};
	return (
		<View>
			<TextInput
				value={value}
				multiline={isTextArea}
				onChangeText={onTextChange}
				numberOfLines={isTextArea ? 3 : 1}
				placeholder={placeholder}
				placeholderTextColor="gray"
				secureTextEntry={isPassword}
				style={isTextArea ? styles.textarea : styles.input}
				keyboardType={keyboardType}
				maxLength={maxLength}
			/>
		</View>
	);
};

export default DefaultInput;

const styles = StyleSheet.create({
	input: {
		width: Dimensions.get('window').width - 35,
		height: 55,
		borderRadius: 10,
		paddingLeft: 10,
		color: colors.black,
		backgroundColor: colors.white,
		alignSelf: 'center',
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
		fontSize: 14,
		paddingBottom: 18,
		borderRadius: 10,
		color: colors.black,
		backgroundColor: colors.white,
		width: Dimensions.get('window').width - 35,
	},
	text1: {},
});
