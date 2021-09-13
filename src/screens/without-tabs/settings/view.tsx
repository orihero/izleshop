import React from 'react';

import { Text, View } from 'react-native';
import ProfileLayout from '../ProfileLayout';

import { styles } from './style';
import { strings } from 'locales/locales';

const SettingsView = () => {
	return (
		<ProfileLayout headerTitle={strings.settings || ''}>
			<View style={styles.container}>
				<Text>SettingsView</Text>
			</View>
		</ProfileLayout>
	);
};

export default SettingsView;
