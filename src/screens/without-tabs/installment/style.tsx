import { Dimensions, StyleSheet } from 'react-native';
import { colors } from 'constants/colors';

const { width } = Dimensions.get('screen');

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.lightBlue,
	},
	installment: {
		marginTop: 45,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		fontSize: 60,
		marginRight: 24,
		fontWeight: '500',
		color: colors.gray3,
	},
	installments: {
		fontSize: 16,
		lineHeight: 20,
		color: colors.gray3,
	},
	textStyle: {
		fontSize: 16,
		fontWeight: '500',
		color: colors.blue,
	},
	value: {
		flex: 1,
		paddingLeft: 7,
		paddingRight: 7,
		width: width - 80,
		flexDirection: 'row',
		borderBottomWidth: 1,
		borderBottomLeftRadius: 7,
		borderBottomRightRadius: 7,
		borderBottomColor: colors.gray4,
		justifyContent: 'space-between',
	},
	dropdownStyle: {
		padding: 17,
		margin: 20,
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
});
