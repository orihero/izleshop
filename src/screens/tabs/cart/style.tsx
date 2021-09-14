import { StyleSheet } from 'react-native';
import { colors } from 'constants/colors';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.lightBlue,
	},
	totalContainer: {
		paddingHorizontal: 20,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 15,
	},
	totalPriceText1: {
		fontSize: 18,
		lineHeight: 21,
		fontWeight: '600',
	},
	totalPriceText2: {
		fontSize: 18,
		lineHeight: 21,
		fontWeight: '700',
	},
	absolute: {
		position: 'absolute',
		bottom: 20,
		left: 0,
		right: 0,
	},
	mh20: {
		marginHorizontal: 20,
	},
});
