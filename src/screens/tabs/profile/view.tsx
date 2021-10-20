import { useNavigation } from '@react-navigation/core';
import {
	BagIcon,
	CardIcon,
	CarIcon,
	ChatIcon,
	ChevronRightIcon,
	LogoutIcon,
	PenIcon,
	ProfileIcon,
	SettingIcon,
} from 'assets/icons/icons';
import DefaultButton from 'components/general/DefaultButton';
import Pressable from 'components/general/Pressable';
import MenuLink from 'components/special/MenuLink';
import { Routes } from 'constants/routes';
import { strings } from 'locales/locales';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { store } from 'store/configureStore';
import { selectUser, userLoggedOut } from 'store/slices/userSlice';
import { useAppDispatch, useAppSelector } from 'utils/hooks';
import { styles } from './style';

interface IProfileViewProps { }

const ProfileView = ({ }: IProfileViewProps) => {
	let user = useAppSelector(selectUser);
	let navigation = useNavigation();
	let dispatch = useAppDispatch();
	let onPress = (route: Routes) => {
		//@ts-ignore
		navigation.navigate(Routes.WITHOUT_TABS, { screen: route });
	};
	let onLogout = () => {
		dispatch(userLoggedOut());
	};
	return (
		<View style={styles.container}>
			{!user.name && !user.phone ? (
				<View>
					<View style={styles.avatarContainer}>
						<Text style={styles.welcomeText}>
							{strings.welcome}
						</Text>
						<Text style={styles.loginPrompt}>
							{strings.loginPrompt}
						</Text>
					</View>
					<DefaultButton
						text={strings.create}
						onPress={() => onPress(Routes.LOGIN)}
					/>
				</View>
			) : (
				<>
					<View style={styles.myProfile}>
						<ProfileIcon size={22} />
						<View style={styles.profile}>
							<Text style={styles.textProfile}>
								{user.name}
							</Text>
						</View>
						<View style={styles.flag}>
							<Image
								style={styles.imageFlag}
								source={require('assets/images/flag.png')}
							/>
							<TouchableOpacity style={styles.setting}
								onPress={() => onPress(Routes.SETTINGS)}
							>
								<SettingIcon />
							</TouchableOpacity>
						</View>
					</View>
					<View style={styles.orders}>
						<View style={styles.myOrders}>
							<Text onPress={() => onPress(Routes.MY_ORDERS)} style={styles.textOrders}>
								{strings.myOrders}
							</Text>
							<TouchableOpacity
								style={styles.orderView}
								onPress={() => onPress(Routes.VIEW_ALL)}
							>
								<Text style={styles.textView}>
									{strings.viewAll}
								</Text>
								<ChevronRightIcon size={10} />
							</TouchableOpacity>
						</View>
						<Text style={styles.line} />
						<View style={styles.dispatch}>
							<View style={styles.payment}>
								<CardIcon size={25} />
								<Text style={styles.textPayment}>
									{strings.paymentPending}
								</Text>
							</View>
							<View style={styles.payment}>
								<BagIcon size={25} />
								<Text style={styles.textPayment}>
									{strings.awaitingDispatch}
								</Text>
							</View>
							<View style={styles.payment}>
								<CarIcon size={27} />
								<Text style={styles.textPayment}>
									{strings.orderSent}
								</Text>
							</View>
							<View style={styles.payments}>
								<PenIcon size={25} />
								<Text style={styles.textPayments}>
									{strings.reviewAwaiteng}
								</Text>
							</View>
						</View>
						<Text style={styles.line} />
						<View style={styles.lol}>
							{/* <ChatIcon size={14} /> */}
							<TouchableOpacity
								style={styles.reviews}
								onPress={() => onPress(Routes.MY_REVIEWS)}
							>
								<Text style={styles.textReviews}>
									{strings.myreviews}
								</Text>
								<ChevronRightIcon size={10} />
							</TouchableOpacity>
						</View>
					</View>
				</>
			)}

			<View style={styles.news}>
				<View style={styles.component}>
					<Text onPress={() => onPress(Routes.WHATS_NEW)} style={styles.textOne}>Что нового?</Text>
					<TouchableOpacity
						style={styles.viewAll}
						onPress={() => onPress(Routes.VIEW_ALL)}
					>
						<Text style={styles.textView}>
							{strings.viewAll}
						</Text>
						<ChevronRightIcon size={8} />
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
		</View>
	);
};

export default ProfileView;
