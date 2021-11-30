import { useNavigation } from '@react-navigation/core';
import { requests } from 'api/requests';
import OrderItem from 'components/special/OrderItem';
import { Routes } from 'constants/routes';
import { strings } from 'locales/locales';
import React from 'react';
import {
	Linking,
	ScrollView,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { selectUser } from 'store/slices/userSlice';
import { useAppSelector } from 'utils/hooks';
import ProfileLayout from '../ProfileLayout';
import { styles } from './style';

export interface MyOrdersViewProps {
	loading: boolean;
}

const MyOrdersView = ({ userOrders, products, loading }: MyOrdersViewProps) => {
	let navigation = useNavigation();
	let user = useAppSelector(selectUser);
	let { dollarRate } = useAppSelector(selectUser);
	let dispatch = useDispatch();
	let onNextPress = (items, id) => {
		//@ts-ignore
		navigation.navigate(Routes.LEAVE_FEEDBACK, {
			product_id: id,
			orderItems: items,
		});
	};

	let onBackPress = async (el) => {
		//@ts-ignore

		let req = {
			receiverName: el.name,
			paymentType: el.payment_option,
			receiverPhone: el.phone,
			address: el.address,
			district: el.district,
			note: el.message,
			index: '111201',
			city: el.city,
			products: el.items.map(({ product_id: id, amount }) => ({
				id,
				amount,
				option: '',
				color_name: '',
				color: '',
			})),
			installment_plan: el.installment_plan,
		};
		try {
			let response = await requests.product.makeOrder(req);
			if (response.data.paymentUrl && el.installment_plan === null) {
				Linking.openURL(response.data.paymentUrl);
			}
			navigation.navigate(Routes.CART);
		} catch (error) {
			console.error(error);
		}
	};

	return loading ? (
		<View style={styles.indicatorContainer}>
			<ActivityIndicator size="large" />
		</View>
	) : (
		<ProfileLayout headerTitle={strings.myOrders || ''}>
			<ScrollView>
				<View style={styles.container}>
					{userOrders &&
						userOrders?.map((e) => {
							let status = strings.waiting;
							switch (e.status) {
								case 1:
									status = strings.payed;
									break;
							}
							let time = new Date(e.created_at);
							return (
								<View style={styles.boxOne} key={e.id}>
									<View style={styles.textBox}>
										<View style={styles.numberBox}>
											<Text style={styles.text1}>
												{strings.orderNumber}{' '}
											</Text>
											<Text style={styles.text}>
												{e.order_id}
											</Text>
										</View>
										<View style={styles.numberBox}>
											<Text style={styles.text1}>
												{strings.orderTime}
											</Text>
											<Text style={styles.text}>
												{time.toLocaleDateString()}{' '}
												{time.toLocaleTimeString()}
											</Text>
										</View>
									</View>
									{e?.items?.map((el) => {
										let img = products?.find(
											(e) => el.product_id === e.id
										)?.image;

										return (
											<View
												key={el.id}
												style={styles.mt10}
											>
												<OrderItem
													item={{
														...el,
														img,
													}}
												/>
											</View>
										);
									})}
									<View style={styles.boxTwo}>
										<View>
											<Text style={styles.textColumn}>
												{strings.status}
											</Text>
											<Text style={styles.textColumn}>
												{strings.quantity}
											</Text>
											<Text style={styles.textColumn}>
												{strings.outcome}
											</Text>
										</View>
										<View style={styles.row}>
											<Text style={styles.textRow}>
												{status}
											</Text>
											<Text style={styles.textRow}>
												{e.amount}
											</Text>
											<Text style={styles.textRow}>
												{e.price
													.toString()
													.replace(
														/\B(?=(\d{3})+(?!\d))/g,
														' '
													)}
											</Text>
										</View>
									</View>
									{e.status === 1 ? (
										<TouchableOpacity
											onPress={() =>
												onNextPress(e?.items || [])
											}
										>
											<View style={styles.button}>
												<Text style={styles.colorText}>
													{strings.leaveFeedback}
												</Text>
											</View>
										</TouchableOpacity>
									) : e.installment_plan === null ? (
										<TouchableOpacity
											onPress={() => onBackPress(e)}
										>
											<View style={styles.mt12}>
												<Text style={styles.mt13}>
													{'ОПЛАТИТЬ'}
												</Text>
											</View>
										</TouchableOpacity>
									) : null}
								</View>
							);
						})}
				</View>
			</ScrollView>
		</ProfileLayout>
	);
};

export default MyOrdersView;
