import React from 'react';
import { StyleSheet, View, TextInput, Pressable, Platform } from 'react-native';
import { SearchIcon } from '../../assets/icons/icons';
import { colors } from 'constants/colors';
import { windowWidth } from '../../constants/sizes';
import { useNavigation } from '@react-navigation/core';
import { Routes } from 'constants/routes';

export interface SearchInputProps {
	setText: () => {};
}

const SearchInput = React.forwardRef(
	({ setText = () => {}, containerStyle }: SearchInputProps, ref = null) => {
		const navigation = useNavigation();
		let onNextPress = () => {
			// @ts-ignore
			navigation.navigate(Routes.SEARCH);
		};
		return (
			<View style={[styles.container, containerStyle]}>
				<Pressable
					hitSlop={5}
					android_ripple={{
						color: colors.lightPink,
						radius: 20,
						borderless: true,
					}}
					onPress={onNextPress}
				>
					<SearchIcon size={17} color={colors.gray} />
				</Pressable>
				<TextInput
					ref={ref}
					style={styles.text}
					placeholder={'Что вы ищете?'}
					placeholderTextColor={colors.black}
					onFocus={onNextPress}
					onChangeText={setText}
				></TextInput>
			</View>
		);
	}
);

export default SearchInput;

const styles = StyleSheet.create({
	container: {
		borderRadius: 15,
		alignItems: 'center',
		paddingLeft: 20,
		marginHorizontal: 20,
		flexDirection: 'row',
		width: windowWidth - 40,
		backgroundColor: colors.white,
	},
	text: {
		color: colors.gray,
		fontSize: 14,
		paddingLeft: 15,
		paddingRight: 30,
		width: '100%',
		...Platform.select({ ios: { padding: 15 } }),
	},
});
