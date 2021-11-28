import React from 'react';

import { Text, View, Image } from 'react-native';
import ProfileLayout from '../ProfileLayout';

import { styles } from './style';
import { strings } from 'locales/locales';

const AboutAppView = () => {
	return (
		<ProfileLayout headerTitle={strings.aboutApp || ''}>
			<View style={styles.container}>
				<View style={styles.imgBox}>
					<Image
						style={styles.img}
						source={require('../../../assets/images/img12.png')}
					/>
				</View>
				<View style={styles.versionBox}>
					<Text style={styles.version}>{strings.version} 1.5</Text>
				</View>
			</View>
		</ProfileLayout>
	);
};

export default AboutAppView;
