import { useNavigation } from '@react-navigation/core';
import { ChevronIcon, LogoutIcon } from 'assets/icons/icons';
import Pressable from 'components/general/Pressable';
import MenuLink from 'components/special/MenuLink';
import { Routes } from 'constants/routes';
import { strings } from 'locales/locales';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { userLoggedOut } from 'store/slices/userSlice';
import { useAppDispatch } from 'utils/hooks';
import { styles } from './style';

interface IProfileViewProps {}

const MyProfileView = ({}: IProfileViewProps) => {
	let navigation = useNavigation();
	let dispatch = useAppDispatch();

	let onPress = (route: Routes) => {
		navigation.navigate({ key: route });
	};

	let onLogout = () => {
		dispatch(userLoggedOut());
	};

	return (
		<View style={styles.container}>
			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ paddingBottom: 20 }}
			>
				<View style={styles.news}>
					<View style={styles.component}>
						<Text style={styles.textOne}>Что нового?</Text>
						<TouchableOpacity
							style={styles.viewAll}
							onPress={() => onPress(Routes.VIEW_ALL)}
						>
							<Text style={styles.textView}>
								{strings.viewAll}
							</Text>
							<ChevronIcon size={8} />
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
				<Pressable to onPress={onLogout}>
					<MenuLink text={strings.singAccount} Icon={LogoutIcon} />
				</Pressable>
			</ScrollView>
		</View>
	);
};

export default MyProfileView;
