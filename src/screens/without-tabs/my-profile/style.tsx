import { StyleSheet } from 'react-native';
import { colors } from 'constants/colors';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.lightBlue,	},
	welcomeText: {
		marginTop: 25,
		fontSize: 20,
		fontWeight: 'bold',
		alignSelf: 'center',
		color: colors.black,
	},
	avatarContainer: {
		// flexDirection: 'row',
		marginTop: 25,
		flexShrink: 1,
		alignItems: 'center',
		marginBottom: 30,
	},
	avatar: {
		width: 60,
		height: 60,
		marginHorizontal: 20,
	},
	loginPrompt: {
		marginTop: 20,
		fontSize: 12,
		color: colors.lightBlack,
	},
	profileSettings: {
		fontSize: 20,
		color: colors.black,
		marginVertical: 25,
		marginHorizontal: 20,
	},
	news: {
		width: 350,
		height: 170,
		marginLeft: 20,
		marginTop: 22,
		marginBottom: 15,
		// justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.white
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
		fontSize: 14,
		fontWeight: 'bold',
		justifyContent: 'space-between',
	},
	viewAll: {
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
	},
	textView: {
		marginTop: -2,
		fontSize: 8,
		fontFamily: 'Lato',
		fontWeight: 'bold',
	},
	myProfile: {
		width: 390,
		height: 50,
		paddingRight: 20,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: colors.white,
	},
	profile: {
		width: 230,
		// paddingLeft: 10,
		justifyContent: 'flex-end',
		flexDirection: 'row'
	},
	textProfile: {
		// width: 190,
		fontFamily: 'Lato',
		fontWeight: '600',
		fontSize: 12,
	},
	imageFlag: {
		width: 18,
		height: 18,
		position: 'absolute',
		left: 325,
	},
	orders: {
		width: 350,
		height: 130,
		marginLeft: 20,
		marginTop: 10,
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
		fontSize: 14,
		fontWeight: 'bold',
		fontFamily: 'Lato',
		alignItems: 'center',
	},
	orderView: {
		paddingRight: 15,
		paddingTop: 5,
		fontSize: 8,
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
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	payment: {
		// width: 90,
		paddingLeft: 5,
		alignItems: 'center',
		justifyContent: 'center'
	},
	textPayment: {
		width: 60,
		fontSize: 9,
		paddingTop: 2,
		fontFamily: 'Lato',
		fontWeight: '400',
		textAlign: 'center'
	},
	textPayments: {
		width: 62,
		paddingTop: 2,
		fontSize: 9,
		fontFamily: 'Lato',
		fontWeight: '400',
		textAlign: 'center'
	},
	payments: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	reviews: {
		width: 300,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	textReviews: {
		paddingLeft: 5,
		fontSize: 10,
		fontWeight: 'bold',
		fontFamily: 'Lato',
	},
	lol: {
		width: 320,
		height: 25,
		paddingLeft: 15,
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'row',
	},
	chat: {
		width: 15,
		paddingTop: 4,
	}
})
