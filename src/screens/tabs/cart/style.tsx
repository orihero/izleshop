import { StyleSheet } from 'react-native';
import { colors } from 'constants/colors';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.lightBlue,
	},
	totalContainer: {
		width: '85%',
		marginBottom: 10,
		marginLeft: 30,
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
		marginTop: 15,
		position: 'relative',
		bottom: 0,
		left: 0,
		right: 0,
		paddingBottom: 30,
		// backgroundColor:'white'
	},
	mh20: {
		marginHorizontal: 20,
	},
	mt15: {
		marginTop: 15,
	},
});
