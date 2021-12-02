import { StyleSheet } from 'react-native';
import { colors } from 'constants/colors';
import { windowHeight, windowWidth } from 'constants/sizes';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.lightBlue,
	},
	header: {
		padding: 20,
		elevation: 7,
		marginBottom: 7,
		borderTopWidth: 2,
		width: windowWidth,
		borderColor: colors.leghtGrey,
		backgroundColor: colors.white,
	},
	mt10: {},
	box: {
		height: 60,
		elevation: 7,
		marginBottom: 8,
		width: windowWidth,
		alignItems: 'center',
		flexDirection: 'row',
		paddingHorizontal: 15,
		justifyContent: 'space-evenly',
		backgroundColor: colors.white,
	},
	text: {
		fontSize: 16,
		fontWeight: '400',
	},
	rating: {
		paddingBottom: 10,
	},

	input: {
		height: 130,
		elevation: 5,
		width: windowWidth,
		backgroundColor: colors.white,
	},
	textBox: {
		flexDirection: 'row',
		textAlign: 'center',
		paddingLeft: 16,
		paddingTop: 10,
	},
	help: {
		fontSize: 15,
		lineHeight: 19,
		paddingRight: 3,
		fontWeight: '700',
		paddingBottom: 30,
	},
	size: {
		fontSize: 13,
		paddingTop: 1,
		color: colors.leghtGrey1,
	},
	textInput: {
		width: 320,
		color: colors.black,
		borderBottomWidth: 1,
		marginHorizontal: 40,
	},
	button: {
		marginTop: 220,
		marginVertical: 20,
		marginHorizontal: 10,
		justifyContent: 'flex-end',
	},
	picker: {
		width: windowWidth,
		height: 140,
		marginTop: 10,
		elevation: 5,
		backgroundColor: colors.white,
	},
	path: {
		borderWidth: 1,
	},
	contain: {
		flex: 1,
		padding: 10,
		backgroundColor: '#fff',
		alignItems: 'center',
	},
	titleText: {
		fontSize: 22,
		fontWeight: 'bold',
		textAlign: 'center',
		paddingVertical: 20,
	},
	textStyle: {
		padding: 10,
		borderWidth: 1,
		color: 'black',
		textAlign: 'center',
	},
	buttonStyle: {
		alignItems: 'center',
		backgroundColor: '#DDDDDD',
		padding: 5,
		marginVertical: 10,
		width: 250,
	},
	imageStyle: {
		width: 200,
		height: 200,
		margin: 5,
	},
	screen: {
		marginTop: -20,
		backgroundColor: colors.white,
	},
});
