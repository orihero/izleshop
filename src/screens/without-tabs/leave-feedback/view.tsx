import React from 'react';
import { Image, Text, View, } from 'react-native';

import ProfileLayout from '../ProfileLayout';
import { styles } from './style';
import { strings } from 'locales/locales';
import { orderItems } from 'mockup/data';
import OrderItem from 'components/special/OrderItem';



const LeaveFeedbackView = () => {
	return (
		<ProfileLayout headerTitle={strings.leaveFeedbacks || ''}>
			<View style={styles.container}>
				<View style={styles.header}>
				{orderItems.map((e, i) => (
							<View key={i} style={styles.mt10}>
								<OrderItem item={e} />
							</View>
						))}
				</View>
			</View>
		</ProfileLayout>
	);
};

export default LeaveFeedbackView;