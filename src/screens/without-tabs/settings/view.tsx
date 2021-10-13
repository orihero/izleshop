import React from 'react';

import { Text, TouchableOpacity, View, Image } from 'react-native';
import ProfileLayout from '../ProfileLayout';

import { styles } from './style';
import { strings } from 'locales/locales';
import { BirthdayIcon, ChevronIcon, LanguageIcon, PhoneIcon, ProfileIcon, TelephoneIcon } from 'assets/icons/icons';
import { useNavigation } from '@react-navigation/core';

import { Routes } from 'constants/routes';



interface ISettingViewProps {
	onCreate: () => void;
	onPress: (route: string) => void;
	navigate: () => void
}

const SettingsView = ({ onCreate, }: ISettingViewProps) => {
	let navigation = useNavigation();
	let onNextPress = () => {
		navigation.navigate(Routes.LANGUAGE);
	};
	let onCreatePress = () => {
		navigation.navigate(Routes.PHONE_NUMBER);
	};
	let onPress = (route: Routes) => {
		navigation.navigate(route)
	}
	return (
		<ProfileLayout headerTitle={strings.settings || ''}>
			<View style={styles.container}>
				<View style={styles.profilePage}>
					<ProfileIcon size={20} color={'#1779c8'} />
					<TouchableOpacity style={styles.profile} onPress={() => onPress(Routes.NAME_PAGE)}>
						<Text style={styles.textProfile}>
							{strings.nameString}
						</Text>
						<ChevronIcon size={15} />
					</TouchableOpacity>
				</View>
				<View style={styles.settingProfile}>
					<View style={styles.birthday}>
						<BirthdayIcon size={20} />
						<TouchableOpacity style={styles.birthdayString} onPress={() => onPress(Routes.PRE_CHECKOUT)}>
							<Text style={styles.textbirthday}>
								{strings.birthday}
							</Text>
							<Text style={styles.day}>12-12-2000</Text>
							<ChevronIcon size={15} />
						</TouchableOpacity>
					</View>
					<View style={styles.phoneNumber}>
						<TelephoneIcon size={20}  />
						<TouchableOpacity style={styles.phoneString} onPress={onCreatePress}>
							<Text style={styles.textPhone}>
								{strings.phoneNamber}
							</Text>
							<Text style={styles.number}>(99) 123-4565</Text>
							<ChevronIcon size={15} />
						</TouchableOpacity>
					</View>
					<View style={styles.changeLanguage}>
						<LanguageIcon size={20} />
						<TouchableOpacity style={styles.languageString} onPress={onNextPress} >
							<Text style={styles.textLanguage}>
								{strings.changeTheLanguage}
							</Text>
							<Image
								style={styles.flag}
								source={require('assets/images/flag.png')}
							/>
							<ChevronIcon size={15} />
						</TouchableOpacity>
					</View>
				</View>
				<Text style={styles.text3}>izle</Text>
			</View>
		</ProfileLayout>
	);
};

export default SettingsView;
