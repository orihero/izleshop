import React, { useEffect, useState } from 'react';

import { useNavigation } from '@react-navigation/core';

import ProfileView from './view';
import { Routes } from 'constants/routes';
import { paddingVertical, windowWidth } from 'constants/sizes';
import { requests } from 'api/requests';
import { useDispatch } from 'react-redux';
import { setUserData } from 'store/slices/userSlice';

const ProfileController = () => {
	const navigation = useNavigation<any>();

	const onCreate = () => {
		navigation.navigate(Routes.WITHOUT_TABS, { screen: Routes.LOGIN });
	};

	const onPress = (route: string) => {
		navigation.navigate(Routes.WITHOUT_TABS, { screen: route });
	};
	let dispatch = useDispatch();
	let effect = async () => {
		try {
			let res = await requests.product.profile();
			dispatch(setProfileData(res.data));
		} catch (error) {
			alert ('Error in product page');
		}
	};
	useEffect(() => {
		effect();
	}, []);
	//TODO styles and move hooks to controller
	let itemWidth = windowWidth - 2 * paddingVertical;

	return <ProfileView onCreate={onCreate} onPress={onPress} />;
};

export default ProfileController;
