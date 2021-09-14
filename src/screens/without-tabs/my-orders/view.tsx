import React from 'react';

import { Text, View } from 'react-native';
import OrderItem from 'components/special/OrderItem';
import ProfileLayout from '../ProfileLayout';

import { styles } from './style';
import { strings } from 'locales/locales';

const img1 = require('mockup/images/washing-machine.png');
const img2 = require('mockup/images/phone1.png');

const items = [
	{
		id: 1,
		title: 'Кроссовки Nike air Light 38, 39, 40, .....',
		price: '180 000',
		currency: 'сум',
		rating: 4,
		status: 'В ожидании',
		img: img1,
	},
	{
		id: 2,
		title: 'Кроссовки Nike air Light 38, 39, 40, .....',
		price: '180 000',
		currency: 'сум',
		rating: 4,
		status: 'В ожидании',
		img: img2,
	},
];

const MyOrdersView = () => {
	return (
		<ProfileLayout headerTitle={strings.myOrders || ''}>
			<View style={styles.container}>
				<View style={styles.content}>
					<Text style={styles.text}>{'10 апрель 19:39'}</Text>
					{items.map((e, i) => (
						<OrderItem key={i} item={e} />
					))}
				</View>
			</View>
		</ProfileLayout>
	);
};

export default MyOrdersView;
