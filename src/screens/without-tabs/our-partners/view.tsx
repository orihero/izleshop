import React from 'react';
import { Text, View, Image } from 'react-native';

import ProfileLayout from '../ProfileLayout';
import { styles } from './stlye';
import { strings } from 'locales/locales';

const OurPartnersView = () => {
	return (
		<ProfileLayout headerTitle={strings.ourPartners || ''}>
			<View style={styles.container}>
				<View style={styles.inner}>
					<Image
						style={styles.imgOne}
						source={require('../../../assets/images/imageOne.png')}
					/>
					<Text style={styles.textOne}>{strings.oraiaFurniture}</Text>
					<Text
						style={styles.text}
					>{`Текст тест Текст тест Текст тест Текст тест Текст тест Текст тест Текст тест Текст тест Текст тест Текст тест Текст тест Текст тест Текст тест Текст
Сайт: t.me/asdad`}</Text>
				</View>
				<View style={styles.box}>
					<Image
						style={styles.imgOne}
						source={require('../../../assets/images/imgTwo.png')}
					/>
					<Text style={styles.textOne}>{strings.oraiaFurniture}</Text>
					<Text
						style={styles.text}
					>{`Текст тест Текст тест Текст тест Текст тест Текст тест Текст тест Текст тест  Текст тест Текст тест Текст тест Текст тест Текст тест Текст тест Текст 
Сайт: t.me/asdad`}</Text>
				</View>
			</View>
		</ProfileLayout>
	);
};

export default OurPartnersView;
