import React from 'react';
import { Text, View, } from 'react-native';

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



interface ILanguageProps {
    setLanguage: (e: number) => void;
    arr: string[];
    onPress: () => {};
}

const NamePageView = ({

}: ILanguageProps) => {
    let navigation = useNavigation();
    let user = useAppSelector(selectUser);
    let dispatch = useDispatch()
    let setName = (name: string) => { dispatch(setUserName(name)) }
    let onNextPress = () => {
        //@ts-ignore
        navigation.navigate(Routes.SETTINGS);
    };
    return (
        <ProfileLayout headerTitle={strings.setting || ''}>
            <View style={styles.container}>
                <Text style={styles.text}>{strings.fio}</Text>
                <View style={styles.input}>
                    <DefaultInput
                        placeholder={'Бекмуарт Тангирбергенов'}
                        value={user.name}
                        onChange={setName}
                    />
                </View>
                <View style={styles.center}>
                    <DefaultButton
                        text={strings.save}
                        marginDisabled
                        onPress={onNextPress}
                    />
                </View>
                <Text style={styles.izle}>izle</Text>
            </View>
        </ProfileLayout>
    );
};

export default NamePageView;