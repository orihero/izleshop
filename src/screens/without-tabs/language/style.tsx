import { StyleSheet } from 'react-native';
import { colors } from 'constants/colors';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
	},
	title: {
		fontSize: 14,
		lineHeight: 17,
		fontWeight: '600',
	},
	lbox: {
		marginTop: 20,
		backgroundColor: colors.white,
	},
	lrow: {
		padding: 15,
		flexDirection: 'row',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderColor: colors.lightGray,
		justifyContent: 'space-between',
	},
	ltext: {
		fontSize: 14,
		lineHeight: 17,
		fontWeight: '500',
	},
	lsquare: {
		width: 15,
		height: 15,
		borderWidth: 1,
		borderRadius: 10,
	},
	content: {
		flex: 1,
		marginBottom: 10,
		justifyContent: 'space-between',
	},
	box: {
		flex: 1,
		marginTop: 20,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		opacity: 0.5,
		fontSize: 144,
		lineHeight: 172,
		color: colors.darkBlue,
	},
	cblack: {
		color: colors.black,
	},
	cblue: {
		color: colors.darkBlue,
	},
	bblack: {
		borderColor: colors.black,
	},
	bblue: {
		borderColor: colors.darkBlue,
	},
});
