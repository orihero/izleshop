import { StyleSheet } from 'react-native';
import { colors } from 'constants/colors';

export const styles = StyleSheet.create({
	circle: {
		backgroundColor: colors.blueLight,
		width: 10,
		height: 10,
		borderRadius: 10,
	},
	container: {
		flex: 1,
		padding: 20,
		marginTop: 5,
		backgroundColor: colors.lightBlue,
	},
	title: {
		fontSize: 14,
		lineHeight: 17,
		fontWeight: '600',
	},
	lbox: {
		marginTop: 20,
		backgroundColor: colors.white,
	},
	lrow: {
		padding: 15,
		flexDirection: 'row',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderColor: colors.lightGray,
		justifyContent: 'space-between',
	},
	ltext: {
		fontSize: 14,
		lineHeight: 17,
		fontWeight: '500',
	},
	lsquare: {
		width: 15,
		height: 15,
		borderWidth: 1,
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},
	content: {
		flex: 1,
		marginBottom: 10,
		justifyContent: 'space-between',
	},
	box: {
		flex: 1,
		marginTop: 20,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		opacity: 0.5,
		fontSize: 144,
		lineHeight: 172,
		fontWeight: 'bold',
		color: colors.darkBlue,
	},
	button: {
		width: 355,
		height: 57,
		marginTop: 15,
		marginRight: 20,
		marginHorizontal: 10,
		borderRadius: 5,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.blueLight,
	},
	textCancel: {
		fontSize: 14,
		fontWeight: 'bold',
		textAlign: 'center',
		// fontFamily: 'Poppins',
		color: colors.white,
	},
	cblack: {
		color: colors.black,
	},
	cblue: {
		color: colors.darkBlue,
	},
	bblack: {
		borderColor: colors.black,
	},
	bblue: {
		borderColor: colors.darkBlue,
	},
});
