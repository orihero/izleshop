import { StyleSheet } from 'react-native';
import { windowWidth } from 'constants/sizes';
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
		backgroundColor: colors.white,
	},
	text: {
		width: 370,
		fontSize: 15,
		padding: 20,
		textAlign: 'left',
		paddingHorizontal: 20,
	},
});
