import { StyleSheet } from 'react-native';
import { colors } from 'constants/colors';
import { windowWidth } from 'constants/sizes';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.lightBlue,
	},
	box: {
		top: 15,
		width: 360,
		// height: 420,
		marginBottom: 10,
		marginHorizontal: 25,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.white,
	},
	img: {
		width: 275,
		height: 150,
		marginTop: 10,
		marginVertical: 10,
	},
	text: {
		width: windowWidth - 50,
		fontSize: 15,
		lineHeight: 17,
		paddingHorizontal: 25,
		marginVertical: 20,
	},
	textOne: {
		fontSize: 18,
		lineHeight: 17,
		marginVertical: 15,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	render: {
		width: windowWidth - 70,
		marginBottom: 10,
		color: colors.black,
		paddingHorizontal: 15,
	},
});
