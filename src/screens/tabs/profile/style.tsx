import { colors } from 'constants/colors';
import { StyleSheet } from 'react-native';
import { windowWidth } from 'constants/sizes';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingBottom: 150,
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
		width: windowWidth - 60,
		height: 130,
		// marginHorizontal: 30,
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
		fontSize: 18,
		paddingTop: 5,
		fontWeight: '600',
		fontFamily: 'Lato',
		color: colors.black,
		justifyContent: 'flex-start',
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
		width: windowWidth - 40,
		height: 130,
		marginHorizontal: 20,
		marginTop: 10,
		borderRadius: 7,
		backgroundColor: colors.white,
		paddingRight: 10,
	},
	myOrders: {
		height: 30,
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
		fontSize: 10,
		paddingTop: 5,
		paddingRight: 15,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	line: {
		height: 1,
		left: 5,
		borderWidth: 1,
		borderColor: colors.lightGray,
	},
	dispatch: {
		height: 70,
		marginHorizontal: 10,
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	payment: {
		// width: 90,
		paddingLeft: 5,
		marginVertical: 10,
		alignItems: 'center',
		justifyContent: 'center',
	},
	textPayment: {
		width: 64,
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
		width: windowWidth - 70,
		marginHorizontal: 5,
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
		height: 25,
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'row',
		paddingLeft: 10,
	},
	chat: {
		width: 15,
		paddingTop: 4,
	},
	number:{
		justifyContent:'center',
		alignItems: 'center',
		position: 'absolute',
		width: 18,
		height: 18,
		backgroundColor: colors.red,
		right: 10,
		borderRadius: 18,
		top: 4,
	},
	countIndicator: {
		
		color: colors.white,
		textAlignVertical: 'center',
		textAlign: 'center',
		fontSize: 10,
		lineHeight: 12,
	},
});
