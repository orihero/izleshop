import React, { useState } from 'react';

import { Text, View } from 'react-native';
import ProfileLayout from '../ProfileLayout';
import DefaultInput from 'components/general/DefaultInput';
import DefaultButton from 'components/general/DefaultButton';

import { styles } from './style';
import { strings } from 'locales/locales';

const MyProfileView = () => {
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [desc, setDesc] = useState('');

	const onPress = () => {};

	return (
		<ProfileLayout
			headerIcon={'avatar'}
			headerTitle={strings.myProfile || ''}
		>
			<View style={styles.container}>
				<View>
					<Text style={styles.text1}>{`${strings.name}*`}</Text>
					<View style={styles.mt12}>
						<DefaultInput value={name} onChange={setName} />
					</View>
				</View>
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
					>{`${strings.personalData}*`}</Text>
					<View style={styles.mt12}>
						<DefaultInput
							isTextArea
							value={desc}
							onChange={setDesc}
						/>
					</View>
				</View>
				<View style={styles.content}>
					<View style={styles.box}>
						<Text style={styles.text2}>{'izle'}</Text>
					</View>
					<DefaultButton
						marginDisabled
						onPress={onPress}
						text={strings.apply}
					/>
				</View>
			</View>
		</ProfileLayout>
	);
};

export default MyProfileView;
