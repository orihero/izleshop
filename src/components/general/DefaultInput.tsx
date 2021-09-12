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
				secureTextEntry={isPassword && !showPassword}
				style={isTextArea ? styles.textarea : styles.input}
			/>
			{isPassword ? (
				<Pressable onPress={onPress}>
					<View style={styles.absolute}>
						<Text style={styles.text}>
							{showPassword ? strings.hide : strings.show}
						</Text>
					</View>
				</Pressable>
			) : null}
		</View>
	);
};

export default DefaultInput;

const styles = StyleSheet.create({
	input: {
		padding: 14,
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
		fontSize: 12,
		lineHeight: 20,
		fontWeight: '400',
		color: colors.brown,
	},
	textarea: {
		padding: 14,
		paddingTop: 12,
		height: 78,
		borderRadius: 10,
		backgroundColor: colors.white,
	},
});
