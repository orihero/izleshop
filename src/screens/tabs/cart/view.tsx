import React from 'react';

import { CartScreenNavigationProp } from './controller';

import { selectCartList, selectCartTotal } from 'store/slices/cartSlice';
import { useAppSelector } from 'utils/hooks';

import { FlatList, Text, View } from 'react-native';
import Header from 'components/navigation/Header';
import DefaultButton from 'components/general/DefaultButton';
import CartItem from 'components/special/CartItem';
import HorizontalItem from 'components/special/HorizontalItem';

import { strings } from 'locales/locales';
import { styles } from './style';
import { Routes } from 'constants/routes';
import { SearchIcon } from 'assets/icons/icons';

interface ICartViewProps {
	navigation: CartScreenNavigationProp;
}

const CartView = ({ navigation }: ICartViewProps) => {
	let total = useAppSelector(selectCartTotal);
	let cartItems = useAppSelector(selectCartList);

	console.log({ total, cartItems });

	const onPress = () => {
		navigation.navigate(Routes.PRE_CHECKOUT, {
			total: total,
			count: cartItems.length,
			cartList: cartItems,
		});
	};

	return (
		<View style={styles.container}>
			<Header title={strings.cart} bold rightEdge={() => null} />

			{cartItems ? (
				<FlatList
					data={cartItems}
					contentContainerStyle={{ paddingBottom: 180 }}
					style={styles.mh20}
					keyExtractor={(e) => e.data.id.toString()}
					showsVerticalScrollIndicator={false}
					renderItem={(props) => (
						<View style={styles.mt15}>
							<HorizontalItem hasCounter {...props} />
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
							{total} {strings.soum}
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
