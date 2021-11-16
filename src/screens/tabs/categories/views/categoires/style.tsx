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
		width: windowWidth / 3 - 30,
		height: 150,
		shadowOpacity: 0.2,
		borderRadius: 7.5,
		elevation: 2,
		marginLeft: 18,
		marginBottom: 10,
		// marginHorizontal: 3,
		backgroundColor: colors.white,
	},
});
