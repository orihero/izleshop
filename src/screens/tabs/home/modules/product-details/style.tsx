import { StyleSheet } from 'react-native';
import { colors } from 'constants/colors';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.lightBlue,
	},
	btnCont: {
		left: 0,
		right: 0,
		bottom: 0,
		paddingVertical: 5,
		position: 'absolute',
		backgroundColor: colors.lightBlue,
	},
	bgw: {
		backgroundColor: colors.white,
	},
	carousel: {
		paddingTop: 28,
	},
	row: {
		paddingVertical: 15,
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 32,
		justifyContent: 'space-between',
	},
	pdotcont: {
		paddingHorizontal: 0,
		marginHorizontal: 2.5,
	},
	pdot: {
		width: 10,
		height: 10,
		borderRadius: 5,
		paddingHorizontal: 2,
		backgroundColor: colors.blue,
	},
	main: {
		paddingHorizontal: 20,
		paddingTop: 15,
	},
	text1: {
		fontSize: 16,
		lineHeight: 19,
		fontWeight: '600',
		marginRight: 60,
	},
	pr: {
		marginTop: 15,
		flexDirection: 'row',
		alignItems: 'center',
	},
	text2: {
		fontSize: 18,
		lineHeight: 21,
		fontWeight: '600',
		color: colors.gray2,
		textDecorationLine: 'line-through',
	},
	text3: {
		fontSize: 20,
		lineHeight: 24,
		marginLeft: 50,
		fontWeight: '800',
		color: colors.blue,
	},
	text4: {
		fontSize: 18,
		marginTop: 20,
		lineHeight: 18,
		fontWeight: '600',
	},
	mt20: {
		marginTop: 20,
	},
	flatList: {
		backgroundColor: 'aqua',
	},
	tmpBox: {
		width: 30,
		height: 25,
		backgroundColor: 'lightgreen',
	},
});
