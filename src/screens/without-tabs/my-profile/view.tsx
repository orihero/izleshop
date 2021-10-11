import React from 'react';

import { useNavigation } from '@react-navigation/core';
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import DefaultButton from 'components/general/DefaultButton';
import Pressable from 'components/general/Pressable';
import MenuLink from 'components/special/MenuLink';

import { ChevronIcon, LogoutIcon, ProfileIcon, SettingIcon } from 'assets/icons/icons';
import { strings } from 'locales/locales';
import { styles } from './style';

import { Routes } from 'constants/routes';
import { Icon } from 'react-native-paper/lib/typescript/components/Avatar/Avatar';


interface IProfileViewProps {
	onCreate: () => void;
	onPress: (route: string) => void;
	navigate: () => void
}

const MyProfileView = ({ onCreate, }: IProfileViewProps) => {
	let navigation = useNavigation();
	let onNextPress = () => {
		navigation.navigate(Routes.SETTINGS);
	};
	let onPress = (route: Routes) => {
		navigation.navigate(route)
	}
	return (
		<View style={styles.container}>
			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ paddingBottom: 20 }}
			>
				<View style={styles.myProfile}>
					<View style={styles.profile}>
						<ProfileIcon size={20} />
						<Text style={styles.textProfile}>Бекмуарт Тангирбергенов</Text>
					</View>
					<Image style={styles.imageFlag} source={require('assets/images/flag.png')} />
					<TouchableOpacity onPress={onNextPress}>
						<SettingIcon />
					</TouchableOpacity>
				</View>
				<View style={styles.orders}>
					<View style={styles.myOrders}>
						<Text style={styles.textOrders}>{strings.myOrders}</Text>
						<TouchableOpacity style={styles.orderView} onPress={() => onPress(Routes.VIEW_ALL)}>
							<Text
								style={styles.textView}>
								{strings.viewAll}
							</Text>
							<ChevronIcon size={8} />
						</TouchableOpacity>
					</View>
					<Text style={styles.line} />
					<View style={styles.dispatch}>
						<View style={styles.payment}>
							<Image source={require('assets/images/coolico.png')} />
							<Text style={styles.textPayment}>{strings.paymentPending}</Text>
						</View>
						<View style={styles.payment}>
							<Image source={require('assets/images/Vector.png')} />
							<Text style={styles.textPayment}>{strings.awaitingDispatch}</Text>
						</View>
						<View style={styles.payment}>
							<Image source={require('assets/images/Fill.png')} />
							<Text style={styles.textPayment}>{strings.orderSent}</Text>
						</View>
						<View style={styles.payments}>
							<Image source={require('assets/images/Fil.png')} />
							<Text style={styles.textPayments}>{strings.reviewAwaiteng}</Text>
						</View>
					</View>
					<Text style={styles.line} />
					<View style={styles.lol}>
						<Image style={styles.chat} source={require('assets/images/chat.png')} />
						<TouchableOpacity style={styles.reviews} onPress={() => onPress(Routes.MY_REVIEWS)}>
							<Text style={styles.textReviews}>
								{strings.myreviews}
							</Text>
							<ChevronIcon size={10} />
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.news}>
					<View style={styles.component}>
						<Text style={styles.textOne}>Что нового?</Text>
						<TouchableOpacity style={styles.viewAll} onPress={() => onPress(Routes.VIEW_ALL)}>
							<Text
								style={styles.textView}>
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
				<Pressable to onPress={() => onPress(Routes.SING_ACCOUNT)}>
					<MenuLink text={strings.singAccount} Icon={LogoutIcon} />
				</Pressable>
			</ScrollView>
		</View>
	);
};

export default MyProfileView;
