import { StyleSheet } from 'react-native';
import { colors } from 'constants/colors';

export const styles = StyleSheet.create({
    container: {
		flex: 1,
		padding: 20,
		backgroundColor: colors.lightBlue
	},
	box: {
		width: 360,
		height: 215,
		top: 10,
		marginBottom: 10,
		marginHorizontal: 8,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.white
	},
	img: {
		width: 275,
		height: 150,
	}
})