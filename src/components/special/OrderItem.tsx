import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	TouchableWithoutFeedback,
} from 'react-native';
import { orderItems } from 'mockup/data';
import { useAppSelector } from 'utils/hooks';
import { useNavigation } from '@react-navigation/core';
import { selectUser } from 'store/slices/userSlice';
import { strings } from 'locales/locales';
import { windowWidth } from 'constants/sizes';
import { colors } from 'constants/colors';
import { Routes } from 'constants/routes';

export interface OrderItemProps {
	item: typeof orderItems[0];
}

const OrderItem = ({ item = {} }: OrderItemProps) => {
	let navigation = useNavigation();
	let { dollarRate } = useAppSelector(selectUser);
	let p = (item.product?.price * dollarRate)
		.toString()
		.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
	p = p.substr(0, p.length - 2) + '00';

	let onNextPress = () => {
		//@ts-ignore
		navigation.navigate(Routes.HOME_STACK, {
			screen: Routes.PRODUCT_DETAILS,
			params: { id: item.product_id },
		});
	};

	return (
		<TouchableOpacity onPress={onNextPress} style={styles.container}>
			<View style={styles.img}>
				<Image
					source={{
						uri: typeof item.img === 'string' ? item.img : '',
					}}
					style={{ width: 60, height: 60, resizeMode: 'contain' }}
				/>
			</View>
			<View style={styles.boxText}>
				<Text style={styles.text}> {item.product?.name}</Text>
				<Text style={styles.sumText}>
					{p}- {item.amount} шт
				</Text>
			</View>
		</TouchableOpacity>
	);
};

export default OrderItem;

const styles = StyleSheet.create({
	container: {
		marginTop: 10,
		flexDirection: 'row',
	},
	img: {
		// paddingRight: 6,
		width: 99,
		alignItems: 'center',
	},
	boxText: {
		right: 20,
		marginHorizontal: 10,
	},
	text: {
		width: windowWidth - 110,
		fontSize: 14,
		lineHeight: 17,
		fontWeight: '400',
		alignSelf: 'center',
	},
	sumText: {
		paddingTop: 5,
		fontSize: 14,
		paddingHorizontal: 5,
		fontWeight: '800',
		lineHeight: 17,
		alignItems: 'center',
	},
	button: {
		width: windowWidth - 70,
		right: 70,
		height: 30,
		marginTop: 30,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.lightPink,
	},
	colorText: {
		fontSize: 13,
		fontWeight: 'bold',
		lineHeight: 19,
		color: colors.red,
	},
});
