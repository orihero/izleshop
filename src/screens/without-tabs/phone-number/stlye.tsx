import { StyleSheet } from 'react-native';
import { colors } from 'constants/colors';

export const styles = StyleSheet.create({
    container: {
		flex: 1,
		padding: 20,
		backgroundColor: colors.lightBlue,
	},
	phoneInput: {
		width: 342,
		paddingRight: 25,
		alignItems: 'center',
	}
})