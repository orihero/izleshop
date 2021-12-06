import React from 'react';

import { Text, TouchableOpacity, View, Image } from 'react-native';
import ProfileLayout from '../ProfileLayout';

import { styles } from './style';
import { strings } from 'locales/locales';
import {
	BirthdayIcon,
	ChevronRightIcon,
	LanguageIcon,
	PhoneIcon,
	ProfileBoldIcon,
	ProfileIcon,
	TelephoneIcon,
} from 'assets/icons/icons';
import { useNavigation } from '@react-navigation/core';

import { Routes } from 'constants/routes';
import { useAppSelector } from 'utils/hooks';
import { selectUser } from 'store/slices/userSlice';

interface ISettingViewProps {
	onCreate: () => void;
	onPress: (route: string) => void;
	navigate: () => void;
}

const SettingsView = ({ onCreate }: ISettingViewProps) => {
	let navigation = useNavigation();
	let user = useAppSelector(selectUser);
	let onNextPress = () => {
		navigation.navigate(Routes.LANGUAGE);
	};
	let onCreatePress = () => {
		navigation.navigate(Routes.PHONE_NUMBER);
	};
	let onPress = (route: Routes) => {
		navigation.navigate(route);
	};
	console.log(user.userData?.phone);

	return (
		<ProfileLayout headerTitle={strings.settings || ''}>
			<View style={styles.container}>
				<View style={styles.profilePage}>
					<TouchableOpacity
						style={styles.profile}
						onPress={() => onPress(Routes.NAME_PAGE)}
					>
						<ProfileBoldIcon size={20} />

						<Text style={styles.textProfile}>
							{user?.userData?.first_name}
							{user?.userData?.last_name}
						</Text>
						<View style={styles.icon}>
							<ChevronRightIcon size={15} />
						</View>
					</TouchableOpacity>
				</View>
				<View style={styles.settingProfile}>
					<View style={styles.dataContainer}>
						<TouchableOpacity
							style={styles.phoneString}
							onPress={onCreatePress}
						>
							<View style={styles.row}>
								<TelephoneIcon size={20} />
								<Text style={styles.textbirthday}>
									{strings.phoneNamber}
								</Text>
							</View>

							<Text style={styles.number}>
								{user.userData?.phone}
							</Text>
							<ChevronRightIcon size={15} />
						</TouchableOpacity>
					</View>
					<View style={styles.dataContainer}>
						<TouchableOpacity
							style={styles.languageString}
							onPress={onNextPress}
						>
							<View style={styles.row}>
								<LanguageIcon size={20} />
								<Text style={styles.titleText}>
									{strings.changeTheLanguage}
								</Text>
							</View>
							<View style={styles.sos}>
								<Image
									style={styles.flag}
									source={require('assets/images/flag.png')}
								/>
								<ChevronRightIcon size={15} />
							</View>
						</TouchableOpacity>
					</View>
				</View>
				<Text style={styles.text3}>izle</Text>
			</View>
		</ProfileLayout>
	);
};

export default SettingsView;
