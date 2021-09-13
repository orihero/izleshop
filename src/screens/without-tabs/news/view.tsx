import React from 'react';

import { Text, View } from 'react-native';
import ProfileLayout from '../ProfileLayout';

import { styles } from './style';
import { strings } from 'locales/locales';

const NewsView = () => {
	return (
		<ProfileLayout headerTitle={strings.news || ''}>
			<View style={styles.container}>
				<Text>NewsView</Text>
			</View>
		</ProfileLayout>
	);
};

export default NewsView;
