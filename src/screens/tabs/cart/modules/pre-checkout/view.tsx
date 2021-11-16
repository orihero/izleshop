import React, { useState } from 'react';

import {
	PreCheckoutScreenNavigationProps,
	PreCheckoutScreenRouteProps,
} from './controller';
import { Routes } from 'constants/routes';

import {
	View,
	Text,
	Image,
	ScrollView,
	TouchableWithoutFeedback,
	TouchableOpacity,
} from 'react-native';
import Header from 'components/navigation/Header';
import DefaultButton from 'components/general/DefaultButton';

import { styles } from './style';
import { strings } from 'locales/locales';
import { colors } from 'constants/colors';
import {
	ButtonIcon,
	CircleIcon,
	CreditCardIcon,
	CreditCardsPaymentIcon,
	SearchIcon,
	WalletIcon,
} from 'assets/icons/icons';
import { RouteProp } from '@react-navigation/core';
import { IHorizontalItemModel } from 'src/components/special/HorizontalItem';
import { selectDollarRate } from 'store/slices/userSlice';
import { useAppSelector } from 'utils/hooks';

const paymeLogo = require('mockup/images/payme.png');
const clickLogo = require('mockup/images/click.png');

const arr = [
	{
		id: 1,
		img: paymeLogo,
	},
	{
		id: 2,
		img: clickLogo,
	},
];

interface IPreCheckoutViewProps {
	navigation: PreCheckoutScreenNavigationProps;
	route: PreCheckoutScreenRouteProps;
}

export interface IPreCheckoutProductsModel {
	count: number;
	data: IHorizontalItemModel;
}

// {
// 	"id" : 3,
// 	"amount" : 2,
// 	"option" : "",
// 	"color" : "",
// 	"color_name" : ""
// },

// {
// 	currency: 'сум',
// 	id: 2,
// 	image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRWrYlGSZZLqQItVhGWlQuuo4OrhABkX69Qgf3WhhBhXFRGHwtYlVYZNCxZUjaNAca8SKc1p2PSaOEUgV_ZTpahi8vS2Q83givgTBog2rU&usqp=CAc',
// 	name: 'Yeezy Boost 350 V2 "Black Static" sneakers',
// 	oldPrice: '420 000',
// 	price: '300 000',
// 	rating: 4,
// };

const PreCheckoutView = ({ route, navigation }: IPreCheckoutViewProps) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const { total, count, cartList } = route.params;
	const [payMethods, setPayMethods] = useState([
		{
			id: 1,
			img: paymeLogo,
			payment: 'payme',
			active: true,
		},
		{
			id: 2,
			img: clickLogo,
			payment: 'click',
			active: false,
		},
	]);
	const products = cartList.map((product, index) => {
		let newProduct = product.data;
		newProduct.amount = product.count;
		newProduct.option = '';
		newProduct.color = '';
		newProduct.color_name = '';
		return newProduct;
	});

	const onPress = () => {
		let paymentType =
			activeIndex === 2
				? payMethods.find((e) => e.active)?.payment
				: null;
		navigation.navigate(Routes.CHECKOUT, {
			products: products,
			paymentMethod: paymentType,
		});
	};
	let dollarRate = useAppSelector(selectDollarRate);

	let onBackPress = () => {
		navigation.navigate(Routes.HOME);
	};

	return (
		<ScrollView
			style={styles.container}
			showsVerticalScrollIndicator={false}
		>
			<Header
				title={strings.cart}
				// rightEdge={() => <SearchIcon size={20} />}
			/>
			<View style={styles.top}>
				<View style={styles.topChild}>
					<Text style={styles.text1}>{strings.yourOrder}</Text>
					<Text style={styles.text1}>
						{`${count} ${strings.products}`}
					</Text>
				</View>
				<View style={styles.topChild}>
					<Text style={styles.text2}>{`${strings.sum}:`}</Text>
					<Text style={styles.text3}>
						{`${total} ${strings.currency}`}
					</Text>
				</View>
				<View style={styles.topChild}>
					<Text style={styles.text2}>{`${strings.sale}:`}</Text>
					<Text style={styles.text3}>{`${0}%`}</Text>
				</View>
				<View style={styles.topChild}>
					<Text style={styles.text4}>{`${strings.outcome}:`}</Text>
					<Text style={styles.text5}>
						{`${total * dollarRate} ${strings.currency}`}
					</Text>
				</View>
			</View>
			<View style={styles.titleBox}>
				<Text style={styles.text1}>{strings.paymentMethod}</Text>
			</View>
			<TouchableWithoutFeedback onPress={() => setActiveIndex(0)}>
				<View style={styles.payBox}>
					<View style={styles.rowItemsCenter}>
						<WalletIcon
							size={28}
							color={
								activeIndex === 0 ? colors.blue : colors.gray3
							}
						/>
						<Text
							style={{
								...styles.text6,
								color:
									activeIndex === 0
										? colors.blue
										: colors.gray3,
							}}
						>
							{strings.cash}
						</Text>
					</View>
					{activeIndex === 0 ? (
						<ButtonIcon size={20} color={colors.blue} />
					) : (
						<CircleIcon size={20} color={colors.gray3} />
					)}
				</View>
			</TouchableWithoutFeedback>
			<TouchableWithoutFeedback onPress={() => setActiveIndex(1)}>
				<View style={styles.payBox}>
					<View style={styles.rowItemsCenter}>
						<CreditCardIcon
							size={30}
							color={
								activeIndex === 1 ? colors.blue : colors.gray3
							}
						/>
						<Text
							style={{
								...styles.text6,
								color:
									activeIndex === 1
										? colors.blue
										: colors.gray3,
							}}
						>
							{strings.terminal}
						</Text>
					</View>
					{activeIndex === 1 ? (
						<ButtonIcon size={20} color={colors.blue} />
					) : (
						<CircleIcon size={20} color={colors.gray3} />
					)}
				</View>
			</TouchableWithoutFeedback>
			<TouchableWithoutFeedback onPress={() => setActiveIndex(2)}>
				<View style={styles.payBox}>
					<View style={styles.rowItemsCenter}>
						<CreditCardsPaymentIcon
							size={30}
							color={
								activeIndex === 2 ? colors.blue : colors.gray3
							}
						/>
						<Text
							style={{
								...styles.text6,
								color:
									activeIndex === 2
										? colors.blue
										: colors.gray3,
							}}
						>
							{strings.onlinePayment}
						</Text>
					</View>
					{activeIndex === 2 ? (
						<ButtonIcon size={20} color={colors.blue} />
					) : (
						<CircleIcon size={20} color={colors.gray3} />
					)}
				</View>
			</TouchableWithoutFeedback>
			<View style={styles.mv25}>
				{activeIndex === 2 ? (
					<View style={styles.inbox}>
						{payMethods.map((e, i) => (
							<TouchableOpacity
								style={styles.hover}
								onPress={() => {
									setPayMethods((prevState) => {
										return prevState.map((pay, index) => {
											if (index == i) {
												return { ...pay, active: true };
											} else {
												return {
													...pay,
													active: false,
												};
											}
										});
									});
								}}
							>
								<View
									key={i}
									style={[
										styles.inboxChild,
										{
											elevation: 5,
											borderColor: e.active
												? colors.darkBlue
												: colors.white,
											borderWidth: 2,
											shadowRadius: 10,
											shadowOpacity: 0.1,
											shadowColor: e.active
												? colors.darkBlue
												: colors.white,
										},
									]}
								>
									<Image source={e.img} />
								</View>
							</TouchableOpacity>
						))}
					</View>
				) : null}
			</View>
			<DefaultButton text={strings.order} onPress={onPress} />
			<View style={styles.bottom}>
				<View style={styles.bbw1}>
					<TouchableOpacity onPress={onBackPress}>
						<Text style={styles.text7}>
							{strings.backToShopping}
						</Text>
					</TouchableOpacity>
				</View>
			</View>
			<View style={styles.mb30} />
		</ScrollView>
	);
};

export default PreCheckoutView;
