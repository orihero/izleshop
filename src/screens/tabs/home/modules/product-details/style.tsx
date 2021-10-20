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
		borderBottomWidth: 1,
		borderColor: colors.lightBlue
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
		height: 150,
		paddingHorizontal: 20,
		paddingTop: 15,
		backgroundColor: colors.white,
	},
	pr: {
		marginTop: 15,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start'
	},
	text1: {
		fontSize: 16,
		lineHeight: 19,
		fontWeight: 'bold',
		marginRight: 60,
		color: colors.neutralDark
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
		paddingRight: 14,
		fontWeight: '800',
		color: colors.blue,
	},
	accordion: {
		marginTop: 12,
		marginHorizontal: 10,
	},
	text4: {
		fontSize: 18,
		marginTop: 15,
		marginBottom: 5,
		lineHeight: 18,
		marginLeft: 10,
		fontWeight: '600',
	},
	mt20: {
		// marginLeft: 10,
		
	},
	margin: {
		marginTop: 10,
		marginLeft: 10,
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
