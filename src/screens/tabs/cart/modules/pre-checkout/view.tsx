import React, { useState } from 'react';
import {
	View,
	Text,
	Image,
	ScrollView,
	TouchableWithoutFeedback,
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
	WalletIcon,
} from 'assets/icons/icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CartStackParamList } from 'src/routes/tabs/CartStack';
import { Routes } from 'constants/routes';

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

type ProCheckoutViewProps = NativeStackScreenProps<
	CartStackParamList,
	Routes.PRE_CHECKOUT
>;

const PreCheckoutView = ({ navigation }: ProCheckoutViewProps) => {
	const [activeIndex, setActiveIndex] = useState(0);

	const onPress = () => console.log('Hi!');

	return (
		<ScrollView
			style={styles.container}
			showsVerticalScrollIndicator={false}
		>
			<Header title={strings.cart} />
			<View style={styles.top}>
				<View style={styles.topChild}>
					<Text style={styles.text1}>{strings.yourOrder}</Text>
					<Text style={styles.text1}>
						{`${3} ${strings.products}`}
					</Text>
				</View>
				<View style={styles.topChild}>
					<Text style={styles.text2}>{`${strings.sum}:`}</Text>
					<Text style={styles.text3}>
						{`37 500 000 ${strings.currency}`}
					</Text>
				</View>
				<View style={styles.topChild}>
					<Text style={styles.text2}>{`${strings.sale}:`}</Text>
					<Text style={styles.text3}>{`${25}%`}</Text>
				</View>
				<View style={styles.topChild}>
					<Text style={styles.text4}>{`${strings.outcome}:`}</Text>
					<Text style={styles.text5}>
						{`37 000 000 ${strings.currency}`}
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
						{arr.map((e, i) => (
							<View key={i} style={styles.inboxChild}>
								<Image source={e.img} />
							</View>
						))}
					</View>
				) : null}
			</View>
			<DefaultButton text={strings.order} onPress={onPress} />
			<View style={styles.bottom}>
				<View style={styles.bbw1}>
					<Text style={styles.text7}>{strings.backToShopping}</Text>
				</View>
			</View>
			<View style={styles.mb30} />
		</ScrollView>
	);
};

export default PreCheckoutView;
