import { StyleSheet } from 'react-native';
import { colors } from 'constants/colors';
import { windowWidth } from 'constants/sizes';

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
		marginHorizontal: 30,
	},
	input: {
		paddingLeft: 10,
		color: colors.black,
	},
	mt10: {
		marginTop: 10,
		borderRadius: 10,
		marginHorizontal: 30,
		width: windowWidth - 60,
		backgroundColor: colors.white,
	},
});
