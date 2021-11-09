import { StyleSheet } from 'react-native';
import { colors } from 'constants/colors';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.lightBlue,
	},
	totalContainer: {
		width: 335,
		elevation: 5,
		display: 'flex',
		borderRadius: 10,
		marginBottom: 10,
		paddingVertical: 15,
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 20,
		backgroundColor: colors.white,
		justifyContent: 'space-between',
	},
	totalPriceText1: {
		fontSize: 18,
		lineHeight: 21,
		fontWeight: '600',
		color: colors.neutralDark,
	},
	totalPriceText2: {
		fontSize: 18,
		lineHeight: 21,
		fontWeight: '700',
		color: colors.blue,
	},
	button: {
		width: 335,
		alignItems: 'center',
		elevation: 7,
	},
	absolute: {
		left: 0,
		right: 0,
		bottom: 0,
		paddingTop: 15,
		paddingBottom: 30,
		alignItems: 'center',
		position: 'absolute',
		// backgroundColor: 'rgba(0, 0, 0, 0.1 )',
	},
	mh20: {
		marginHorizontal: 20,
	},
	mt15: {
		marginTop: 15,
	},
});
