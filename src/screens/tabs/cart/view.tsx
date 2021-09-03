import React from 'react';
import { Text, View } from 'react-native';
import Header from 'components/navigation/Header';
import { strings } from 'locales/locales';
import { styles } from './style';
import { selectCartTotal } from 'src/store/slices/cartSlice';
import { useAppSelector } from 'src/utils/hooks';

const CartView = () => {
	let total = useAppSelector(selectCartTotal);
	return (
		<View style={styles.container}>
			<Header title={strings.cart} />
			<View style={styles.totalContainer}>
				<Text style={styles.totalPrice}>{strings.total}</Text>
				<Text style={styles.totalPrice}>{total}</Text>
			</View>
		</View>
	);
};

export default CartView;
