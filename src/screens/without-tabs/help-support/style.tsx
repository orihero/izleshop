import { StyleSheet } from 'react-native';
import { colors } from 'constants/colors';
import { windowWidth } from 'constants/sizes';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.lightBlue,
	},
	text: {
		fontSize: 14,
		lineHeight: 17,
		fontWeight: '400',
	},
	mt20: {
		marginTop: 20,
	},
	box: {
		marginTop: 10,
		width: windowWidth - 40,
		marginHorizontal: 20,
		padding: 20,
		elevation: 5,
		alignItems: 'center',
		backgroundColor: colors.white,
	},
	boxs: {
		width: 250,
		justifyContent: 'flex-start',
	},
	iconBox: {
		paddingTop: 10,
		borderBottomWidth: 1,
		borderColor: colors.gray4,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	number: {
		textDecorationLine: 'underline',
		textAlign: 'center',
	},
});
