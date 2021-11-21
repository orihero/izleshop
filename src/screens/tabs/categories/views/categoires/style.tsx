import { StyleSheet } from 'react-native';
import { colors } from 'constants/colors';
import { windowWidth } from 'constants/sizes';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingRight: 5,
		marginHorizontal: 3,
	},
	emptyContainer: {
		// paddingHorizontal: 15,
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	emptyCard: {
		width: windowWidth / 3 - 25,
		height: 110,
		elevation: 2,
		marginTop: 20,
		borderRadius: 25,
		marginBottom: 10,
		shadowOpacity: 0.2,
		marginHorizontal: 10,
		backgroundColor: colors.white,
		justifyContent: 'space-between',
	},
});
