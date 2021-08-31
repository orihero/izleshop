import React from 'react';
import { Text, View } from 'react-native';
import Header from 'components/navigation/Header';
import { strings } from 'locales/locales';
import { styles } from './style';

const CartView = () => {
	return (
		<View style={styles.container}>
			<Header title={strings.cart} />
			<View style={styles.totalContainer}>
				<Text style={styles.totalPrice}></Text>
				<Text style={styles.totalPrice}></Text>
			</View>
		</View>
	);
};

export default CartView;
