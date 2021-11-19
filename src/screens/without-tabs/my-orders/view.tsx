import React, { useState } from 'react';

import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import HorizontalItem from 'components/special/HorizontalItem';
import ProfileLayout from '../ProfileLayout';
import OrderItem from 'components/special/OrderItem';

import { styles } from './style';
import { strings } from 'locales/locales';
import { items, orderItems } from 'mockup/data';
import { useNavigation } from '@react-navigation/core';
import { useAppSelector } from 'utils/hooks';
import { useDispatch } from 'react-redux';
import { selectUser } from 'store/slices/userSlice';
import { Routes } from 'constants/routes';
import { colors } from 'constants/colors';
import { ActivityIndicator } from 'react-native-paper';

export interface MyOrdersViewProps {
	loading: boolean;
}

const MyOrdersView = ({ userOrders, products, loading }: MyOrdersViewProps) => {
	let navigation = useNavigation();
	let user = useAppSelector(selectUser);
	let { dollarRate } = useAppSelector(selectUser);
	let dispatch = useDispatch();
	let onNextPress = () => {
		//@ts-ignore
		navigation.navigate(Routes.LEAVE_FEEDBACK);
	};
	let p = console.log('userOrders: ', JSON.stringify(userOrders, null, 4));
	// console.log('userOrders');

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
										console.log(img);

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
												{(e.price * dollarRate)
													.toString()
													.replace(
														/\B(?=(\d{3})+(?!\d))/g,
														' '
													)}
											</Text>
										</View>
									</View>
									{e.status === 1 ? (
										<TouchableOpacity onPress={onNextPress}>
											<View style={styles.button}>
												<Text style={styles.colorText}>
													{strings.leaveFeedback}
												</Text>
											</View>
										</TouchableOpacity>
									) : // <View style={styles.mt12}>
									// 	<Text style={styles.mt13}>
									// 		{'ОПЛАТИТЬ'}
									// 	</Text>
									// </View>
									null}
								</View>
							);
						})}
				</View>
			</ScrollView>
		</ProfileLayout>
	);
};

export default MyOrdersView;
