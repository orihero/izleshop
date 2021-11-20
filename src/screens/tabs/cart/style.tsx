import { StyleSheet } from 'react-native';
import { colors } from 'constants/colors';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.lightBlue,
	},
	totalContainer: {
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
		marginHorizontal: 20,
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
		elevation: 7,
		left: 0,
		right: 0,
		bottom: 0,
	},
	absolute: {
		left: 0,
		right: 0,
		bottom: 0,
		paddingTop: 15,
		paddingBottom: 30,
		// alignItems: 'center',
		position: 'absolute',
		// backgroundColor: 'rgba(0, 0, 0, 0.1 )',
	},
	mh20: {
		marginHorizontal: 10,
	},
	mt15: {
		marginTop: 15,
	},
	emptyContent: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
	},
	cartText: {
		fontSize: 20,
		marginBottom: 20,
		textAlign: 'center',
	},
});
