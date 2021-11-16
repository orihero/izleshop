import { StyleSheet } from 'react-native';
import { colors } from 'constants/colors';

export const styles = StyleSheet.create({
	container: {
		// marginHorizontal: 5,
		backgroundColor: colors.lightBlue,
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
		// marginBottom: -5,
		marginLeft: 5,
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
		marginTop: 15,
	},
	mb80: {
		marginBottom: 80,
	},
	box: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	ph20: {
		left: 0,
		right: 0,
		padding: 0,
		margin: 0,
		justifyContent: 'center',
	},
	mt10: {
		// right: 20,
		marginTop: 5,
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
		left: 0,
		right: 0
		// right: 18,
		// marginHorizontal: 20,
		// marginHorizontal: 30,
	},
	mt25: {
	},
	text4: {
		fontSize: 16,
		// marginLeft: 4,
		lineHeight: 20,
		fontWeight: '400',
		color: 'rgba(0,0,0,.8)',
		marginTop: 8
	},
	mt19: {
		marginTop: 10,
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
