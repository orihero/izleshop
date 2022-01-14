import React from 'react';

import { Text, View, Image } from 'react-native';

import { styles } from './style';
import { strings } from 'locales/locales';
import ProfileLayout from '../ProfileLayout';

const AboutUsView = () => {
	return (
		<ProfileLayout headerTitle={strings.aboutUs || ''}>
			<View style={styles.container}>
				<Image
					style={styles.img}
					source={require('../../../assets/images/img12.png')}
				/>
				<View style={styles.inner}>
					<Text style={styles.text}>{strings.izleInformation}</Text>
				</View>
			</View>
		</ProfileLayout>
	);
};

export default AboutUsView;
