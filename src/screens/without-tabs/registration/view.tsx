import React, { useState } from 'react';
import { Text, View } from 'react-native';
import DefaultButton from 'components/general/DefaultButton';
import DefaultInput from 'components/general/DefaultInput';
import Pressable from 'components/general/Pressable';

import { styles } from './stlye';
import { strings } from 'locales/locales';
import { useNavigation } from '@react-navigation/core';
import { Routes } from 'constants/routes';
import { useAppSelector } from 'utils/hooks';
import { useDispatch } from 'react-redux';
import {
	selectUser,
	setUserLanguage,
	setUserName,
} from 'store/slices/userSlice';
import { requests } from 'api/requests';

export const languagesList = ['Русский', 'O’zbekcha', 'English'];

interface ILanguageProps {
	language: number;
}

const RegistrationView = ({ language }: ILanguageProps) => {
	let navigation = useNavigation();
	let user = useAppSelector(selectUser);
	let dispatch = useDispatch();
	let setName = (name: string) => {
		dispatch(setUserName(name));
	};
	let setLanguage = (language: number) => {
		dispatch(setUserLanguage(language));
	};
	const [loading, setLoading] = useState(false);
	let onNextPress = async () => {
		let res = await requests.auth.editProfile(user?.userData?.id, {
			...user.userData,
			name: user.userData?.first_name,
		});

		//@ts-ignore
		navigation.navigate(Routes.TABS);
	};

	return (
		<View style={styles.container}>
			<View style={styles.top}>
				<View style={styles.mt20}>
					<View style={styles.mt12}>
						<Text style={styles.textConfirmation}>
							{strings.registration}
						</Text>
						<DefaultInput
							placeholder={'ФИО пользователя'}
							value={user.userData?.first_name}
							onChange={setName}
						/>
					</View>
				</View>
				<Text style={styles.textLanguage}>
					{strings.systemLanguage}
				</Text>
				<View style={styles.lbox}>
					{languagesList.map((e, i) => (
						<Pressable key={i} onPress={() => setLanguage(i)}>
							<View style={styles.lrow}>
								<Text
									style={[
										styles.ltext,
										i === user.languageIndex
											? styles.cblue
											: styles.cblack,
									]}
								>
									{e}
								</Text>
								<View
									style={[
										styles.lsquare,
										i === user.languageIndex
											? styles.bblue
											: styles.bblack,
									]}
								>
									{i === user.languageIndex && (
										<View style={styles.circle} />
									)}
								</View>
							</View>
						</Pressable>
					))}
				</View>
				<View style={styles.center}>
					<DefaultButton
						text={strings.toComeIn}
						marginDisabled
						onPress={onNextPress}
						loading={loading}
					/>
				</View>
				<View style={styles.bottom}>
					<Text style={styles.text3}>izle</Text>
				</View>
			</View>
		</View>
	);
};

export default RegistrationView;
