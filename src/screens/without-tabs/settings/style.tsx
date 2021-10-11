import { StyleSheet } from 'react-native';
import { colors } from 'constants/colors';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 5,
		backgroundColor: colors.lightBlue,
	},
	profilePage: {
		width: 388,
		height: 60,
		paddingLeft: 40,
		alignItems: 'center',
		justifyContent: 'space-evenly',
		flexDirection: 'row',
		backgroundColor: colors.white,
	},
	profile: {
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		paddingLeft: 20,
		paddingRight: 50,
	},
	textProfile: {
		width: 350,
		fontSize: 18,
		fontFamily: 'Lato',
		fontWeight: '600',
		paddingLeft: 30,
		// lineHeight: 16,
	},
	settingProfile: {
		width: 390,
		height: 165,
		marginTop: 5,
		backgroundColor: colors.white,
	},
	birthday: {
		height: 55,
		paddingLeft: 19,
		alignItems: 'center',
		flexDirection: 'row',
		borderBottomWidth: 1,
		borderColor: colors.lightGray
	},
	birthdayString: {
		alignItems: 'center',
		flexDirection: 'row',
	},
	textbirthday: {
		fontSize: 12,
		paddingLeft: 20,
		paddingRight: 105,
		fontWeight: 'bold',
		fontFamily: 'Poppins',
		alignItems: 'center',
		justifyContent: 'flex-end'
	},
	day: {
		right: 15,
		fontSize: 12,
		fontWeight: '400',
		fontFamily: 'Poppons',
		color: colors.leghtGrey1,
	},
	phoneNumber: {
		height: 55,
		paddingLeft: 20,
		alignItems: 'center',
		flexDirection: 'row',
		borderBottomWidth: 1,
		borderColor: colors.lightGray
	},
	phoneString: {
		alignItems: 'center',
		flexDirection: 'row',
	},
	textPhone: {
		fontSize: 12,
		paddingLeft: 20,
		paddingRight: 92,
		fontWeight: 'bold',
		fontFamily: 'Poppins',
		alignItems: 'center',
	},
	number: {
		right: 15,
		fontSize: 12,
		fontWeight: '400',
		fontFamily: 'Poppons',
		color: colors.leghtGrey1,
	},
	changeLanguage: {
		height: 55,
		paddingLeft: 20,

		alignItems: 'center',
		flexDirection: 'row'
	},
	languageString: {
		alignItems: 'center',
		flexDirection: 'row',
	},
	textLanguage: {
		fontSize: 12,
		paddingLeft: 20,
		paddingRight: 170,
		fontWeight: 'bold',
		fontFamily: 'Poppins',
		alignItems: 'center'
	},
	flag: {
		width: 18,
		height: 18,
		right: 15,
	},
	text3: {
		marginTop: 166,
		opacity: 0.5,
		fontSize: 144,
		lineHeight: 173,
		textAlign: 'center',
		color: colors.darkBlue,
	},
});
