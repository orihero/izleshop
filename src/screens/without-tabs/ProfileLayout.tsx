import React, { ReactChild } from 'react';

import { StyleSheet, View, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Header from 'components/navigation/Header';

import { colors } from 'constants/colors';
import { SearchIcon } from 'assets/icons/icons';

const avatarImg = require('assets/images/user.png');

interface IProfileLayoutProps {
	headerTitle: string;
	headerRightIcon?: ReactChild;
	children: ReactChild;
	headerIcon?: string;
}

const ProfileLayout = ({
	headerTitle,
	headerRightIcon,
	children,
	headerIcon = '',
}: IProfileLayoutProps) => {
	const insets = useSafeAreaInsets();
	let rightEdge = () => <View />;

	if (headerIcon === 'search') {
		rightEdge = () => <SearchIcon size={20} />;
	}

	if (headerIcon === 'avatar') {
		rightEdge = () => <Image source={avatarImg} style={styles.avatar} />;
	}

	return (
		<View style={[styles.container, { paddingTop: insets.top }]}>
			<Header
				title={headerTitle}
				rightEdge={rightEdge}
				hideRightIcon={!headerRightIcon}
			/>
			{children}
		</View>
	);
};

export default ProfileLayout;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.lightGray,
	},
	avatar: {
		width: 40,
		height: 40,
	},
});
