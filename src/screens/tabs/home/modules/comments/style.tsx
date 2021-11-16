import { StyleSheet } from 'react-native';
import { colors } from 'constants/colors';

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	boxOne: {
		flexDirection: 'row',
	},
	userImage: {
		width: 50,
		height: 50,
	},
	textBox: {
		marginLeft: 10,
	},
	userName: {
		// justifyContent: 'space-between',
		flexDirection: 'row',
	},
	flag: {
		margin: 5,
		width: 30,
		height: 15,
	},
	rating: {
		marginLeft: 100,
		marginHorizontal: 20,
	},
	data: {
		marginVertical: 10,
		flexDirection: 'column',
	},
	dataText: {
		paddingTop: 5,
		color: colors.gray,
	},
	lorem: {
		width: 315,
		fontSize: 15,
		fontWeight: '600',
		paddingTop: 10,
	},
	img: {
		flexDirection: 'row',
	},
	sos: {
		marginHorizontal: 5,
		width: 110,
		height: 100,
	},
	boxTwo: {
		marginTop: 20,
		marginVertical: 10,
		flexDirection: 'row',
	},
});

export default styles;
