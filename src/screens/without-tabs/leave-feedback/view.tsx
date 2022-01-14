import { useNavigation, useRoute } from '@react-navigation/core';
import { requests } from 'api/requests';
import DefaultButton from 'components/general/DefaultButton';
import OrderItem from 'components/special/OrderItem';
import Rating from 'components/special/Rating';
import { strings } from 'locales/locales';
import React, { useCallback, useEffect, useState } from 'react';
import { Alert, Text, TextInput, View } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import { useDispatch } from 'react-redux';
import { selectUser } from 'store/slices/userSlice';
import { useAppSelector } from 'utils/hooks';
import { ImagePickerAvatar } from '../components/image-picker-avatar';
import { ImagePickerModal } from '../components/image-picker-modal';
import ProfileLayout from '../ProfileLayout';
import { styles } from './style';

const LeaveFeedbackView = () => {
	const [loading, setLoading] = useState(false);
	let navigation = useNavigation();
	let user = useAppSelector(selectUser);
	const [message, setMessage] = useState('');
	let dispatch = useDispatch();
	const [activeCount, setActiveCount] = useState(3);
	let { orderItem } = useRoute().params || {};

	let onNextPress = async () => {
		try {
			let request = {
				user_name: user.userData?.first_name || '',
				product_id: orderItem.product_id,
				message,
				image: !!pickerResponse && pickerResponse?.assets[0],
				rating: activeCount,
			};

			try {
				setLoading(true);
				let response = await requests.product.createReview(request);
			} catch (error) {
				console.error(error.response, 'error in creating review');
			}
			Alert.alert(strings.warning, strings.setReviews, [
				{
					onPress: () => navigation.goBack(),
				},
			]);
			setLoading(false);
		} catch (error) {
			console.error(error);
		}
		//@ts-ignore
	};

	const [pickerResponse, setPickerResponse] = useState<ImagePicker.Asset>({});
	const [visible, setVisible] = useState(false);

	const onImageLibraryPress = useCallback(() => {
		const options = {
			selectionLimit: 1,
			mediaType: 'photo',
		};
		ImagePicker.launchImageLibrary(options, (e) => {
			setPickerResponse(e);
			setVisible(false);
		});
	}, []);

	const onCameraPress = React.useCallback(() => {
		const options = {
			saveToPhotos: true,
			mediaType: 'photo',
		};
		ImagePicker.launchCamera(options, (e) => {
			setPickerResponse(e);
			setPickerResponse(false);
		});
	}, []);

	const uri = pickerResponse?.assets && pickerResponse.assets[0].uri;

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
						<Rating
							{...{ activeCount, setActiveCount }}
							size={24}
						/>
					</View>
				</View>
				<View style={styles.input}>
					<View style={styles.textBox}>
						<Text style={styles.help}>{strings.reviews}</Text>
						{/* <Text style={styles.size}>(не обязательно)</Text> */}
					</View>
					<TextInput
						value={message}
						onChangeText={(e) => setMessage(e)}
						style={styles.textInput}
						placeholder={strings.youCan}
					/>
				</View>
				<View style={styles.picker}>
					<View style={styles.textBox}>
						<Text style={styles.help}> {strings.foto}</Text>
						{/* <Text style={styles.size}> {strings.necessary}</Text> */}
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
