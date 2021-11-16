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
		alignItems: 'center',
		// marginRight: 30,
	},
});
