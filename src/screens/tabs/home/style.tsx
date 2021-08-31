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
		marginTop: paddingVertical,
		borderRadius: 7.5,
		overflow: 'hidden',
		marginHorizontal: 20,
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
