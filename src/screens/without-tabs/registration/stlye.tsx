import { StyleSheet } from 'react-native';
import { colors } from 'constants/colors';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.lightBlue,
	},
	top: {
		flex: 1,
	},
	center: {
		// width: 300,
		// borderWidth: 1,
		// flex: 0.4,
		borderRadius: 19,
	},
	bottom: {
		// flex: 0.4,
		justifyContent: 'space-evenly',
	},
	text1: {
		fontSize: 16,
		lineHeight: 20,
		fontWeight: '400',
		color: 'rgba(0,0,0,.8)',
	},
	text3: {
		marginTop: 100,
		opacity: 0.5,
		fontSize: 144,
		lineHeight: 173,
		textAlign: 'center',
		fontWeight: 'bold',
		color: colors.darkBlue,
	},
	text4: {
		fontSize: 12,
		lineHeight: 20,
		fontWeight: '400',
		textAlign: 'center',
	},
	text5: {
		fontSize: 12,
		lineHeight: 20,
		fontWeight: '700',
		textAlign: 'center',
	},
	mt12: {
		paddingTop: -10,
		marginTop: 40,
	},
	mt20: {
		marginVertical: 10,
	},
	viewAll: {
		marginTop: 16,
		alignItems: 'center',
		justifyContent: 'flex-end',
		flexDirection: 'row',
	},
	textView: {
		marginTop: -5,
		fontSize: 12,
		fontFamily: 'Lato',
		fontWeight: 'bold',
	},
	textConfirmation: {
		marginBottom: 20,
		marginTop: -20,
		marginLeft: 30,
		fontSize: 25,
		fontFamily: 'Lato',
		fontWeight: 'bold',
	},
	textLanguage: {
		fontSize: 14,
		fontWeight: '400',
		fontFamily: 'Lato',
		marginLeft: 30,
		marginTop: 3,
		// marginBottom: -100,
	},
	lbox: {
		width: 335,
		marginLeft: 30,
		marginTop: 20,
		marginBottom: 30,
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
	circle: {
		width: 10,
		height: 10,
		borderRadius: 10,
		backgroundColor: colors.iconBlue,
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
		alignItems: 'center',
		justifyContent: 'center',
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
		color: colors.darkBlue,
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
