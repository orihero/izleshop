import React, { useState } from 'react';
import { Text, View } from 'react-native';

import { styles } from './stlye';
import { strings } from 'locales/locales';
import ProfileLayout from '../ProfileLayout';
import { useNavigation } from '@react-navigation/core';
import { useAppSelector } from 'utils/hooks';
import { useDispatch } from 'react-redux';
import { selectUser, setUserPhone } from 'store/slices/userSlice';
import PhoneInput from 'components/general/PhoneInput';
import { PhoneIcon } from 'assets/icons/icons';
import { colors } from 'constants/colors';
import DefaultButton from 'components/general/DefaultButton';
import { Routes } from 'constants/routes';
import MaskInput from 'react-native-mask-input';
import { requests } from 'api/requests';

interface IPhoneNumberViewProps {
	password: string;
	setPassword: (e: string) => void;
	onPress: () => void;
	navigate: () => void;
}

const PhoneNumberView = ({}: IPhoneNumberViewProps) => {
	let navigation = useNavigation();
	let user = useAppSelector(selectUser);
	let dispatch = useDispatch();
	let setPhone = (num: string) => {
		dispatch(setUserPhone(num));
	};

	const [loading, setLoading] = useState(false);
	let onNextPress = async () => {
		if (loading) {
			return;
		}
		setLoading(true);
		try {
			let res = await requests.auth.editProfile(user?.userData?.id, {
				...user.userData,
				name: 'user.userData?.first_name',
				phoneNumber: user.userData?.phone,
			});
			console.log({ res: res.data });
		} catch (error) {}
		setLoading(false);
		//@ts-ignore
		navigation.navigate(Routes.SETTINGS);
	};
	const [value, setValue] = React.useState('');

	const localPhoneMask = [
		'+',
		'9',
		'9',
		'8',
		'(',
		/\d/,
		/\d/,
		')',
		' ',
		/\d/,
		/\d/,
		/\d/,
		' ',
		/\d/,
		/\d/,
		' ',
		/\d/,
		/\d/,
	];
	const [code, setCode] = useState('');

	return (
		<ProfileLayout headerTitle={strings.phoneNamber || ''}>
			<View style={styles.container}>
				<View style={styles.phoneInput}>
					<View style={styles.textBox}>
						<Text style={styles.text}>{strings.phoneNamber}</Text>
					</View>
					<View style={styles.mt10}>
						<MaskInput
							value={value}
							onChangeText={(masked, unmasked) => {
								setValue(masked);
								setPhone(unmasked);
							}}
							mask={localPhoneMask}
							onFocus={() => setValue('+998')}
							keyboardType="numeric"
							placeholderTextColor={colors.black}
							style={styles.input}
						/>
					</View>
				</View>
				<View style={styles.center}>
					<DefaultButton
						text={strings.save}
						marginDisabled
						onPress={onNextPress}
						loading={loading}
					/>
				</View>
			</View>
		</ProfileLayout>
	);
};

export default PhoneNumberView;
