import { useNavigation, useRoute } from '@react-navigation/core';
import axios from 'axios';
import DefaultButton from 'components/general/DefaultButton';
import OrderItem from 'components/special/OrderItem';
import Rating from 'components/special/Rating';
import { Routes } from 'constants/routes';
import { strings } from 'locales/locales';
import React, { useCallback, useEffect, useState } from 'react';
import {
	Alert,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	Image,
	Platform,
	PermissionsAndroid,
	ScrollView,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { requests } from 'api/requests';
import { selectUser } from 'store/slices/userSlice';
import { useAppSelector } from 'utils/hooks';
import ProfileLayout from '../ProfileLayout';
import { styles } from './style';

import * as ImagePicker from 'react-native-image-picker';

import { ImagePickerHeader } from '../components/image-picker-header';
import { ImagePickerModal } from '../components/image-picker-modal';
import { ImagePickerAvatar } from '../components/image-picker-avatar';

const LeaveFeedbackView = () => {
	const [loading, setLoading] = useState(false);
	let navigation = useNavigation();
	let user = useAppSelector(selectUser);
	const [message, setMessage] = useState('');
	let dispatch = useDispatch();
	let { orderItem } = useRoute().params || {};

	let onNextPress = async () => {
		let request = {
			user_name: user.userData?.first_name || '',
			product_id: orderItem.product_id,
			message,
			image: !!pickerResponse && pickerResponse?.assets[0],
		};

		console.log(request);

		try {
			setLoading(true);
			let response = await requests.product.createReview(request);
			console.log(response.data);
		} catch (error) {
			console.error(error, 'error in creating review');
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

	const [pickerResponse, setPickerResponse] = useState<ImagePicker.Asset>({});
	const [visible, setVisible] = useState(false);

	const onImageLibraryPress = useCallback(() => {
		const options = {
			selectionLimit: 1,
			mediaType: 'photo',
			includeBase64: true,
		};
		ImagePicker.launchImageLibrary(options, setPickerResponse);
	}, []);

	const onCameraPress = React.useCallback(() => {
		const options = {
			saveToPhotos: true,
			mediaType: 'photo',
			includeBase64: true,
		};
		ImagePicker.launchCamera(options, setPickerResponse);
	}, []);

	const uri = pickerResponse?.assets && pickerResponse.assets[0].uri;
	// const base = pickerResponse?.assets && pickerResponse.assets[0].base64;

	useEffect(() => {
		console.log(pickerResponse);
	}, [pickerResponse]);

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
				<View style={styles.picker}>
					<View style={styles.textBox}>
						<Text style={styles.help}> {strings.foto}</Text>
						<Text style={styles.size}> {strings.necessary}</Text>
					</View>
					<View style={styles.screen}>
						<ImagePickerAvatar
							uri={uri}
							onPress={() => setVisible(true)}
						/>
						<ImagePickerModal
							isVisible={visible}
							onClose={() => setVisible(false)}
							onImageLibraryPress={onImageLibraryPress}
							onCameraPress={onCameraPress}
						/>
					</View>
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
