import { StyleSheet } from 'react-native';
import { colors } from 'constants/colors';
import { paddingVertical, windowWidth } from 'constants/sizes';

const styles = StyleSheet.create({
	emptyBanner: {
		width: windowWidth - 30,
		height: windowWidth / 2 - 30,
		alignSelf: 'center',
		borderRadius: 7.5,
		overflow: 'hidden',
		marginHorizontal: 20,
		marginTop: paddingVertical,
	},
	emptyContainer: {
		// paddingHorizontal: 15,
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	emptyCard: {
		width: windowWidth / 2 - 30,
		height: 250,
		shadowOpacity: 0.2,
		borderRadius: 7.5,
		elevation: 2,
		marginLeft: 18,
		marginBottom: 10,
		// marginHorizontal: 3,
		backgroundColor: colors.white,
	},
	container: {
		backgroundColor: colors.lightBlue,
		// paddingHorizontal: 20,
		paddingVertical: 10,
		flex: 1,
	},
	scroll: {
		marginTop: 10,
	},
	carousel: {
		borderRadius: 7.5,
		overflow: 'hidden',
		marginHorizontal: 20,
		marginTop: paddingVertical,
	},
	pdotcont: {
		height: 20,
		marginVertical: 0,
		paddingVertical: 0,
		paddingHorizontal: 0,
		marginHorizontal: 2.5,
	},
	pdot: {
		width: 10,
		height: 10,
		borderRadius: 5,
		marginTop: 10,
		paddingHorizontal: 2,
		backgroundColor: colors.blue,
	},
	text: {
		color: colors.black,
		fontSize: 18,
		marginHorizontal: 20,
		marginBottom: 10,
	},
	flatList: {
		paddingBottom: 40,
		paddingRight: 20,
		paddingVertical: 10,
	},
});

export default styles;
