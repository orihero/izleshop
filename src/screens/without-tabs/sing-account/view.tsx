import React from 'react';
import { Text, View, } from 'react-native'; 

import ProfileLayout from '../ProfileLayout';
import { styles } from './stlye';
import { strings } from 'locales/locales';


const SingAccountView = () => {
	return (
		<ProfileLayout headerTitle={strings.singAccount || ''}>
			<View style={styles.container}>
				<Text style={styles.text}>Hello</Text>
			</View>
		</ProfileLayout>
	);
};

export default SingAccountView;