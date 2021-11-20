import { Dimensions, StyleSheet } from 'react-native';
import { colors } from 'constants/colors';
import { windowWidth } from 'constants/sizes';

const { width } = Dimensions.get('screen');

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.lightBlue,
	},
	installment: {
		marginTop: 45,
		marginHorizontal: 20,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	installmen: {
		marginTop: 10,
		paddingTop: 5,
		borderTopWidth: 1,
		alignItems: 'center',
		flexDirection: 'row',
		marginHorizontal: 20,
		borderColor: colors.gray3,
		justifyContent: 'space-between',
	},
	name: {
		fontSize: 15,
	},
	text: {
		fontSize: 15,
		// marginRight: 24,
		opacity: 0.7,
		fontWeight: 'bold',
		paddingHorizontal: 5,
		color: colors.black,
	},
	installments: {
		opacity: 0.7,
		marginHorizontal: 5,
		fontSize: 16,
		lineHeight: 20,
		fontWeight: 'bold',
		color: colors.black,
	},
	textStyle: {
		fontSize: 16,
		fontWeight: '500',
		color: colors.blue,
	},
	boxOne: {
		flex: 1,
		marginVertical: 30,
		flexDirection: 'column',
		justifyContent: 'space-between',
	},
	value: {
		flex: 1,
		paddingLeft: 7,
		paddingRight: 7,
		width: width - 90,
		flexDirection: 'row',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderBottomLeftRadius: 7,
		borderBottomRightRadius: 7,
		borderBottomColor: colors.gray4,
		justifyContent: 'space-between',
	},
	dropdownStyle: {
		width: windowWidth - 60,
		padding: 15,
		marginTop: 40,
		marginBottom: 40,
		marginHorizontal: 30,
		borderWidth: 1,
		borderRadius: 9,
		borderColor: colors.blue,
	},
	valueText: {
		fontSize: 18,
		paddingTop: 8,
	},
	valueTexts: {
		paddingTop: 13,
		fontSize: 12,
		fontWeight: '500',
		color: colors.gray3,
	},
	boxTwo: {
		// marginTop: 20,
		marginHorizontal: 20,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	textTwo: {
		fontSize: 16,
		marginBottom: 10,
		opacity: 0.8,
		fontWeight: '600',
		alignItems: 'center',
	},
	button: {},
});
