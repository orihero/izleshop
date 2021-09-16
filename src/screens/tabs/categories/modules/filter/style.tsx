import { StyleSheet } from 'react-native';
import { colors } from 'constants/colors';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.lightGray,
	},
	title: {
		fontSize: 14,
		marginTop: 15,
		marginLeft: 20,
		lineHeight: 17,
		fontWeight: '600',
	},
	range: {
		marginTop: 20,
		paddingVertical: 10,
		paddingHorizontal: 20,
		backgroundColor: colors.white,
	},
	box: {
		marginTop: 20,
		marginHorizontal: 20,
		backgroundColor: colors.white,
	},
	row: {
		padding: 15,
		flexDirection: 'row',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderBottomColor: colors.lightGray,
		justifyContent: 'space-between',
	},
	text: {
		fontSize: 14,
		lineHeight: 17,
		fontWeight: '500',
	},
	circle: {
		width: 15,
		height: 15,
		borderWidth: 1,
		borderRadius: 10,
	},
	square: {
		width: 20,
		height: 20,
		borderWidth: 1,
		borderRadius: 4,
		borderColor: colors.gray2,
	},
	buttonRow: {
		marginTop: 30,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-evenly',
	},
	mb20: {
		marginBottom: 20,
	},
});
