import React from 'react';

import { useNavigation } from '@react-navigation/core';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import DefaultInput from 'components/general/DefaultInput';
import DefaultButton from 'components/general/DefaultButton';

import { styles } from './style';
import { strings } from 'locales/locales';
import { ChevronIcon } from 'assets/icons/icons';
import navigation from 'components/navigation/Header'
import { Routes } from 'constants/routes'
import { useAppSelector } from 'utils/hooks';
import { selectUser, setUserPhone } from 'store/slices/userSlice';
import { useDispatch } from 'react-redux';


interface ILoginViewProps {
	password: string;
	setPassword: (e: string) => void;
	onPress: () => void;
	navigate: () => void
}

const LoginView = ({
	password,
	setPassword,
	onPress,
	navigate
}: ILoginViewProps) => {
	let navigation = useNavigation();
	let user = useAppSelector(selectUser);
	let dispatch = useDispatch()
	let setPhone = (num: string) => { dispatch(setUserPhone(num)) }
	let onNextPress = () => {
		navigation.navigate(Routes.VERIFICATION);
	};
	let onSkipPress = () => {
		navigation.navigate(Routes.TABS);
	};
	return (
		<ScrollView
			style={styles.container}
		>
			<View style={styles.top}>
				<View style={styles.mt20}>
					<View style={styles.mt12}>
						<Text style={styles.textAuth}>{strings.authorization}</Text>
						<DefaultInput value={user.phone} onChange={setPhone} keyboardType={'numeric'} />
					</View>
				</View>
			</View>
			<View style={styles.center}>
				<DefaultButton
					text={strings.toComeIn}
					marginDisabled
					onPress={onNextPress}
				/>
			</View>
			<TouchableOpacity style={styles.viewAll}>
				<Text
					onPress={onSkipPress}
					style={styles.textView}>
					{strings.skip}
				</Text>
				<ChevronIcon size={12} />
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
