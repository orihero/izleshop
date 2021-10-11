import { useNavigation } from '@react-navigation/core';
import { ChevronIcon } from 'assets/icons/icons';
import DefaultButton from 'components/general/DefaultButton';
import DefaultInput from 'components/general/DefaultInput';
import { Routes } from 'constants/routes';
import { strings } from 'locales/locales';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { selectUser, setUserPhone } from 'store/slices/userSlice';
import { useAppSelector } from 'utils/hooks';
import { styles } from './style';

interface ILoginViewProps {
	password: string;
	setPassword: (e: string) => void;
	onPress: () => void;
	navigate: () => void;
}

const LoginView = ({
	password,
	setPassword,
	onPress,
	navigate,
}: ILoginViewProps) => {
	let navigation = useNavigation();
	let user = useAppSelector(selectUser);
	let dispatch = useDispatch();
	let setPhone = (num: string) => {
		dispatch(setUserPhone(num));
	};
	let onNextPress = () => {
		navigation.navigate(Routes.VERIFICATION);
	};
	let onSkipPress = () => {
		navigation.navigate(Routes.TABS);
	};
	console.log(user);

	return (
		<ScrollView style={styles.container}>
			<View style={styles.top}>
				<View style={styles.mt20}>
					<View style={styles.mt12}>
						<Text style={styles.textAuth}>
							{strings.authorization}
						</Text>
						<DefaultInput
							value={user.phone}
							onChange={setPhone}
							keyboardType={'numeric'}
						/>
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
				<Text onPress={onSkipPress} style={styles.textView}>
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
