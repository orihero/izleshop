import { Dimensions, StyleSheet } from 'react-native';
import { colors } from 'constants/colors';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.lightBlue,
	},
	box: {
		top: 15,
		width: Dimensions.get('window').width - 50,
		height: 215,
		marginBottom: 10,
		marginHorizontal: 25,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.white,
	},
	img: {
		resizeMode: 'contain',
		width: 330,
		height: 200,
	},
});
