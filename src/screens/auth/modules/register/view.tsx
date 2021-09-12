import React, { useState } from 'react';

import { View, Text } from 'react-native';
import DefaultButton from 'components/general/DefaultButton';
import DefaultInput from 'components/general/DefaultInput';

import { styles } from './style';
import { strings } from 'locales/locales';

const RegisterView = () => {
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [password1, setPassword1] = useState('');
	const [password2, setPassword2] = useState('');

	return (
		<View style={styles.container}>
			<View>
				<View style={styles.mt16}>
					<Text
						style={styles.text1}
					>{`${strings.phoneNumber}*`}</Text>
					<View style={styles.mt12}>
						<DefaultInput value={phone} onChange={setPhone} />
					</View>
				</View>
				<View style={styles.mt16}>
					<Text style={styles.text1}>{`${strings.name}*`}</Text>
					<View style={styles.mt12}>
						<DefaultInput value={name} onChange={setName} />
					</View>
				</View>
				<View style={styles.mt16}>
					<Text
						style={styles.text1}
					>{`${strings.pickPassword}*`}</Text>
					<View style={styles.mt12}>
						<DefaultInput
							value={password1}
							onChange={setPassword1}
							isPassword
						/>
					</View>
				</View>
				<View style={styles.mt16}>
					<Text
						style={styles.text1}
					>{`${strings.repeatPassword}*`}</Text>
					<View style={styles.mt12}>
						<DefaultInput
							value={password2}
							onChange={setPassword2}
							isPassword
						/>
					</View>
				</View>
				<Text style={styles.text2}>{strings.registerPrompt}</Text>
			</View>
			<View>
				<DefaultButton marginDisabled text={strings.create} />
			</View>
		</View>
	);
};

export default RegisterView;
