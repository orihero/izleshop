import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SearchIcon } from '../../assets/icons/icons';
import { colors } from 'constants/colors';
import { windowWidth } from '../../constants/sizes';
import { strings } from '../../locales/locales';
import Text from './Text';

export interface SearchInputProps {}

const SearchInput = ({}: SearchInputProps) => {
	return (
		<View style={styles.container}>
			<SearchIcon size={17} color={colors.gray} />
			<Text style={styles.text}>{strings.search}</Text>
		</View>
	);
};

export default SearchInput;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.white,
		borderRadius: 15,
		width: windowWidth - 40,
		padding: 15,
		flexDirection: 'row',
		marginHorizontal: 20,
	},
	text: {
		color: colors.gray,
		fontSize: 14,
		paddingLeft: 15,
	},
});
