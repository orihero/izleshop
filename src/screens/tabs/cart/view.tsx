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

	const onPress = () => {
		navigation.navigate(Routes.PRE_CHECKOUT);
	};

	return (
		<View style={styles.container}>
			<Header
				title={strings.cart}
				rightEdge={() => <SearchIcon size={20} />}
			/>

			{cartItems ? (
				<FlatList
					data={cartItems}
					style={styles.mh20}
					keyExtractor={(e) => e.data.id.toString()}
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
						<Text style={styles.totalPriceText1}>{strings.total}</Text>
						<Text style={styles.totalPriceText2}>{total}</Text>
					</View>
					<DefaultButton text={strings.order} onPress={onPress} />
				</View>
			)}
		</View>
	);
};

export default CartView;
