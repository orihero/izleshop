import { StyleSheet } from 'react-native';
import { colors } from 'constants/colors';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 20,
	},
	content: {
		marginTop: 10,
	},
	text: {
		fontSize: 12,
		lineHeight: 14,
		textAlign: 'center',
		color: colors.darkGray2,
	},
});
