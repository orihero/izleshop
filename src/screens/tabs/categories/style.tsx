import { StyleSheet } from 'react-native';
import { colors } from 'constants/colors';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.lightBlue,
		paddingVertical: 10,
	},
	tabStyle: {
		borderWidth: 0,
		shadowOpacity: 0,
		backgroundColor: colors.lightBlue,
	},
	indicatorStyle: {
		left: '10%',
		width: '30%',
		bottom: '15%',
		backgroundColor: colors.black,
	},
	labelStyle: {
		color: colors.black,
		textTransform: 'capitalize',
	},
});
