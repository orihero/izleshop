import React from 'react';

import { Image, ScrollView, View } from 'react-native';
import Text from 'components/general/Text';
import DefaultButton from 'components/general/DefaultButton';
import Pressable from 'components/general/Pressable';
import MenuLink from 'components/special/MenuLink';

import { strings } from 'locales/locales';
import { styles } from './style';
//@ts-ignore
import img from 'assets/images/user.png';
import { Routes } from 'constants/routes';

interface IProfileViewProps {
	onCreate: () => void;
	onPress: (route: string) => void;
}

const ProfileView = ({ onCreate, onPress }: IProfileViewProps) => {
	return (
		<View style={styles.container}>
			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ paddingBottom: 20 }}
			>
				<Text style={styles.welcomeText}>{strings.welcome}</Text>
				<View style={styles.avatarContainer}>
					<Image source={img} style={styles.avatar} />
					<Text style={styles.loginPrompt}>
						{strings.loginPrompt}
					</Text>
				</View>
				<DefaultButton text={strings.create} onPress={onCreate} />
				<Text style={styles.profileSettings}>
					{strings.profileSettings}
				</Text>
				<Pressable to onPress={() => onPress(Routes.SETTINGS)}>
					<MenuLink text={strings.settings} />
				</Pressable>
				<Pressable to onPress={() => onPress(Routes.MY_ORDERS)}>
					<MenuLink text={strings.myOrders} />
				</Pressable>
				<Pressable to onPress={() => onPress(Routes.ABOUT_US)}>
					<MenuLink text={strings.aboutUs} />
				</Pressable>
				<Pressable to onPress={() => onPress(Routes.NEWS)}>
					<MenuLink text={strings.news} />
				</Pressable>
				<Pressable to onPress={() => onPress(Routes.LANGUAGE)}>
					<MenuLink text={strings.language} />
				</Pressable>
				<Pressable to onPress={() => onPress(Routes.ABOUT_APP)}>
					<MenuLink text={strings.aboutApp} />
				</Pressable>
				<Pressable to onPress={() => onPress(Routes.AUTHORIZATION)}>
					<MenuLink text={strings.authorize} />
				</Pressable>
			</ScrollView>
		</View>
	);
};

export default ProfileView;
