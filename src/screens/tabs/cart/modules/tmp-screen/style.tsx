import { StyleSheet } from 'react-native';
import { colors } from 'constants/colors';
import { windowWidth } from 'constants/sizes';

export const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.lightBlue,
	},
	top: {
		marginTop: 28,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		marginHorizontal: 20,
		backgroundColor: colors.white,
	},
	topChild: {
		flexDirection: 'row',
		paddingHorizontal: 12,
		paddingVertical: 14,
		borderBottomWidth: 1,
		borderColor: colors.lightGray,
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	text1: {
		fontWeight: '500',
		fontSize: 18,
		lineHeight: 21,
	},
	text2: {
		fontWeight: '500',
		fontSize: 14,
		lineHeight: 17,
	},
	text3: {
		fontWeight: '500',
		fontSize: 16,
		lineHeight: 19,
	},
	text4: {
		fontWeight: '700',
		fontSize: 14,
		lineHeight: 17,
	},
	text5: {
		fontWeight: '700',
		fontSize: 16,
		lineHeight: 19,
	},
	titleBox: {
		marginLeft: 20,
		marginTop: 20,
		marginBottom: 10,
	},
	rowItemsCenter: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	payBox: {
		marginTop: 10,
		padding: 12,
		marginHorizontal: 20,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: colors.white,
	},
	text6: {
		fontSize: 16,
		lineHeight: 20,
		fontWeight: '600',
	},
	inbox: {
		marginHorizontal: 20,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	inboxChild: {
		width: (windowWidth - 52) / 2,
		height: 70,
		backgroundColor: colors.white,
		borderRadius: 6,
	},
	text7: {
		fontSize: 18,
		lineHeight: 21,
		fontWeight: '500',
	},
	bottom: {
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 20,
	},
	tmpBox1: {
		width: 15,
		height: 15,
	},
	tmpBox2: {
		width: 30,
		height: 25,
	},
});
