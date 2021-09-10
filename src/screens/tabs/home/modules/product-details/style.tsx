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
	accordion: {
		backgroundColor: colors.white,
	},
	accordionItem: {
		paddingVertical: 15,
		flexDirection: 'row',
		alignItems: 'center',
		borderBottomWidth: 1,
		paddingHorizontal: 10,
		justifyContent: 'space-between',
		borderBottomColor: colors.lightGray,
	},
	iconClosed: {
		transform: [{ rotate: '90deg' }],
	},
	iconOpened: {
		transform: [{ rotate: '-90deg' }],
	},
	accordionContent: {
		padding: 14,
		borderBottomWidth: 1,
		borderBottomColor: colors.lightGray,
	},
	accordionRow: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	accordionRowLeft: {
		flex: 0.5,
	},
	accordionRowRight: {
		flex: 0.5,
		alignItems: 'flex-end',
	},
	accordionText1: {
		fontSize: 14,
		lineHeight: 17,
	},
	accordionText2: {
		fontSize: 12,
		lineHeight: 15,
	},
	text5: {
		fontSize: 14,
		lineHeight: 17,
		fontWeight: '400',
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
	mb60: {
		marginBottom: 60,
	},
	ml20: {
		marginLeft: 20,
	},
	mh20: {
		marginHorizontal: 20,
	},
	mt10: {
		marginTop: 10,
	},
	mt14: {
		marginTop: 14,
	},
	tacenter: {
		textAlign: 'center',
	},
	taleft: {
		textAlign: 'left',
	},
	bgw: {
		backgroundColor: colors.white,
	},
	fw400: {
		fontWeight: '400',
	},
	fw600: {
		fontWeight: '600',
	},
	fw700: {
		fontWeight: '700',
	},
	tmpBox: {
		width: 20,
		height: 20,
		backgroundColor: 'lightgreen',
	},
});
