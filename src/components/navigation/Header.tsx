import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
	BackIcon,
	CartIcon,
	HeartIcon,
	SearchIcon,
} from '../../assets/icons/icons';
import { colors } from 'constants/colors';

export interface HeaderProps {
	title?: string;
	hasBorder?: boolean;
	hasCartIcon?: boolean;
}

const Header = ({ title, hasBorder, hasCartIcon }: HeaderProps) => {
	return (
		<View style={[styles.container, hasBorder ? styles.bbw : null]}>
			<BackIcon size={20} />
			<Text style={styles.title}>{title}</Text>
			{hasCartIcon ? (
				<View>
					<View style={styles.badge}>
						<Text style={styles.badgeText}>2</Text>
					</View>
					<CartIcon size={20} />
				</View>
			) : (
				<SearchIcon size={20} />
			)}
		</View>
	);
};

export default Header;

const styles = StyleSheet.create({
	container: {
		height: 60,
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: colors.white,
		width: '100%',
		paddingHorizontal: 20,
		alignItems: 'center',
	},
	bbw: {
		borderTopWidth: 1,
		borderBottomWidth: 1,
		borderColor: colors.gray4,
	},
	title: {
		fontSize: 18,
		color: colors.black,
	},
	badge: {
		width: 15,
		height: 15,
		position: 'absolute',
		right: -8,
		top: -8,
		zIndex: 1,
		padding: 3,
		borderRadius: 10,
		backgroundColor: colors.red,
	},
	badgeText: {
		fontSize: 8,
		textAlign: 'center',
		textAlignVertical: 'center',
		lineHeight: 10,
		fontWeight: '700',
		color: colors.white,
	},
});
