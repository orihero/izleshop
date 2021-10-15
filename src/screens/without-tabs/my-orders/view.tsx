import React from 'react';

import { ScrollView, Text, View } from 'react-native';
import HorizontalItem from 'components/special/HorizontalItem';
import ProfileLayout from '../ProfileLayout';
import OrderItem from 'components/special/OrderItem';

import { styles } from './style';
import { strings } from 'locales/locales';
import { orderItems } from 'mockup/data';

const MyOrdersView = () => {
	return (
		<ProfileLayout headerTitle={strings.myOrders || ''}>
			<ScrollView>
				<View style={styles.container}>
					<View style={styles.boxOne}>
						<View style={styles.textBox}>
							<Text style={styles.text}>{strings.orderNumber} 1212121212121</Text>
							<Text style={styles.text}>{strings.orderTime} 2020-12-25 11:48</Text>
						</View>
						{orderItems.map((e, i) => (
							<View key={i} style={styles.mt10}>
								<OrderItem item={e} />
							</View>
						))}
						<View style={styles.boxTwo}>
							<View>
								<Text style={styles.textColumn}>{strings.status}</Text>
								<Text style={styles.textColumn}>{strings.quantity}</Text>
								<Text style={styles.textColumn}>{strings.outcome}</Text>
							</View>
							<View style={styles.row}>
								<Text style={styles.textRow}>{strings.reviewaAwaiting}</Text>
								<Text style={styles.textRow}>1</Text>
								<Text style={styles.textRow}>3 760 000 </Text>
							</View>
						</View>
					</View>
					<View style={styles.box}>
						<View style={styles.textBox}>
							<Text style={styles.text}>{strings.orderNumber} 1212121212121</Text>
							<Text style={styles.text}>{strings.orderTime} 2020-12-25 11:48</Text>
						</View>
						{orderItems.map((e, i) => (
							<View key={i} style={styles.mt10}>
								<OrderItem item={e} />
							</View>
						))}
						<View style={styles.boxTwo}>
							<View>
								<Text style={styles.textColumn}>{strings.status}</Text>
								<Text style={styles.textColumn}>{strings.quantity}</Text>
								<Text style={styles.textColumn}>{strings.outcome}</Text>
							</View>
							<View style={styles.row}>
								<Text style={styles.textRow}>{strings.reviewaAwaiting}</Text>
								<Text style={styles.textRow}>1</Text>
								<Text style={styles.textRow}>3 760 000 </Text>
							</View>
						</View>
						<View style={styles.button}>
							<Text style={styles.colorText}>{strings.leaveFeedback}</Text>
						</View>
					</View>
					<View style={styles.boxs}>
						<View style={styles.textBox}>
							<Text style={styles.text}>{strings.orderNumber} 1212121212121</Text>
							<Text style={styles.text}>{strings.orderTime} 2020-12-25 11:48</Text>
						</View>
						{orderItems.map((e, i) => (
							<View key={i} style={styles.mt10}>
								<OrderItem item={e} />
							</View>
						))}
						<View style={styles.boxTwo}>
							<View>
								<Text style={styles.textColumn}>{strings.status}</Text>
								<Text style={styles.textColumn}>{strings.quantity}</Text>
								<Text style={styles.textColumn}>{strings.outcome}</Text>
							</View>
							<View style={styles.row}>
								<Text style={styles.textRow}>{strings.reviewaAwaiting}</Text>
								<Text style={styles.textRow}>1</Text>
								<Text style={styles.textRow}>3 760 000 </Text>
							</View>
						</View>
						<View style={styles.buttons}>
							<Text style={styles.colorTexts}>{strings.pay}</Text>
						</View>
					</View>
				</View>
			</ScrollView>
		</ProfileLayout>
	);
};

export default MyOrdersView;
