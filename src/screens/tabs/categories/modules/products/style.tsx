import { StyleSheet } from 'react-native';
import { colors } from 'constants/colors';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.lightGray,
	},
	top: {
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
	flex1: {
		flex: 1,
	},
	ph20: {
		paddingHorizontal: 20,
	},
	text1: {
		fontSize: 12,
		lineHeight: 14,
		marginLeft: 15,
		fontWeight: '500',
		color: colors.gray,
	},
});
