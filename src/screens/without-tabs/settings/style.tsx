import { StyleSheet } from 'react-native';
import { colors } from 'constants/colors';

export const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	container: {
		flex: 1,
		paddingTop: 5,
		textAlign: 'center',
		backgroundColor: colors.lightBlue,
	},
	profilePage: {
		marginHorizontal: 10,
		width: 388,
		height: 60,
		paddingLeft: 40,
		paddingHorizontal: 10,
		alignItems: 'center',
		justifyContent: 'space-evenly',
		flexDirection: 'row',
		backgroundColor: colors.white,
	},
	profile: {
		left: 28,
		paddingRight: 50,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	textProfile: {
		width: 350,
		fontSize: 18,
		fontFamily: 'Lato',
		fontWeight: '600',
		paddingLeft: 20,
		// lineHeight: 16,
	},
	icon: {
		right: 35,
	},
	settingProfile: {
		width: 390,
		height: 112,
		marginTop: 5,
		marginLeft: 10,
		backgroundColor: colors.white,
	},
	dataContainer: {
		height: 55,
		paddingHorizontal: 20,
		alignItems: 'center',
		flexDirection: 'row',
		borderBottomWidth: 1,
		borderColor: colors.lightGray,
		justifyContent: 'space-between',
	},
	birthdayString: {
		width: 350,
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
	},
	textbirthday: {
		fontSize: 12,
		fontWeight: 'bold',
		alignSelf: 'center',
		paddingLeft: 20,
	},
	day: {
		left: 50,
		fontSize: 12,
		fontWeight: '400',
		// fontFamily: 'Poppons',
		color: colors.leghtGrey1,
	},
	phoneNumber: {
		height: 55,
		paddingLeft: 18,
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'row',
		borderBottomWidth: 1,
		borderColor: colors.lightGray,
	},
	phoneString: {
		width: 350,
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
	},
	textPhone: {
		fontSize: 12,
		paddingLeft: 20,
		paddingRight: 92,
		fontWeight: 'bold',
		// fontFamily: 'Poppins',
		alignItems: 'center',
	},
	number: {
		left: 45,
		fontSize: 12,
		fontWeight: '400',
		// fontFamily: 'Poppons',
		color: colors.leghtGrey1,
	},
	changeLanguage: {
		height: 55,
		paddingLeft: 20,

		alignItems: 'center',
		flexDirection: 'row',
	},
	languageString: {
		width: 350,
		alignItems: 'center',
		flexDirection: 'row',
	},
	titleText: {
		fontSize: 12,
		paddingLeft: 20,
		paddingRight: 170,
		fontWeight: 'bold',
		// fontFamily: 'Poppins',
		alignItems: 'center',
	},
	flag: {
		width: 18,
		height: 18,
		marginRight: 6,
		// right: 12,
	},
	text3: {
		marginTop: 166,
		opacity: 0.5,
		fontSize: 144,
		lineHeight: 173,
		textAlign: 'center',
		fontWeight: 'bold',
		color: colors.darkBlue,
	},
});
