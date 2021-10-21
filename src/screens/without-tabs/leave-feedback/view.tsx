import React from 'react';
import { Image, Text, TextInputComponent, View, TextInput, TouchableOpacity } from 'react-native';

import ProfileLayout from '../ProfileLayout';
import { styles } from './style';
import { strings } from 'locales/locales';
import { orderItems } from 'mockup/data';
import OrderItem from 'components/special/OrderItem';
import Rating from 'components/special/Rating';
import DefaultButton from 'components/general/DefaultButton';
import { useNavigation } from '@react-navigation/core';
import { useAppSelector } from 'utils/hooks';
import { selectUser } from 'store/slices/userSlice';
import { useDispatch } from 'react-redux';
import { Routes } from 'constants/routes';




const LeaveFeedbackView = () => {
	let navigation = useNavigation();
	let user = useAppSelector(selectUser);
	let dispatch = useDispatch();

	let onNextPress = () => {
		//@ts-ignore
		navigation.navigate(Routes.TABS);
	};
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
						style={styles.textInput}
						placeholder={'Вы можете оставить отзыв (до 1000 букв)'}
					/>
				</View>
				<View style={styles.button}>
					<TouchableOpacity>
						<DefaultButton
							text={strings.leaveFeedbacks}
							marginDisabled
							onPress={onNextPress}
						/>
					</TouchableOpacity>
				</View>
			</View>
		</ProfileLayout>
	);
};

export default LeaveFeedbackView;