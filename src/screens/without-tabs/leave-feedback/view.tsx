import { useNavigation, useRoute } from '@react-navigation/core';
import axios from 'axios';
import DefaultButton from 'components/general/DefaultButton';
import OrderItem from 'components/special/OrderItem';
import Rating from 'components/special/Rating';
import { Routes } from 'constants/routes';
import { strings } from 'locales/locales';
import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { requests } from 'api/requests';
import { selectUser } from 'store/slices/userSlice';
import { useAppSelector } from 'utils/hooks';
import ProfileLayout from '../ProfileLayout';
import { styles } from './style';

const LeaveFeedbackView = () => {
	const [loading, setLoading] = useState(false);
	let navigation = useNavigation();
	let user = useAppSelector(selectUser);
	const [message, setMessage] = useState('');
	let dispatch = useDispatch();
	let { orderItem } = useRoute().params || {};
	console.log({ orderItem });

	let onNextPress = async () => {
		let request = {
			user_name: user.userData?.first_name || '',
			product_id: orderItem.product_id,
			message,
		};
		console.log(request);

		try {
			setLoading(true);
			let response = await requests.product.createReview(request);
		} catch (error) {
			console.error(error);
		}
		Alert.alert(strings.warning, strings.setReviews, [
			{
				// onPress: () => navigation.navigate(Routes.TABS),
				onPress: () => navigation.goBack(),
			},
		]);
		setLoading(false);
		//@ts-ignore
	};
	return (
		<ProfileLayout headerTitle={strings.leaveFeedbacks || ''}>
			<View style={styles.container}>
				<View style={styles.header}>
					{/* {orderItems?.map((e, i) => ( */}
					<View style={styles.mt10}>
						<OrderItem item={orderItem} />
					</View>
					{/* ))} */}
				</View>
				<View style={styles.box}>
					<Text style={styles.text}>{strings.yourMark}</Text>
					<View style={styles.rating}>
						<Rating size={24} />
					</View>
					<View style={styles.numberBox}>
						<Text style={styles.number}>3/</Text>
						<Text style={styles.numbers}>5</Text>
					</View>
				</View>
				<View style={styles.input}>
					<View style={styles.textBox}>
						<Text style={styles.help}>Отзыв </Text>
						<Text style={styles.size}>(не обязательно)</Text>
					</View>
					<TextInput
						value={message}
						onChangeText={(e) => setMessage(e)}
						style={styles.textInput}
						placeholder={'Вы можете оставить отзыв (до 1000 букв)'}
					/>
				</View>
				<View style={styles.button}>
					<DefaultButton
						loading={loading}
						text={strings.leaveFeedbacks}
						marginDisabled
						onPress={onNextPress}
					/>
				</View>
			</View>
		</ProfileLayout>
	);
};

export default LeaveFeedbackView;
