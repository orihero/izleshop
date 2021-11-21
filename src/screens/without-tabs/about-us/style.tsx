import { StyleSheet } from 'react-native';
import { windowHeight, windowWidth } from 'constants/sizes';
import { colors } from 'constants/colors';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 6,
		padding: 5,
		backgroundColor: colors.lightBlue,
	},
	img: {
		width: windowWidth - 30,
		marginHorizontal: 10,
		marginBottom: 5,
		height: 100,
	},
	inner: {
		elevation: 5,
		width: windowWidth - 30,
		alignItems: 'center',
		marginHorizontal: 10,
		paddingHorizontal: 20,
		backgroundColor: colors.white,
	},
	text: {
		width: windowWidth - 40,
		fontSize: 15,
		padding: 20,
		alignItems: 'center',
		marginHorizontal: 20,
		paddingHorizontal: 20,
	},
});
