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
	totalPrice: {
		fontSize: 18,
	},
	absolute: {
		position: 'absolute',
		bottom: 20,
		left: 0,
		right: 0,
	},
});
