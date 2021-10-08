import React, { useState } from 'react';
import { Text, View, } from 'react-native';
import DefaultButton from 'components/general/DefaultButton';
import DefaultInput from 'components/general/DefaultInput';
import Pressable from 'components/general/Pressable';


import { styles } from './stlye';
import { strings } from 'locales/locales';
import { useNavigation } from '@react-navigation/core';
import { Routes } from 'constants/routes';
import { useAppSelector } from 'utils/hooks';
import { useDispatch } from 'react-redux';
import { selectUser, setUserName } from 'store/slices/userSlice';


interface ILanguageProps {
	language: number;
	setLanguage: (e: number) => void;
	arr: string[];
	onPress: () => {};
}

const VerificationView = ({
	
}: ILanguageProps) => {
	let navigation = useNavigation();
	let user = useAppSelector(selectUser);
	let dispatch = useDispatch()
	let setName = (name: string) => { dispatch(setUserName(name)) }
	let onNextPress = () => {
		navigation.navigate(Routes.REGISTER);
	};
	const [language, setLanguage] = useState(0)
	const arr = ['Русский', 'O’zbekcha', 'English'];

	const [phone, setPhone] = useState('');
	return (
		<View style={styles.container}>
			<View style={styles.top}>
				<View style={styles.mt20}>
					<View style={styles.mt12}>
						<Text style={styles.textConfirmation}>{strings.registration}</Text>
						<DefaultInput placeholder={'ФИО пользователя'} value={user.name} onChange={setName} />
					</View>
				</View>
				<Text style={styles.textLanguage}>{strings.systemLanguage}</Text>
				<View style={styles.lbox}>
					{arr.map((e, i) => (
						<Pressable key={i} onPress={() => setLanguage(i)}>
							<View style={styles.lrow}>
								<Text
									style={[
										styles.ltext,
										i === language
											? styles.cblue
											: styles.cblack,
									]}
								>
									{e}
								</Text>
								<View
									style={[
										styles.lsquare,
										i === language
											? styles.bblue
											: styles.bblack,
									]}
								/>
							</View>
						</Pressable>
					))}
				</View>
				<View style={styles.center}>
					<DefaultButton
						text={strings.toComeIn}
						marginDisabled
					    onPress={onNextPress}
					/>
				</View>
				<View style={styles.bottom}>
					<Text style={styles.text3}>izle</Text>
				</View>
			</View>
		</View>
	);
};

export default VerificationView;