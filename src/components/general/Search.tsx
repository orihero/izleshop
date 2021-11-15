import React from 'react';
import { StyleSheet, View, TextInput, Pressable } from 'react-native';
import { SearchIcon } from '../../assets/icons/icons';
import { colors } from 'constants/colors';
import { windowWidth } from '../../constants/sizes';

export interface SearchInputProps {}

const SearchInput = ({}: SearchInputProps) => {
	return (
		<View style={styles.container}>
			<Pressable
				hitSlop={5}
				android_ripple={{
					color: colors.lightPink,
					radius: 20,
					borderless: true,
				}}
			>
				<SearchIcon size={17} color={colors.gray} />
			</Pressable>
			<TextInput
				style={styles.text}
				placeholder={'Что вы ищете?'}
			></TextInput>
		</View>
	);
};

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
	},
});
