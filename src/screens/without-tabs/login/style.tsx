import { StyleSheet } from 'react-native';
import { colors } from 'constants/colors';

export const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.lightBlue,
	},
	top: {
		flex: 0.4,
	},
	center: {
		flex: 0.1,
		justifyContent: 'center',
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
		marginTop: 200,
		opacity: 0.5,
		fontSize: 144,
		lineHeight: 173,
		textAlign: 'center',
		fontWeight: 'bold',
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
		// marginTop: 12,
	},
	mt20: {
		marginVertical: 10,
	},
	viewAll: {
		marginRight: 25,
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
	textAuth: {
		marginBottom: 27,
		marginTop: 50,
		marginLeft: 30,
		fontSize: 25,
		fontFamily: 'Lato',
		fontWeight: 'bold',
	}
});
