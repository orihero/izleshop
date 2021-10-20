import { StyleSheet } from 'react-native';
import { colors } from 'constants/colors';
import { windowWidth } from 'constants/sizes';

export const styles = StyleSheet.create({
    container: {
		flex: 1,
		backgroundColor: colors.lightBlue
	},
	header: {
		padding: 20,
		borderTopWidth: 2,
		width: windowWidth,
		borderColor: colors.leghtGrey,
		backgroundColor: colors.white
	},
})