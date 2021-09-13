import { StyleSheet } from 'react-native';
import { colors } from 'constants/colors';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.lightBlue,
	},
	badge: {
		width: 15,
		height: 15,
		position: 'absolute',
		right: -8,
		top: -8,
		zIndex: 1,
		padding: 3,
		borderRadius: 10,
		backgroundColor: colors.red,
	},
	badgeText: {
		fontSize: 8,
		textAlign: 'center',
		lineHeight: 10,
		fontWeight: '700',
		color: colors.white,
		textAlignVertical: 'center',
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
	pdot: {
		width: 10,
		height: 10,
		borderRadius: 5,
		paddingHorizontal: 2,
		backgroundColor: colors.blue,
	},
	pdotcont: {
		paddingHorizontal: 0,
		marginHorizontal: 2.5,
	},
	main: {
		paddingHorizontal: 20,
		paddingTop: 15,
	},
	pr: {
		marginTop: 15,
		flexDirection: 'row',
		alignItems: 'center',
	},
	text1: {
		fontSize: 16,
		lineHeight: 19,
		fontWeight: '600',
		marginRight: 60,
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
	accordion: {
		marginTop: 20,
		marginHorizontal: 20,
	},
	text4: {
		fontSize: 18,
		marginTop: 20,
		lineHeight: 18,
		marginLeft: 20,
		fontWeight: '600',
	},
	mt20: {
		marginTop: 20,
	},
	mb60: {
		marginBottom: 60,
	},
	btnCont: {
		left: 0,
		right: 0,
		bottom: 0,
		paddingVertical: 5,
		position: 'absolute',
		backgroundColor: colors.lightBlue,
	},
});
