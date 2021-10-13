import React from 'react';

import { Text, View } from 'react-native';

import { styles } from './style';
import { strings } from 'locales/locales';
import ProfileLayout from '../ProfileLayout';


const AboutUsView = () => {
	return (
		<ProfileLayout headerTitle={strings.aboutUs || ''}>
			<View style={styles.container}>
				<View style={styles.inner}>
					<Text>{`Текст тест Текст тест Текст тест Текст тест Текст тест Текст тест Текст тест Текст тест Текст тест Текст тест Текст тест Текст тест Текст тест Текст тест Текст тест Текст тест
						
Сайт: t.me/asdad

Текст тест Текст тест Текст тест Текст тест Текст тест Текст тест Текст тест Текст тест Текст тест Текст тест Текст тест Текст тест Текст тест Текст тест Текст тест Текст тест`}
					</Text>
				</View>
			</View>
		</ProfileLayout>
	);
};

export default AboutUsView;
