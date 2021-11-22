import React from 'react';

import { CartScreenNavigationProp } from './controller';

import { selectCartList, selectCartTotal } from 'store/slices/cartSlice';
import { useAppSelector } from 'utils/hooks';

import {
	FlatList,
	Text,
	View,
	Image,
	Platform,
	ToastAndroid,
} from 'react-native';
import Header from 'components/navigation/Header';
import DefaultButton from 'components/general/DefaultButton';
import CartItem from 'components/special/CartItem';
import HorizontalItem from 'components/special/HorizontalItem';
import { selectDollarRate } from 'store/slices/userSlice';

import { strings } from 'locales/locales';
import { styles } from './style';
import { Routes } from 'constants/routes';
import { SearchIcon } from 'assets/icons/icons';
import { colors } from 'constants/colors';

interface ICartViewProps {
	navigation: CartScreenNavigationProp;
}

const CartView = ({ navigation }: ICartViewProps) => {
	let total = useAppSelector(selectCartTotal);
	let cartItems = useAppSelector(selectCartList);
	let dollarRate = useAppSelector(selectDollarRate);
	let p = (total * dollarRate)
		.toString()
		.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
	p = p.substr(0, p.length - 2) + '00';


	const onPress = () => {
		if (total > 0) {
			navigation.navigate(Routes.PRE_CHECKOUT, {
				total: total,
				count: cartItems.length,
				cartList: cartItems,
			});
		} else {
			if (Platform.OS == 'android') {
				ToastAndroid.show(strings.cartEmpty, 1000);
			} else {
				alert(strings.cartEmpty);
			}
		}
	};

	return (
		<View style={styles.container}>
			<Header title={strings.cart} bold rightEdge={() => null} />

			{cartItems ? (
				<FlatList
					data={cartItems}
					contentContainerStyle={{ flex: 1 }}
					style={styles.mh20}
					keyExtractor={(e) => e.data.id.toString()}
					showsVerticalScrollIndicator={false}
					renderItem={(props) => (
						<View style={styles.mt15}>
							<HorizontalItem hasCounter {...props} />
						</View>
					)}
					ListEmptyComponent={() => (
						<View style={styles.emptyContent}>
							<Text style={styles.cartText}>
								{' '}
								{strings.cartText}{' '}
							</Text>
							<Image
								style={{
									width: 140,
									height: 140,
									resizeMode: 'contain',
									backgroundColor: colors.lightBlue,
								}}
								source={require('../../../assets/images/cart.png')}
							/>
						</View>
					)}
				/>
			) : null}

			{cartItems.length > 0 && (
				<View style={styles.absolute}>
					<View style={styles.totalContainer}>
						<Text style={styles.totalPriceText1}>
							{strings.total}
						</Text>
						<Text style={styles.totalPriceText2}>
							{p}
							{strings.soum}
						</Text>
					</View>
					<View style={styles.button}>
						<DefaultButton text={strings.order} onPress={onPress} />
					</View>
				</View>
			)}
		</View>
	);
};

export default CartView;
