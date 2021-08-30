import React from 'react';
import { Image, View } from 'react-native';
import Text from '../../../components/general/Text';
import { strings } from '../../../locales/locales';
import { styles } from './style';
//@ts-ignore
import img from '../../../assets/images/user.png';
import DefaultButton from '../../../components/general/DefaultButton';
import MenuLink from './components/MenuLink';

const ProfileView = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.welcomeText}>{strings.welcome}</Text>
			<View style={styles.avatarContainer}>
				<Image source={img} style={styles.avatar} />
				<Text style={styles.loginPrompt}>{strings.loginPrompt}</Text>
			</View>
			<DefaultButton text={strings.create} />
			<Text style={styles.profileSettings}>
				{strings.profileSettings}
			</Text>
			<MenuLink text={strings.settings} />
			<MenuLink text={strings.myOrders} />
			<MenuLink text={strings.news} />
			<MenuLink text={strings.aboutUs} />
			<MenuLink text={strings.language} />
			<MenuLink text={strings.aboutApp} />
			<MenuLink text={strings.authorize} />
		</View>
	);
};

export default ProfileView;
