import { useNavigation } from '@react-navigation/core';
import { ChevronRightIcon } from 'assets/icons/icons';
import DefaultButton from 'components/general/DefaultButton';
import DefaultInput from 'components/general/DefaultInput';
import { Routes } from 'constants/routes';
import { strings } from 'locales/locales';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { requests } from 'api/requests';
import { selectUser, setUserPhone } from 'store/slices/userSlice';
import { useAppSelector } from 'utils/hooks';
import { styles } from './style';
import MaskInput from 'react-native-mask-input';
import { colors } from 'constants/colors';

interface ILoginViewProps {}

const LoginView = ({}: ILoginViewProps) => {
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
			let res = await requests.auth.requestLogin(
				'998' + user.userData?.phone || ''
			);
		} catch (error) {
			alert('Что-то пошло не так');
			return;
		}
		setLoading(false);
		//@ts-ignore
		navigation.navigate(Routes.VERIFICATION);
	};
	let onSkipPress = () => {
		//@ts-ignore
		navigation.navigate(Routes.TABS);
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

	return (
		<ScrollView style={styles.container}>
			<View style={styles.top}>
				<View style={styles.mt20}>
					<View style={styles.mt12}>
						<Text style={styles.textAuth}>
							{strings.authorization}
						</Text>
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
				</View>
			</View>
			<View style={styles.center}>
				<DefaultButton
					text={strings.toComeIn}
					marginDisabled
					onPress={onNextPress}
					loading={loading}
				/>
			</View>
			<TouchableOpacity style={styles.viewAll}>
				<Text onPress={onSkipPress} style={styles.textView}>
					{strings.skip}
				</Text>
				<ChevronRightIcon size={12} />
			</TouchableOpacity>
			<View style={styles.bottom}>
				<Text style={styles.text3}>izle</Text>
				<View>
					<Text style={styles.text4}>
						{strings.byLoggingInYouAgreeToOur}
					</Text>
					<Text style={styles.text5}>{strings.termsOfUse}</Text>
				</View>
			</View>
		</ScrollView>
	);
};

export default LoginView;
