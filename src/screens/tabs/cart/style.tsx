import { StyleSheet } from 'react-native';
import { colors } from 'constants/colors';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.lightBlue,
	},
	totalContainer: {
		width: '90%',
		marginBottom: 15,
		marginLeft: 20,
		paddingHorizontal: 20,
		borderRadius: 10,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingVertical: 15,
		backgroundColor: colors.white,
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
	absolute: {
		// paddingTop: 500,
		position: 'absolute',
		bottom: 20,
		left: 0,
		right: 0,
	},
	mh20: {
		marginHorizontal: 20,
	},
	mt15: {
		marginTop: 15,
	},
});
