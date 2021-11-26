import { StyleSheet } from 'react-native';
import { colors } from 'constants/colors';

export const styles = StyleSheet.create({
	indicatorContainer: {
		flex: 1,
		backgroundColor: colors.lightBlue,
		justifyContent: 'center',
		alignItems: 'center',
	},
	container: {
		flex: 1,
		backgroundColor: colors.lightBlue,
	},
	top: {
		paddingVertical: 10,
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 20,
		justifyContent: 'space-between',
	},
	topb: {
		borderRadius: 5,
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 11,
		paddingHorizontal: 14,
		backgroundColor: colors.white,
	},
	text1: {
		fontSize: 12,
		lineHeight: 14,
		marginLeft: 15,
		fontWeight: '500',
		color: colors.gray,
	},
	productRow: {
		marginTop: 10,
		flexDirection: 'row',
		justifyContent: 'space-evenly',
	},
	flatBox: {
		marginHorizontal: 10,
	},
	flatList: {
		marginTop: 10,
		// marginHorizontal: 5,
		justifyContent: 'space-between',
	},
	flex1: {
		flex: 1,
	},
	ph20: {
		marginBottom: 10,
		// paddingHorizontal: 20,
	},
	mt10: {
		marginTop: 10,
	},
});
