import { colors } from 'constants/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
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
		marginTop: 20,
		fontSize: 14,
		color: colors.lightBlack,
		marginHorizontal: 30,
	},
	button: {
		marginHorizontal: 10,
	},
	profileSettings: {
		fontSize: 20,
		color: colors.black,
		marginVertical: 25,
		marginHorizontal: 20,
	},
	news: {
		width: 370,
		height: 187,
		marginTop: 22,
		marginHorizontal: 20,
		borderRadius: 7,
		marginBottom: 15,
		alignItems: 'center',
		backgroundColor: colors.white,
	},
	component: {
		marginTop: 7,
		marginBottom: 9,
		width: 330,
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
	viewAll: {
		alignItems: 'center',
		flexDirection: 'row',
	},
	textView: {
		marginTop: -2,
		fontSize: 10,
		fontFamily: 'Lato',
		fontWeight: 'bold',
	},
	myProfile: {
		height: 50,
		paddingLeft: 20,
		paddingHorizontal: 10,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: colors.white,
	},
	profile: {
		width: 300,
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
		flexDirection: 'row'
	},
	imageFlag: {
		width: 18,
		height: 18,
	},
	setting: {
		marginHorizontal: 10,
		paddingRight: 20,
	},
	orders: {
		width: 370,
		height: 130,
		marginHorizontal: 20,
		marginTop: 10,
		borderRadius: 7,
		backgroundColor: colors.white,
	},
	myOrders: {
		width: 350,
		height: 30,
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'row',
	},
	textOrders: {
		paddingLeft: 15,
		fontSize: 18,
		fontWeight: 'bold',
		fontFamily: 'Lato',
		alignItems: 'center',
	},
	orderView: {
		paddingRight: 15,
		paddingTop: 5,
		fontSize: 10,
		fontWeight: 'bold',
		fontFamily: 'Lato',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
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
		width: 60,
		fontSize: 11,
		paddingTop: 2,
		fontFamily: 'Lato',
		fontWeight: '400',
		textAlign: 'center',
	},
	textPayments: {
		width: 62,
		paddingTop: 2,
		fontSize: 11,
		fontFamily: 'Lato',
		fontWeight: '400',
		textAlign: 'center',
	},
	payments: {
		paddingTop: 2,
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
