import { StyleSheet } from 'react-native';
import { colors } from 'constants/colors';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: colors.lightBlue,

	},
	text: {
		fontSize: 14,
		lineHeight: 17,
		fontWeight: '700',
		marginLeft: 10,
		marginBottom: 12
	},
	input: {
		marginRight: 30,
		alignItems: 'center'
	},
	izle: {
		fontSize: 144,
		marginTop: 270,
		marginLeft: 40,
		opacity: 0.4,
		fontWeight: 'bold',
		color: colors.darkBlue,
	}
})