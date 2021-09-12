import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/core';
import { ProfileStackParamList } from 'routes/tabs/ProfileStack';
import ProfileView from './view';
import { Routes } from 'constants/routes';

type ProfileScreenNavigationProp = NativeStackNavigationProp<
	ProfileStackParamList,
	Routes.PROFILE
>;

type ProfileScreenProps = {
	navigation: ProfileScreenNavigationProp;
};

const ProfileController = ({}: ProfileScreenProps) => {
	const navigation = useNavigation<ProfileScreenNavigationProp>();

	const onCreate = () => {
		navigation.navigate(Routes.AUTH, { cangoBack: true });
	};

	return <ProfileView onCreate={onCreate} />;
};

export default ProfileController;
