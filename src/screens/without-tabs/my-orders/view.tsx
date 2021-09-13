import React from 'react';

import { Text, View } from 'react-native';
import ProfileLayout from '../ProfileLayout';

import { styles } from './style';
import { strings } from 'locales/locales';

const MyOrdersView = () => {
	return (
		<ProfileLayout headerTitle={strings.myOrders || ''}>
			<View style={styles.container}>
				<Text>MyOrdersView</Text>
			</View>
		</ProfileLayout>
	);
};

export default MyOrdersView;
