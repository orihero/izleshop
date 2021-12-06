import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import ProfileLayout from '../ProfileLayout';
import { styles } from './stlye';
import { strings } from 'locales/locales';
import DefaultInput from 'components/general/DefaultInput';
import { useNavigation } from '@react-navigation/core';
import { useAppSelector } from 'utils/hooks';
import { useDispatch } from 'react-redux';
import { selectUser, setUserName } from 'store/slices/userSlice';
import DefaultButton from 'components/general/DefaultButton';
import { Routes } from 'constants/routes';
import { requests } from 'api/requests';

interface ILanguageProps {
	setLanguage: (e: number) => void;
	arr: string[];
	onPress: () => {};
}

const NamePageView = ({}: ILanguageProps) => {
	let navigation = useNavigation();
	let user = useAppSelector(selectUser);
	let dispatch = useDispatch();
	// let [username, setUsername] = useState(user.userData?.first_name);
	let setName = (name: string) => {
		dispatch(setUserName(name));
	};
	const [loading, setLoading] = useState(false);

	let onNextPress = async () => {
		//@ts-ignore
		setLoading(true);
		try {
			//TODO edit profile
			let res = await requests.auth.editProfile(user?.userData?.id, {
				...user.userData,
				name: user.userData?.first_name,
				phne: user.userData?.phone,
			});
		} catch (error) {
		} finally {
			setLoading(false);
		}
		navigation.navigate(Routes.SETTINGS);
	};
	return (
		<ProfileLayout headerTitle={strings.setting || ''}>
			<View style={styles.container}>
				<Text style={styles.text}>{strings.fio}</Text>
				<View style={styles.input}>
					<DefaultInput
						placeholder={strings.name}
						value={user.userData?.first_name}
						onChange={setName}
					/>
				</View>
				<View style={styles.center}>
					<DefaultButton
						text={strings.save}
						marginDisabled
						onPress={onNextPress}
						loading={loading}
					/>
				</View>
				<Text style={styles.izle}>izle</Text>
			</View>
		</ProfileLayout>
	);
};

export default NamePageView;
