import { StyleSheet } from 'react-native';
import { windowWidth } from 'constants/sizes';
import { colors } from 'constants/colors';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 6,
		backgroundColor: colors.lightBlue,
	},
	inner: {
		width: windowWidth,
		padding: 20,
		backgroundColor: colors.white,
		elevation: 5
	}
});
