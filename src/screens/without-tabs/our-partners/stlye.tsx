import { StyleSheet } from 'react-native';
import { windowWidth } from 'constants/sizes';
import { colors } from 'constants/colors';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 6,
	},
	inner: {
		width: windowWidth,
		padding: 20,
		elevation: 6,
		alignItems: 'center',
		backgroundColor: colors.white,
	},
	imgOne: {
		width: 291,
		height: 119,
		resizeMode: 'contain',
	},
	textOne: {
		fontSize: 14,
		lineHeight: 19,
		paddingTop: 10,
		paddingBottom: 10,
		fontWeight: 'bold',
	},
	box: {
		width: windowWidth,
		padding: 20,
		elevation: 5,
		alignItems: 'center',
		backgroundColor: colors.white,
	},
	text: {
		fontSize: 12,
		fontWeight: '400',
		lineHeight: 19,
	},
});
