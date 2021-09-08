import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback, ScrollView } from 'react-native';
import Header from 'components/navigation/Header';
import DefaultButton from 'components/general/DefaultButton';

import { styles } from './style';
import { strings } from 'locales/locales';
import { colors } from 'constants/colors';
import { CreditCardIcon, WalletIcon } from 'assets/icons/icons';

const arr = [1, 2];

const TmpScreenView = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	const onPress: () => void = () => {
		console.log('Hi');
	};

	return (
		<ScrollView
			style={styles.container}
			showsVerticalScrollIndicator={false}
		>
			<Header title={strings.cart} />
			<View style={styles.top}>
				<View style={styles.topChild}>
					<Text style={styles.text1}>{strings.yourOrder}</Text>
					<Text style={styles.text1}>
						{`${3} ${strings.products}`}
					</Text>
				</View>
				<View style={styles.topChild}>
					<Text style={styles.text2}>{`${strings.sum}:`}</Text>
					<Text style={styles.text3}>
						{`37 500 000 ${strings.currency}`}
					</Text>
				</View>
				<View style={styles.topChild}>
					<Text style={styles.text2}>{`${strings.sale}:`}</Text>
					<Text style={styles.text3}>{`${25}%`}</Text>
				</View>
				<View style={styles.topChild}>
					<Text style={styles.text4}>{`${strings.outcome}:`}</Text>
					<Text style={styles.text5}>
						{`37 000 000 ${strings.currency}`}
					</Text>
				</View>
			</View>
			<View style={styles.titleBox}>
				<Text style={styles.text1}>{strings.paymentMethod}</Text>
			</View>
			<TouchableWithoutFeedback onPress={() => setActiveIndex(0)}>
				<View style={styles.payBox}>
					<View style={styles.rowItemsCenter}>
						<WalletIcon
							size={28}
							color={
								activeIndex === 0
									? colors.blue
									: colors.lightGray2
							}
						/>
						<Text
							style={{
								...styles.text6,
								marginLeft: 15 || undefined,
								color:
									activeIndex === 0
										? colors.blue
										: colors.lightGray2,
							}}
						>
							{strings.cash}
						</Text>
					</View>
					<View
						style={{
							...styles.tmpBox1,
							backgroundColor:
								activeIndex === 0
									? colors.blue
									: colors.lightGray2,
						}}
					/>
				</View>
			</TouchableWithoutFeedback>
			<TouchableWithoutFeedback onPress={() => setActiveIndex(1)}>
				<View style={styles.payBox}>
					<View style={styles.rowItemsCenter}>
						<CreditCardIcon
							size={30}
							color={
								activeIndex === 0
									? colors.blue
									: colors.lightGray2
							}
						/>
						<Text
							style={{
								...styles.text6,
								marginLeft: 15 || undefined,
								color:
									activeIndex === 1
										? colors.blue
										: colors.lightGray2,
							}}
						>
							{strings.terminal}
						</Text>
					</View>
					<View
						style={{
							...styles.tmpBox1,
							backgroundColor:
								activeIndex === 1
									? colors.blue
									: colors.lightGray2,
						}}
					/>
				</View>
			</TouchableWithoutFeedback>
			<TouchableWithoutFeedback onPress={() => setActiveIndex(2)}>
				<View style={styles.payBox}>
					<View style={styles.rowItemsCenter}>
						<View
							style={{
								...styles.tmpBox2,
								backgroundColor:
									activeIndex === 2
										? colors.blue
										: colors.lightGray2,
							}}
						/>
						<Text
							style={{
								...styles.text6,
								marginLeft: 15 || undefined,
								color:
									activeIndex === 2
										? colors.blue
										: colors.lightGray2,
							}}
						>
							{strings.onlinePayment}
						</Text>
					</View>
					<View
						style={{
							...styles.tmpBox1,
							backgroundColor:
								activeIndex === 2
									? colors.blue
									: colors.lightGray2,
						}}
					/>
				</View>
			</TouchableWithoutFeedback>
			<View style={{ marginVertical: 25 }}>
				{activeIndex === 2 ? (
					<View style={styles.inbox}>
						{arr.map((e, i) => (
							<View key={i} style={styles.inboxChild} />
						))}
					</View>
				) : null}
			</View>
			<DefaultButton text={strings.order} onPress={onPress} />
			<View style={styles.bottom}>
				<View style={{ borderBottomWidth: 1 }}>
					<Text style={styles.text7}>{strings.backToShopping}</Text>
				</View>
			</View>
			<View style={{ marginBottom: 30 }} />
		</ScrollView>
	);
};

export default TmpScreenView;
