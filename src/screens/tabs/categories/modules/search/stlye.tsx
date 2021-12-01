import { Platform, StyleSheet } from 'react-native';
import { colors } from 'constants/colors';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.lightBlue,
	},
	text: {
		color: colors.gray,
		fontSize: 14,
		paddingLeft: 25,
		paddingRight: 30,
		borderRadius: 10,
		backgroundColor: colors.white,
	},
	mt20: {
		marginTop: 20,
	},
	flatList: {
		paddingRight: 20,
		paddingVertical: 10,
	},
});
