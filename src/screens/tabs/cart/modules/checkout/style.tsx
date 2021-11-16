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
		// marginLeft: 10,
		marginTop: 20,
	},
	mb80: {
		marginBottom: 80,
	},
	box: {
		alignItems: 'center',
		justifyContent: 'center',
		marginHorizontal: 20,
	},
	ph20: {
		left: 0,
		right: 0,
		padding: 0,
		margin: 0,
		marginHorizontal: 100,
		alignItems: 'center',
		justifyContent: 'center',
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
		// right: 18,
		// marginHorizontal: 20,
		// marginHorizontal: 30,
	},
	mt25: {
		marginTop: 15,
		marginLeft: 16,
		marginHorizontal: 25,
	},
	text4: {
		fontSize: 16,
		marginTop: 3,
		marginBottom: -25,
		// marginLeft: 4,
		lineHeight: 20,
		fontWeight: '400',
		color: 'rgba(0,0,0,.8)',
	},
	mt19: {
		width: 335,
		right: 8,
		marginTop: 10,
		marginLeft: 10,
	},
	text5: {
		marginTop: 4,
		marginBottom: -3,
		fontSize: 16,
		lineHeight: 20,
		fontWeight: '400',
		color: 'rgba(0,0,0,.8)',
	},
});
