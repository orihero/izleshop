import { StyleSheet } from 'react-native';
import { colors } from 'constants/colors';

export const styles = StyleSheet.create({
    container: {
		flex: 1,
		padding: 20,
		backgroundColor: colors.lightBlue,

	},
	text: {
		fontSize: 25,
		lineHeight: 30,
		fontWeight: 'bold',
        marginLeft: 10,
		marginTop: 35,
        marginBottom: 25
	},
    input: {
        marginRight: 30,
        alignItems: 'center'
    },
	buttom: {
		marginTop: 10,
		marginRight: 8,
		alignItems: 'center'
	},
	izle: {
		fontSize: 144,
		marginTop: 250,
		marginLeft: 40,
		opacity: 0.4,
		color: colors.darkBlue,
		alignItems: 'center',
		justifyContent: 'center'
	}
})
