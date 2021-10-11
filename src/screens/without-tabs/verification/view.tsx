import { useNavigation } from '@react-navigation/core';
import DefaultButton from 'components/general/DefaultButton';
import DefaultInput from 'components/general/DefaultInput';
import { Routes } from 'constants/routes';
import { strings } from 'locales/locales';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { selectUser } from 'store/slices/userSlice';
import { useAppSelector } from 'utils/hooks';
import { styles } from './style';

const VerificationView = () => {
	let navigation = useNavigation();
	let user = useAppSelector(selectUser);
	// let dispatch = useDispatch()
	// let setPhone = (num: string) => { dispatch(setUserPhone(num)) }
	let onNextPress = () => {
		navigation.navigate(Routes.REGISTER);
	};
	const [code, setCode] = useState('');

	return (
		<View style={styles.container}>
			<View style={styles.top}>
				<View style={styles.mt20}>
					<View style={styles.mt12}>
						<Text style={styles.textConfirmation}>
							{strings.confirmation}
						</Text>
						<DefaultInput
							placeholder={'Код с подтверждение'}
							value={code}
							onChange={setCode}
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
			<View style={styles.bottom}>
				<Text style={styles.text3}>izle</Text>
			</View>
		</View>
	);
};

export default VerificationView;
