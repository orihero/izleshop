import { StyleSheet } from 'react-native';
import { colors } from 'constants/colors';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: colors.lightBlue,
	},
	phoneInput: {
		marginHorizontal: 10,
	},
	text: {
		marginLeft: 5,
		// fontFamily: 'Poppins',
		fontSize: 14,
		fontWeight: 'bold',
	},
	codeInput: {
		marginTop: 12,
	},
	center: {
		alignItems: 'center',
		marginRight: 30,
	}
});
