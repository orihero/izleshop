import { useFocusEffect, useNavigation } from '@react-navigation/core';
import { requests } from 'api/requests';
import {
	BagIcon,
	CardIcon,
	CarIcon,
	ChevronRightIcon,
	LogoutIcon,
	PenIcon,
	ProfileIcon,
	SettingIcon,
} from 'assets/icons/icons';
import DefaultButton from 'components/general/DefaultButton';
import Pressable from 'components/general/Pressable';
import MenuLink from 'components/special/MenuLink';
import { colors } from 'constants/colors';
import { Routes } from 'constants/routes';
import { strings } from 'locales/locales';
import React, { useEffect, useState } from 'react';
import {
	Alert,
	Image,
	ScrollView,
	Text,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import { selectUser, userLoggedOut } from 'store/slices/userSlice';
import { useAppDispatch, useAppSelector } from 'utils/hooks';
import { styles } from './style';

interface IProfileViewProps {}

export let ordersMap = [
	{
		string: strings.paymentPending,
		icon: CardIcon,
		status: 0,
		size: 25,
	},
	{
		string: strings.awaitingDispatch,
		icon: BagIcon,
		status: null,
		size: 25,
	},
	{
		string: strings.orderSent,
		icon: CarIcon,
		status: null,
		size: 27,
	},
	{
		string: strings.reviewAwaiteng,
		icon: PenIcon,
		size: 27,
		status: 1,
	},
];

const ProfileView = ({}: IProfileViewProps) => {
	const [news, setNews] = useState([]);
	const [orders, setOrders] = useState([]);
	let user = useAppSelector(selectUser);
	let navigation = useNavigation();
	let dispatch = useAppDispatch();

	let onPress = (route: Routes, params?: any) => {
		//@ts-ignore
		navigation.navigate(Routes.WITHOUT_TABS, { screen: route, params });
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

	let onPickOrders = (status: number) => {
		navigation.navigate(Routes.WITHOUT_TABS, {
			screen: Routes.MY_ORDERS,
			params: { orders: orders.filter((e) => e.status === status) },
		});
	};
	let effect = async () => {
		try {
			let res = await requests.product.getNews();
			let ordersRes = await requests.product.getUserOrders();
			setOrders(ordersRes.data);
			setNews(res.data);
			// setBanners(res.data.filter((e) => e.for_app === 1));
		} catch (error) {}
	};

	useFocusEffect(() => {
		effect();
	});

	useEffect(() => {
		effect();
	}, []);

	return (
		<ScrollView
			showsVerticalScrollIndicator={false}
			// style={styles.container}
		>
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
									onPress={() =>
										onPress(Routes.MY_ORDERS, { orders })
									}
								>
									<Text
										onPress={() =>
											onPress(Routes.MY_ORDERS)
										}
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
								{ordersMap.map(
									({ icon: Icon, size, string, status }) => {
										let count = orders.reduce(
											(p, c) =>
												p +
												(c.status === status ? 1 : 0),
											0
										);
										return (
											<TouchableOpacity
												onPress={() =>
													onPickOrders(status)
												}
											>
												<View style={styles.payment}>
													<Icon size={size} />
													<Text
														style={
															styles.textPayment
														}
													>
														{string}
													</Text>
													{count > 0 && (
														<View style={styles.number}>
															<Text
															style={
																styles.countIndicator
															}
														>
															{count}
														</Text>
														</View>
													)}
												</View>
											</TouchableOpacity>
										);
									}
								)}
							</View>
							<Text style={styles.line} />
							<View style={styles.lol}>
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
					<TouchableWithoutFeedback
						onPress={() =>
							onPress(Routes.WHATS_NEW, { banners: news })
						}
					>
						<View style={styles.viewAll}>
							<View style={styles.component}>
								<Text style={styles.textOne}>Что нового?</Text>
								<View style={styles.md10}>
									<Text style={styles.textView}>
										{strings.viewAll}
									</Text>
									<ChevronRightIcon size={8} />
								</View>
							</View>
							<TouchableWithoutFeedback
								onPress={() =>
									onPress(Routes.WHATS_NEW, { banners: news })
								}
							>
								<Image
									style={styles.img}
									source={
										news.length > 0
											? { uri: news[0].image }
											: undefined
									}
								/>
							</TouchableWithoutFeedback>
						</View>
					</TouchableWithoutFeedback>
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
						<MenuLink
							text={strings.singAccount}
							Icon={LogoutIcon}
						/>
					</Pressable>
				)}
			</View>
		</ScrollView>
	);
};

export default ProfileView;
