import { StyleSheet } from 'react-native';
import { colors } from 'constants/colors';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		alignItems: 'center',
		backgroundColor: colors.lightBlue,
	},
	imgBox: {
		top: 140,
		width: 210,
		height: 215,
		elevation: 4,
		borderWidth: 1,
		alignItems: 'center',
		justifyContent: 'center',
		shadowColor: colors.gray5,
		borderColor: colors.leghtGrey,
	},
	img: {
		width: 200,
		height: 200,
	},
	versionBox: {
		top: 160,
		alignItems: 'center',
		justifyContent: 'center',
	},
	version: {
		fontSize: 25,
		color: colors.barGray,
	},
});
