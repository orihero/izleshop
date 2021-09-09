import { StyleSheet } from 'react-native';
import { colors } from 'constants/colors';
import { paddingVertical } from 'constants/sizes';

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.lightBlue,
		// paddingHorizontal: 20,
		paddingVertical: 10,
	},
	carousel: {
		borderRadius: 7.5,
		overflow: 'hidden',
		marginHorizontal: 20,
		marginTop: paddingVertical,
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
	text: {
		color: colors.black,
		fontSize: 18,
		marginHorizontal: 20,
	},
	flatList: {
		paddingRight: 20,
		paddingVertical: 20,
	},
});

export default styles;
