import DefaultButton from 'components/general/DefaultButton';
import Header from 'components/navigation/Header';
import HorizontalItem from 'components/special/HorizontalItem';
import { colors } from 'constants/colors';
import { Routes } from 'constants/routes';
import { strings } from 'locales/locales';
import React from 'react';
import {
	FlatList,
	Image,
	Platform,
	ScrollView,
	Text,
	ToastAndroid,
	View,
} from 'react-native';
import { selectCartList, selectCartTotal } from 'store/slices/cartSlice';
import { selectDollarRate } from 'store/slices/userSlice';
import { useAppSelector } from 'utils/hooks';
import { CartScreenNavigationProp } from './controller';
import { styles } from './style';

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
				count: cartItems.filter((e) => e.isActive).length,
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
			<ScrollView showsVerticalScrollIndicator={false}>
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
										alignItems: 'center',
										resizeMode: 'contain',
										backgroundColor: colors.lightBlue,
									}}
									source={require('../../../assets/images/cart.png')}
								/>
							</View>
						)}
					/>
				) : null}
			</ScrollView>

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
