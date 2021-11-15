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
import {
	Alert,
	Image,
	ScrollView,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { colors } from 'constants/colors';
import { store } from 'store/configureStore';
import { selectUser, userLoggedOut } from 'store/slices/userSlice';
import { useAppDispatch, useAppSelector } from 'utils/hooks';
import { styles } from './style';

interface IProfileViewProps {}

const ProfileView = ({}: IProfileViewProps) => {
	let user = useAppSelector(selectUser);
	let navigation = useNavigation();
	let dispatch = useAppDispatch();
	let onPress = (route: Routes) => {
		//@ts-ignore
		navigation.navigate(Routes.WITHOUT_TABS, { screen: route });
	};
	let onLogout = () => {
		Alert.alert(strings.warning, strings.logoutPrompt, [
			{
				onPress: () => {
					dispatch(userLoggedOut());
				},
				style: 'default',
				text: strings.yes,
			},
			{ onPress: () => {}, style: 'cancel', text: strings.cancel },
		]);
	};
	return (
		<View style={styles.container}>
			{!user.token ? (
				<View>
					<View style={styles.avatarContainer}>
						<Text style={styles.welcomeText}>
							{strings.welcome}
						</Text>
						<Text style={styles.loginPrompt}>
							{strings.loginPrompt}
						</Text>
					</View>
					<View style={styles.button}>
						<DefaultButton
							text={strings.create}
							onPress={() => onPress(Routes.LOGIN)}
						/>
					</View>
				</View>
			) : (
				<>
					<View style={styles.myProfile}>
						<ProfileIcon size={22} />
						<View style={styles.profile}>
							<Text style={styles.textProfile}>
								{user.userData?.first_name}
							</Text>
						</View>
						<View style={styles.flag}>
							<Image
								style={styles.imageFlag}
								source={require('assets/images/flag.png')}
							/>
							<TouchableOpacity
								style={styles.setting}
								onPress={() => onPress(Routes.SETTINGS)}
							>
								<SettingIcon color={colors.darkGray2} />
							</TouchableOpacity>
						</View>
					</View>
					<View style={styles.orders}>
						<View style={styles.myOrders}>
							<TouchableOpacity
								style={styles.orderView}
								onPress={() => onPress(Routes.MY_ORDERS)}
							>
								<Text
									onPress={() => onPress(Routes.MY_ORDERS)}
									style={styles.textOrders}
								>
									{strings.myOrders}
								</Text>
								<View style={styles.mt}>
									<Text style={styles.textView}>
										{strings.viewAll}
									</Text>
									<ChevronRightIcon size={10} />
								</View>
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
				<TouchableOpacity
					style={styles.viewAll}
					onPress={() => onPress(Routes.WHATS_NEW)}
				>
					<View style={styles.component}>
						<Text style={styles.textOne}>Что нового?</Text>
						<View style={styles.md10}>
							<Text style={styles.textView}>
								{strings.viewAll}
							</Text>
							<ChevronRightIcon size={8} />
						</View>
					</View>
					<Image
						style={styles.img}
						source={require('../../../assets/images/img21.png')}
					/>
				</TouchableOpacity>
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
			{!!user.token && (
				<Pressable to onPress={onLogout}>
					<MenuLink text={strings.singAccount} Icon={LogoutIcon} />
				</Pressable>
			)}
		</View>
	);
};

export default ProfileView;
