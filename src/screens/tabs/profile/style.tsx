import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/colors';
import { windowWidth } from '../../../constants/sizes';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.lightBlue,
	},
	welcomeText: {
		fontSize: 20,
		color: colors.black,
		alignSelf: 'center',
		marginTop: 25,
	},
	avatarContainer: {
		flexDirection: 'row',
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
		color: colors.lightBlack,
		fontSize: 12,
		width: windowWidth - 120,
	},
	profileSettings: {
		fontSize: 20,
		color: colors.black,
		marginVertical: 25,
		marginHorizontal: 20,
	},
});
