import { StyleSheet } from 'react-native';
import { colors } from 'constants/colors';

export const styles = StyleSheet.create({
	flatList: {
		flex: 1,
		paddingTop: 10,
		paddingBottom: 20,
		paddingHorizontal: 20,
	},
	mt15: {
		paddingTop: 5,
		marginTop: 5,
	},
	container: {
		flex: 1,
		backgroundColor: colors.lightBlue,
	},
	emptyContent: {
		flex: 1,
		marginTop: 260,
		alignItems: 'center',
		justifyContent: 'center',
	},
	cartText: {
		fontSize: 13,
		marginBottom: 20,
		// textAlign: 'center',
	},
});
