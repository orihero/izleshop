import React from 'react';
import { Text, View, } from 'react-native'; 

import ProfileLayout from '../ProfileLayout';
import { styles } from './style';
import { strings } from 'locales/locales';


const HelpSupportView = () => {
	return (
		<ProfileLayout headerTitle={strings.helpSupport || ''}>
			<View style={styles.container}>
				<Text style={styles.text}>Hello</Text>
			</View>
		</ProfileLayout>
	);
};

export default HelpSupportView;