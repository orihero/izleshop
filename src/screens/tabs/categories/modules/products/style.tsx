import { StyleSheet } from 'react-native';
import { colors } from 'constants/colors';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.lightGray,
	},
	top: {
		paddingHorizontal: 20,
		paddingVertical: 10,
		flexDirection: 'row',
		alignItems: 'center',
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
	flex1: {
		flex: 1,
	},
	ph20: {
		// paddingHorizontal: 20,
	},
	mt10: {
		marginTop: 10,
	},
});
