import {
	ButtonIcon,
	CircleIcon,
	CreditCardIcon,
	CreditCardsPaymentIcon,
	WalletIcon,
} from 'assets/icons/icons';
import DefaultButton from 'components/general/DefaultButton';
import Header from 'components/navigation/Header';
import { colors } from 'constants/colors';
import { Routes } from 'constants/routes';
import { strings } from 'locales/locales';
import React, { useState } from 'react';
import {
	Image,
	ScrollView,
	Text,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import { IHorizontalItemModel } from 'src/components/special/HorizontalItem';
import { selectDollarRate } from 'store/slices/userSlice';
import { useAppSelector } from 'utils/hooks';
import {
	PreCheckoutScreenNavigationProps,
	PreCheckoutScreenRouteProps,
} from './controller';
import { styles } from './style';

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
			installment_plan: activeIndex + 1,
		});
	};
	let dollarRate = useAppSelector(selectDollarRate);

	let onBackPress = () => {
		navigation.navigate(Routes.HOME);
	};
	let p = (total * dollarRate)
		.toString()
		.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
	p = p.substr(0, p.length - 2) + '00';

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
					<Text style={styles.text1}>{count}</Text>
				</View>
				<View style={styles.topChild}>
					<Text style={styles.text2}>{`${strings.sum}:`}</Text>
					<Text style={styles.text3}>
						{`${p} ${strings.currency}`}
					</Text>
				</View>
				<View style={styles.topChild}>
					<Text style={styles.text2}>{`${strings.sale}:`}</Text>
					<Text style={styles.text3}>{`${0}%`}</Text>
				</View>
				<View style={styles.topChild}>
					<Text style={styles.text4}>{`${strings.outcome}:`}</Text>
					<Text style={styles.text5}>
						{`${p} ${strings.currency}`}
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
