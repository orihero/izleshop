import { StyleSheet } from 'react-native';
import { colors } from 'constants/colors';
import { windowWidth } from 'constants/sizes';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
	},
	boxOne: {
		// width: windowWidth - 50,
		padding: 10,
		marginBottom: 6,
		elevation: 5,
		marginHorizontal: 5,
		paddingHorizontal: 10,
		flexDirection: 'row',
		backgroundColor: colors.white,
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
		alignItems: 'center',
		flexDirection: 'row',
	},
	flag: {
		margin: 5,
		width: 30,
		height: 15,
	},
	rating: {
		alignItems: 'center',
		marginHorizontal: 50,
	},
	data: {
		marginVertical: 10,
		// fontSize: 12,
		flexDirection: 'column',
	},
	dataText: {
		paddingTop: 5,
		color: colors.gray,
	},
	lorem: {
		width: windowWidth - 115,
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
		marginTop: 10,
		padding: 10,
		elevation: 5,
		paddingHorizontal: 10,
		marginHorizontal: 5,
		marginVertical: 10,
		flexDirection: 'row',
		backgroundColor: colors.white,
	},
});

export default styles;
