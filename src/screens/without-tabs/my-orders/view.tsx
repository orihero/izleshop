import React from 'react';

import { Text, View } from 'react-native';
import HorizontalItem from 'components/special/HorizontalItem';
import ProfileLayout from '../ProfileLayout';

import { styles } from './style';
import { strings } from 'locales/locales';
import { orderItems } from 'mockup/data';

const MyOrdersView = () => {
	return (
		<ProfileLayout headerTitle={strings.myOrders || ''}>
			<View style={styles.container}>
				<View style={styles.mt10}>
					<Text style={styles.text}>{'10 апрель 19:39'}</Text>
					{orderItems.map((e, i) => (
						<View key={i} style={styles.mt10}>
							<HorizontalItem hasRating item={e} />
						</View>
					))}
				</View>
			</View>
		</ProfileLayout>
	);
};

export default MyOrdersView;
