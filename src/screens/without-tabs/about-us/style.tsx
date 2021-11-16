import { StyleSheet } from 'react-native';
import { windowWidth } from 'constants/sizes';
import { colors } from 'constants/colors';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 6,
		backgroundColor: colors.lightBlue,
	},
	inner: {
		width: windowWidth,
		// padding: 20,
		elevation: 5,
		backgroundColor: colors.white,
	},
	text: {
		width: 370,
		fontSize: 15,
		fontWeight: '600',
		textAlign: 'center',
		opacity: 0.9,
		marginVertical: 10,
		paddingHorizontal: 20,
	},
});
