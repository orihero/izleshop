import React from 'react';

import { useNavigation } from '@react-navigation/core';

import ProfileView from './view';
import { Routes } from 'constants/routes';

const ProfileController = () => {
	const navigation = useNavigation<any>();

	const onCreate = () => {
		navigation.navigate(Routes.WITHOUT_TABS, { screen: Routes.AUTHORIZATION });
	};

	const onPress = (route: string) => {
		navigation.navigate(Routes.WITHOUT_TABS, { screen: route });
	};

	return <ProfileView onCreate={onCreate} onPress={onPress} />;
};

export default ProfileController;
