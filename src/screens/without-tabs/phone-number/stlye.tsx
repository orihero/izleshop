import { StyleSheet } from 'react-native';
import { colors } from 'constants/colors';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 20,
		backgroundColor: colors.lightBlue,
	},
	textBox: {
		right: 115,
		marginHorizontal: 20,
	},
	phoneInput: {
		alignItems: 'center',
		marginHorizontal: 20,
	},
	text: {
		marginLeft: 5,
		fontSize: 14,
		fontWeight: 'bold',
	},
	codeInput: {
		marginTop: 12,
	},
	center: {
		left: 0,
		right: 0,
		marginHorizontal: 34,
		// marginRight: 30,
		// alignItems: 'center',
	},
});
