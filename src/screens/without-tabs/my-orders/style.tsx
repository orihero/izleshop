import { StyleSheet } from 'react-native';
import { colors } from 'constants/colors';
import { windowWidth } from 'constants/sizes';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.lightBlue
	},
	boxOne: {
		width: windowWidth,
		padding: 20,
		elevation: 7,
		backgroundColor: colors.white
	},
	textBox: {
		// flexDirection: 'row'
	},
	text: {
		fontSize: 12,
		fontWeight: '700',
		lineHeight: 20
	},
	mt10: {},
	boxTwo: {
		flexDirection: 'row',
		justifyContent: 'space-between'
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
		backgroundColor: colors.white
	},
	button: {
		width: 335,
		height: 40,
		marginTop: 20,
		marginLeft: 10,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.lightPink,
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
		backgroundColor: colors.white
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
});
