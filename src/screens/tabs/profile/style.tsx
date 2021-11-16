import { colors } from 'constants/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingBottom: 20,
		backgroundColor: colors.lightBlue,
	},
	welcomeText: {
		marginTop: 25,
		fontSize: 23,
		fontWeight: '600',
		alignSelf: 'center',
		color: colors.black,
	},
	avatarContainer: {
		flexShrink: 1,
		alignItems: 'center',
		marginBottom: 5,
	},
	avatar: {
		width: 60,
		height: 60,
		marginHorizontal: 20,
	},
	loginPrompt: {
		fontSize: 14,
		marginTop: 20,
		textAlign: 'center',
		marginHorizontal: 20,
		color: colors.lightBlack,
	},
	button: {},
	profileSettings: {
		fontSize: 20,
		color: colors.black,
		marginVertical: 25,
		marginHorizontal: 20,
	},
	component: {
		marginTop: 7,
		marginBottom: 9,
		height: 25,
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'row',
	},
	textOne: {
		fontSize: 15,
		lineHeight: 16,
		fontWeight: 'bold',
	},
	md10: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	viewAll: {
		marginTop: 7,
		marginBottom: 9,
		height: 25,
	},
	textView: {
		marginTop: -2,
		fontSize: 10,
		fontFamily: 'Lato',
		fontWeight: 'bold',
	},
	img: {
		width: 300,
		height: 130,
	},
	myProfile: {
		height: 50,
		paddingLeft: 20,
		paddingHorizontal: 20,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: colors.white,
	},
	profile: {
		width: 260,
		// paddingTop: 5,
		justifyContent: 'flex-start',
		flexDirection: 'row',
	},
	textProfile: {
		paddingTop: 5,
		justifyContent: 'flex-start',
		fontFamily: 'Lato',
		fontWeight: '600',
		fontSize: 18,
	},
	flag: {
		paddingTop: 5,
		flexDirection: 'row',
		paddingHorizontal: 2,
	},
	imageFlag: {
		width: 18,
		height: 18,
	},
	setting: {
		marginHorizontal: 5,
		paddingRight: 20,
	},
	news: {
		height: 187,
		marginTop: 22,
		borderRadius: 7,
		marginBottom: 15,
		marginHorizontal: 20,
		backgroundColor: colors.white,
		paddingHorizontal: 10,
	},
	orders: {
		width: 365,
		height: 130,
		marginHorizontal: 10,
		justifyContent: 'center',
		left: 10,
		marginTop: 10,
		borderRadius: 7,
		backgroundColor: colors.white,
	},
	myOrders: {
		width: 350,
		height: 30,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	textOrders: {
		paddingLeft: 15,
		fontSize: 18,
		fontWeight: 'bold',
		fontFamily: 'Lato',
		alignItems: 'center',
	},
	mt: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'center',
	},
	orderView: {
		width: 357,
		fontSize: 10,
		paddingTop: 5,
		paddingRight: 15,
		fontWeight: 'bold',
		fontFamily: 'Lato',
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	line: {
		width: 340,
		height: 1,
		left: 5,
		borderWidth: 1,
		borderColor: colors.lightGray,
	},
	dispatch: {
		width: 340,
		height: 70,
		marginHorizontal: 10,
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	payment: {
		// width: 90,
		paddingLeft: 5,
		alignItems: 'center',
		justifyContent: 'center',
	},
	textPayment: {
		width: 65,
		fontSize: 11,
		paddingTop: 2,
		fontFamily: 'Lato',
		fontWeight: '400',
		textAlign: 'center',
	},
	textPayments: {
		width: 67,
		paddingTop: 2,
		fontSize: 11,
		fontFamily: 'Lato',
		fontWeight: '400',
		textAlign: 'center',
	},
	payments: {
		paddingTop: 3,
		paddingVertical: 2,
		alignItems: 'center',
		justifyContent: 'center',
	},
	reviews: {
		width: 330,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	textReviews: {
		paddingLeft: 5,
		fontSize: 16,
		fontWeight: 'bold',
		fontFamily: 'Lato',
	},
	lol: {
		width: 340,
		height: 25,
		paddingLeft: 15,
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'row',
	},
	chat: {
		width: 15,
		paddingTop: 4,
	},
});
