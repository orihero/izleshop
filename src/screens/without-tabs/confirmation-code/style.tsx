import { StyleSheet } from 'react-native';
import { colors } from 'constants/colors';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: colors.lightBlue,
	},
	textBox: {
		right: 90,
		marginHorizontal: 20,
	},
	phoneInput: {
		marginTop: 12,
	},
	text: {
		paddingHorizontal: 10,
		marginLeft: 5,
		fontSize: 14,
		fontWeight: 'bold',
	},
	codeInput: {
		alignItems: 'center',
		marginHorizontal: 20,
	},
	center: {
		marginHorizontal: 12,
	},
});
