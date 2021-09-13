import React from 'react';

import { Text, View } from 'react-native';
import ProfileLayout from '../ProfileLayout';

import { styles } from './style';
import { strings } from 'locales/locales';

const AboutAppView = () => {
	return (
		<ProfileLayout headerTitle={strings.aboutApp || ''}>
			<View style={styles.container}>
				<Text>AboutAppView</Text>
			</View>
		</ProfileLayout>
	);
};

export default AboutAppView;
