import { StyleSheet } from 'react-native';
import { colors } from 'constants/colors';
import { paddingVertical } from 'constants/sizes';

export const styles = StyleSheet.create({
	itemContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	container: {
		flex: 1,
		backgroundColor: colors.blue,
	},
	boxOne: {
		width: 415,
		height: 500,
		justifyContent: 'center',
		alignItems: 'center',
	},
	img: {
		width: 350,
		height: 450,
		resizeMode: 'contain',
	},
	boxTwo: {
		height: 325,
		alignItems: 'center',
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		backgroundColor: colors.white,
		flex: 1,
	},
	textOne: {
		width: 256,
		marginTop: 22,
		fontSize: 24,
		fontWeight: 'bold',
		fontFamily: 'Lato',
		lineHeight: 29,
		textAlign: 'center',
		color: colors.lightblacks,
	},
	textTwo: {
		width: 180,
		marginTop: 20,
		fontSize: 18,
		lineHeight: 22,
		fontWeight: '500',
		fontFamily: 'Lato',
		textAlign: 'center',
		color: colors.gray5,
	},
	button: {
		marginTop: 50,
		width: 200,
		height: 40,
		borderRadius: 20,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.blue,
	},
	buttonText: {
		fontSize: 18,
		fontWeight: '500',
		fontFamily: 'Lato',
		lineHeight: 22,
		color: colors.white,
	},
	pdotcont: {
		paddingHorizontal: 0,
		marginHorizontal: 2.5,
	},
	pdot: {
		width: 10,
		height: 10,
		borderRadius: 5,
		paddingHorizontal: 2,
		backgroundColor: colors.blue,
	},
});
