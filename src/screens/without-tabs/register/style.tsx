import { StyleSheet } from 'react-native';
import { colors } from 'constants/colors';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	top: {
		flex: 0.4,
	},
	center: {
		flex: 0.1,
		marginTop: -290,
		borderRadius: 19
	},
	bottom: {
		flex: 0.4,
		justifyContent: 'space-evenly',
	},
	text1: {
		fontSize: 16,
		lineHeight: 20,
		fontWeight: '400',
		color: 'rgba(0,0,0,.8)',
	},
	text3: {
		marginTop: 100,
		opacity: 0.5,
		fontSize: 144,
		lineHeight: 173,
		textAlign: 'center',
		color: colors.darkBlue,
	},
	text4: {
		fontSize: 12,
		lineHeight: 20,
		fontWeight: '400',
		textAlign: 'center',
	},
	text5: {
		fontSize: 12,
		lineHeight: 20,
		fontWeight: '700',
		textAlign: 'center',
	},
	mt12: {

		marginTop: 40,
	},
	mt20: {
		marginVertical: 10,
	},
	viewAll: {
		marginTop: 16,
		alignItems: 'center',
		justifyContent: 'flex-end',
		flexDirection: 'row',
	},
	textView: {
		marginTop: -5,
		fontSize: 12,
		fontFamily: 'Lato',
		fontWeight: 'bold',
	},
	textConfirmation: {
		marginBottom: 20,
		marginTop: -20,
		marginLeft: 30,
		fontSize: 25,
		fontFamily: 'Lato',
		fontWeight: 'bold',
	},
});
