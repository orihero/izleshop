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
					<Text style={styles.text}>
						Главное преимущество нашей компании, которая занимается
						поставками бытовой техники и электроники в Узбекистане –
						многолетний опыт работы и заслуженное доброе имя. С
						момента своего развития интернет-магазин IzleShop и его
						команда неустанно следит за тенденциями спроса
						потребительского рынка, что дает нам возможность всегда
						быть в курсе самых последних технологий и инновационных
						решений. Специалисты компании внимательно изучают
						желания наших клиентов, поэтому ресурс постоянно
						обновляется качественными новинками, имеющими доступную
						стоимость.
					</Text>
				</View>
			</View>
		</ProfileLayout>
	);
};

export default AboutUsView;
