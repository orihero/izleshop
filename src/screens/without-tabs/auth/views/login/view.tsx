import React from 'react';

import { View, Text } from 'react-native';
import DefaultInput from 'components/general/DefaultInput';
import DefaultButton from 'components/general/DefaultButton';

import { styles } from './style';
import { strings } from 'locales/locales';

interface ILoginViewProps {
	phone: string;
	setPhone: (e: string) => void;
	password: string;
	setPassword: (e: string) => void;
	onPress: () => void;
}

const LoginView = ({
	phone,
	setPhone,
	password,
	setPassword,
	onPress,
}: ILoginViewProps) => {
	return (
		<View style={styles.container}>
			<View style={styles.top}>
				<View style={styles.mt20}>
					<Text
						style={styles.text1}
					>{`${strings.phoneNumber}*`}</Text>
					<View style={styles.mt12}>
						<DefaultInput value={phone} onChange={setPhone} />
					</View>
				</View>
				<View style={styles.mt20}>
					<Text
						style={styles.text1}
					>{`${strings.enterPassword}*`}</Text>
					<View style={styles.mt12}>
						<DefaultInput
							value={password}
							onChange={setPassword}
							isPassword
						/>
					</View>
				</View>
				<View style={styles.mt20}>
					<Text style={styles.text2}>{strings.forgotPassword}</Text>
				</View>
			</View>
			<View style={styles.center}>
				<DefaultButton
					text={strings.toComeIn}
					marginDisabled
					onPress={onPress}
				/>
			</View>
			<View style={styles.bottom}>
				<Text style={styles.text3}>izle</Text>
				<View>
					<Text style={styles.text4}>
						{strings.byLoggingInYouAgreeToOur}
					</Text>
					<Text style={styles.text5}>{strings.termsOfUse}</Text>
				</View>
			</View>
		</View>
	);
};

export default LoginView;
