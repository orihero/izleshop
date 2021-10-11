import { StyleSheet } from 'react-native';
import { colors } from 'constants/colors';
import { windowWidth } from 'constants/sizes';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.lightBlue,
	},
	welcomeText: {
		marginTop: 25,
		fontSize: 20,
		fontWeight: 'bold',
		alignSelf: 'center',
		color: colors.black,
	},
	avatarContainer: {
		// flexDirection: 'row',
		marginTop: 25,
		flexShrink: 1,
		alignItems: 'center',
		marginBottom: 30,
	},
	avatar: {
		width: 60,
		height: 60,
		marginHorizontal: 20,
	},
	loginPrompt: {
		marginTop: 20,
		fontSize: 12,
		color: colors.lightBlack,
		marginHorizontal: 40,
	},
	profileSettings: {
		fontSize: 20,
		color: colors.black,
		marginVertical: 25,
		marginHorizontal: 20,
	},
	news: {
		width: 350,
		height: 170,
		marginLeft: 20,
		marginTop: 22,
		marginBottom: 15,
		// justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.white,
	},
	component: {
		marginTop: 7,
		marginBottom: 9,
		width: 330,
		height: 25,
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'row',
	},
	textOne: {
		fontSize: 14,
		fontWeight: 'bold',
		justifyContent: 'space-between',
	},
	viewAll: {
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
	},
	textView: {
		marginTop: -2,
		fontSize: 8,
		fontFamily: 'Lato',
		fontWeight: 'bold',
	},
});
