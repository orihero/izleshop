import { StyleSheet } from 'react-native';
import { colors } from 'constants/colors';
import { windowWidth } from 'constants/sizes';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.lightBlue
	},
	box: {
		width: windowWidth,
		padding: 20,
		elevation: 5,
		backgroundColor: colors.white
	},
	text: {
		fontSize: 12,
		fontWeight: '700',
		lineHeight: 20
	}
});
