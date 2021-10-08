import React from 'react';

import { Image, ScrollView, View, Text, TouchableOpacity } from 'react-native';
import DefaultButton from 'components/general/DefaultButton';
import Pressable from 'components/general/Pressable';
import MenuLink from 'components/special/MenuLink';

import { ChevronIcon, LogoutIcon } from 'assets/icons/icons';
import { strings } from 'locales/locales';
import { styles } from './style';
//@ts-ignore
// import img from 'assets/images/image.png';
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
				<View style={styles.avatarContainer}>
					<Text style={styles.welcomeText}>{strings.welcome}</Text>
					<Text style={styles.loginPrompt}>
						{strings.loginPrompt}
					</Text>
				</View>
				<DefaultButton text={strings.create} onPress={onCreate} />
				<View style={styles.news}>
					<View style={styles.component}>
						<Text style={styles.textOne}>Что нового?</Text>
						<TouchableOpacity style={styles.viewAll} onPress={() => onPress(Routes.VIEW_ALL)}>
							<Text
								style={styles.textView}>
								{strings.viewAll}
							</Text>
							<ChevronIcon size={8}/>
						</TouchableOpacity>
					</View>
					<Image 
						source={require('../../../assets/images/image.png')}
					/>
				</View>
				<Pressable to onPress={() => onPress(Routes.HELP_SUPPORT)}>
					<MenuLink text={strings.helpSupport} />
				</Pressable>
				<Pressable to onPress={() => onPress(Routes.ABOUT_US)}>
					<MenuLink text={strings.aboutUs} />
				</Pressable>
				<Pressable to onPress={() => onPress(Routes.OUR_PARTNERS)}>
					<MenuLink text={strings.ourPartners} />
				</Pressable>
				<Pressable to onPress={() => onPress(Routes.ABOUT_APP)}>
					<MenuLink text={strings.aboutApp} />
				</Pressable>
				<Pressable to onPress={() => onPress(Routes.SING_ACCOUNT)}>
					<MenuLink text={strings.singAccount} Icon={LogoutIcon}/>
				</Pressable>
			</ScrollView>
		</View>
	);
};

export default ProfileView;
