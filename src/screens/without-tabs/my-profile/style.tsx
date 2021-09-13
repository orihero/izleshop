import { StyleSheet } from 'react-native';
import { colors } from 'constants/colors';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: colors.lightGray,
	},
	text1: {
		fontSize: 16,
		lineHeight: 20,
		fontWeight: '400',
		color: 'rgba(0,0,0,.8)',
	},
	content: {
		flex: 1,
		marginVertical: 10,
		justifyContent: 'space-between',
	},
	box: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text2: {
		opacity: 0.5,
		fontSize: 80,
		lineHeight: 100,
		color: colors.darkBlue,
	},
	mt12: {
		marginTop: 12,
	},
	mt20: {
		marginTop: 20,
	},
});
