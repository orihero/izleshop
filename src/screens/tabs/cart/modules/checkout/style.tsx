import { StyleSheet } from 'react-native';
import { colors } from 'constants/colors';

export const styles = StyleSheet.create({
	container: {
		// backgroundColor: colors.whit,
	},
	mapContainer: {
		height: 190,
		borderRadius: 10,
		overflow: 'hidden',
		backgroundColor: 'aqua',
	},
	map: {
		flex: 1,
	},
	text1: {
		marginLeft: 10,
		fontSize: 16,
		lineHeight: 20,
		fontWeight: '400',
		color: 'rgba(0,0,0,.8)',
	},
	text2: {
		fontSize: 14,
		lineHeight: 18,
		fontWeight: '600',
	},
	text3: {
		fontSize: 14,
		lineHeight: 18,
		fontWeight: '400',
		color: colors.gray2,
	},
	mt12: {
		marginTop: 12,
	},
	mt20: {
		marginTop: 20,
	},
	mb80: {
		marginBottom: 80,
	},
	ph20: {
		fontSize: 16,
		lineHeight: 20,
		fontWeight: '400',
		paddingHorizontal: 25,
		color: 'rgba(0,0,0,.8)',
	},
	mt10: {
		right: 20,
		marginTop: 10,
		alignItems: 'center',
	},
	mt1: {
		right: 20,
		marginTop: 10,
		marginHorizontal: 20,
		alignItems: 'center',
	},
	mt21: {
		marginTop: 10,
		right: 20,
	},
	mt25: {
		marginTop: 10,
		marginLeft: 10,
	},
	mt19: {
		width: 335,
		marginTop: 10,
		marginLeft: 10,
	},
});
