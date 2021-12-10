import { StyleSheet } from 'react-native';
import { colors } from 'constants/colors';
import { windowWidth } from 'constants/sizes';

export const styles = StyleSheet.create({
	indicatorContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.lightBlue,
	},
	container: {
		flex: 1,
		borderTopWidth: 2,
		borderColor: colors.lightGray,
		backgroundColor: colors.lightBlue,
	},
	boxOne: {
		width: windowWidth,
		padding: 20,
		elevation: 7,
		marginVertical: 5,
		backgroundColor: colors.white,
	},
	textBox: {
		// flexDirection: 'row'
	},
	numberBox: {
		flexDirection: 'row',
	},
	text1: {
		paddingRight: 5,
		fontWeight: '400',
		lineHeight: 19,
	},
	text: {
		fontSize: 12,
		fontWeight: '700',
		lineHeight: 20,
	},
	mt10: {},
	boxTwo: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	textColumn: {
		top: 10,
		fontSize: 12,
		lineHeight: 20,
		fontWeight: '400',
	},
	row: {
		alignItems: 'flex-end',
	},
	textRow: {
		top: 10,
		fontSize: 12,
		lineHeight: 20,
		fontWeight: 'bold',
	},
	box: {
		padding: 20,
		marginTop: 5,
		elevation: 6,
		backgroundColor: colors.white,
	},
	button: {
		width: windowWidth - 40,
		height: 40,
		marginTop: 20,
		borderRadius: 5,
		marginHorizontal: 4,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'pink',
	},
	colorText: {
		fontSize: 13,
		fontWeight: 'bold',
		lineHeight: 19,
		color: colors.red,
	},
	boxs: {
		marginTop: 5,
		padding: 20,
		elevation: 7,
		backgroundColor: colors.white,
	},
	buttons: {
		width: 335,
		height: 40,
		marginTop: 20,
		marginLeft: 10,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.red,
	},
	colorTexts: {
		fontSize: 13,
		fontWeight: 'bold',
		lineHeight: 19,
		color: colors.white,
	},
	mt12: {
		height: 30,
		marginTop: 17,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.red,
	},
	mt13: {
		fontSize: 13,
		fontWeight: '700',
		color: colors.white,
	},
	mt14: {
		width: 335,
		height: 30,
		marginTop: 17,
		alignItems: 'center',
		marginHorizontal: 20,
		justifyContent: 'center',
		backgroundColor: colors.lightPink,
	},
	mt15: {
		fontSize: 13,
		fontWeight: '700',
		color: colors.red,
	},
});
