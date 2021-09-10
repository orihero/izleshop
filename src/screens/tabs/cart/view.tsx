import React from 'react';
import { FlatList, Text, View } from 'react-native';
import Header from 'components/navigation/Header';
import { strings } from 'locales/locales';
import { styles } from './style';
import { selectCartList, selectCartTotal } from 'store/slices/cartSlice';
import { useAppSelector } from 'utils/hooks';
import CartItem from './components/CartItem';
import DefaultButton from 'components/general/DefaultButton';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Routes } from 'constants/routes';
import { CartStackParamList } from 'routes/CartStack';

// type CartViewProps = NativeStackScreenProps<CartStackParamList, Routes.CART>;

type CartViewProps = NativeStackScreenProps<CartStackParamList, Routes.CART>;

const CartView = ({ navigation }: CartViewProps) => {
	let total = useAppSelector(selectCartTotal);
	let cartItems = useAppSelector(selectCartList);

	const onPress = () => {
		console.log('navigation: ', navigation);
	};

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
					<DefaultButton text={strings.order} onPress={onPress} />
				</View>
			)}
		</View>
	);
};

export default CartView;
