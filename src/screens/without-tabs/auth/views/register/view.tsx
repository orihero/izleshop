import React, { useState } from 'react';

import { View, Text,  TouchableOpacity } from 'react-native';
import DefaultButton from 'components/general/DefaultButton';
import DefaultInput from 'components/general/DefaultInput';

import { styles } from './style';
import { strings } from 'locales/locales';
import { ChevronIcon } from 'assets/icons/icons';
import LoginView from '../login/view';

const RegisterView = () => {
	const [phone, setPhone] = useState('');

	return (
		<View style={styles.container}>
			<View style={styles.top}>
				<View style={styles.mt20}>
					<View style={styles.mt12}>
						<DefaultInput  value={phone} onChange={setPhone} />
					</View>
				</View>
			</View>
			<View style={styles.center}>
				<DefaultButton
					text={strings.toComeIn}
					marginDisabled
					// onPress={onNextPress}
				/>
			</View>
			{/* <TouchableOpacity style={styles.viewAll}>
							<Text
								style={styles.textView}>
								{strings.skip}
							</Text>
							<ChevronIcon size={12}/>
						</TouchableOpacity> */}
			<View style={styles.bottom}>
				<Text style={styles.text3}>izle</Text>
				{/* <View>
					<Text style={styles.text4}>
						{strings.byLoggingInYouAgreeToOur}
					</Text>
					<Text style={styles.text5}>{strings.termsOfUse}</Text>
				</View> */}
			</View>
		</View>
	);
};

export default RegisterView;
