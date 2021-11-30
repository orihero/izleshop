import { StyleSheet } from 'react-native';
import { colors } from 'constants/colors';
import { windowHeight, windowWidth } from 'constants/sizes';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.lightBlue,
	},
	header: {
		padding: 20,
		elevation: 7,
		marginBottom: 7,
		borderTopWidth: 2,
		width: windowWidth,
		borderColor: colors.leghtGrey,
		backgroundColor: colors.white,
	},
	mt10: {},
	box: {
		height: 60,
		elevation: 7,
		marginBottom: 8,
		width: windowWidth,
		alignItems: 'center',
		flexDirection: 'row',
		paddingHorizontal: 15,
		justifyContent: 'space-evenly',
		backgroundColor: colors.white,
	},
	text: {
		fontSize: 16,
		fontWeight: '400',
	},
	rating: {
		paddingBottom: 10,
	},
	numberBox: {
		flexDirection: 'row',
	},
	number: {
		fontSize: 22,
	},
	numbers: {
		fontSize: 15,
		paddingTop: 8,
		color: colors.leghtGrey1,
	},
	input: {
		height: 130,
		width: windowWidth,
		backgroundColor: colors.white,
	},
	textBox: {
		flexDirection: 'row',
		textAlign: 'center',
		paddingLeft: 16,
		paddingTop: 10,
	},
	help: {
		fontSize: 15,
		lineHeight: 19,
		paddingRight: 3,
		fontWeight: '700',
		paddingBottom: 30,
	},
	size: {
		fontSize: 13,
		paddingTop: 1,
		color: colors.leghtGrey1,
	},
	textInput: {
		width: 320,
		color: colors.black,
		borderBottomWidth: 1,
		marginHorizontal: 40,
	},
	button: {
		height: windowHeight - 480,
		marginVertical: 10,
		marginHorizontal: 10,
		justifyContent: 'flex-end',
	},
});
