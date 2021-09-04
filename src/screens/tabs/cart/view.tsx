import React from 'react';
import { FlatList, Text, View } from 'react-native';
import Header from 'components/navigation/Header';
import { strings } from 'locales/locales';
import { styles } from './style';
import { selectCartList, selectCartTotal } from 'store/slices/cartSlice';
import { useAppSelector } from 'utils/hooks';
import CartItem from './components/CartItem';
import DefaultButton from 'components/general/DefaultButton';

const CartView = () => {
	let total = useAppSelector(selectCartTotal);
	let cartItems = useAppSelector(selectCartList);
	return (
		<View style={styles.container}>
			<Header title={strings.cart} />
			<View style={styles.totalContainer}>
				<Text style={styles.totalPrice}>{strings.total}</Text>
				<Text style={styles.totalPrice}>{total}</Text>
			</View>
			<FlatList
				data={cartItems}
				renderItem={(props) => <CartItem {...props} />}
				keyExtractor={(e) => e.data.id.toString()}
			/>
			{cartItems.length > 0 && (
				<View style={styles.absolute}>
					<DefaultButton text={strings.order} />
				</View>
			)}
		</View>
	);
};

export default CartView;
