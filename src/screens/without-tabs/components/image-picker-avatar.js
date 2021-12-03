import React from 'react';
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	Image,
	View,
	ImageBackground,
} from 'react-native';

import { images } from 'assets/images';
import { colors } from 'constants/colors';

export function ImagePickerAvatar({ uri, onPress }) {
	return (
		<View style={styles.avatar}>
			<Image
				style={styles.avatarImage}
				source={uri ? { uri } : images.avatar}
			/>
			<TouchableOpacity style={styles.addButton} onPress={onPress}>
				<Image style={styles.addButtonIcon} source={images.addButton} />
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	imageBackground: {
		flex: 1,
	},
	avatar: {
		resizeMode: 'contain',
		paddingHorizontal: 20,
		backgroundColor: colors.white,
	},
	avatarImage: {
		height: 80,
		width: 80,
		borderColor: '#ffffff',

		overflow: 'hidden',
		borderWidth: 1,
		borderRadius: 260 / 2,
	},
	addButton: {
		height: 35,
		width: 35,
		backgroundColor: '#f2f2fC',
		borderRadius: 50,
		position: 'absolute',
		top: 55,
		left: 75,
	},
	addButtonIcon: {
		height: 35,
		width: 35,
		alignSelf: 'center',
	},
	usernameText: {
		fontSize: 24,
		fontWeight: '700',
		color: '#ffffff',
		marginTop: 12,
	},
});
