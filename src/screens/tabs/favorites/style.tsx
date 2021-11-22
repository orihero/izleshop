import { StyleSheet } from 'react-native';
import { colors } from 'constants/colors';

export const styles = StyleSheet.create({
	flatList: {
		flex: 1,
		paddingTop: 0,
		paddingHorizontal: 20,
	},
	mt15: {
		marginTop: 5,
	},
	container: {
		backgroundColor: colors.lightBlue,
		flex: 1,
	},
	emptyContent: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
	},
	cartText: {
		fontSize: 13,
		marginBottom: 20,
		// textAlign: 'center',
	},
});
