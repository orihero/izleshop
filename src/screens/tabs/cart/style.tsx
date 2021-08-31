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
	},
	totalPrice: {},
});
