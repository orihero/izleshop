import { StyleSheet } from 'react-native';
import { colors } from 'constants/colors';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
	},
	top: {
		flex: 0.4,
		// backgroundColor: 'lightgreen',
	},
	center: {
		flex: 0.1,
		justifyContent: 'center',
		// backgroundColor: 'aqua',
	},
	bottom: {
		flex: 0.4,
		justifyContent: 'space-evenly',
		// backgroundColor: 'aquamarine',
	},
	text1: {
		fontSize: 16,
		lineHeight: 20,
		fontWeight: '400',
		color: 'rgba(0,0,0,.8)',
	},
	text2: {
		fontSize: 16,
		lineHeight: 20,
		fontWeight: '600',
		textAlign: 'center',
		color: 'rgba(0,0,0,.8)',
	},
	text3: {
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
		marginTop: 12,
	},
	mt20: {
		marginTop: 20,
	},
});
