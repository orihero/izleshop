import React from 'react';
import { Text, View, Image } from 'react-native';

import ProfileLayout from '../ProfileLayout';
import { styles } from './stlye';
import { strings } from 'locales/locales';
import { url } from 'src/api/requests';

export interface OurPartnersViewProps {
	partners: any;
}

const OurPartnersView = ({ partners }: OurPartnersViewProps) => {
	// console.log(partners.image);
	console.log('CJARARARA', partners.image);
	return (
		<ProfileLayout headerTitle={strings.ourPartners || ''}>
			<View style={styles.container}>
				{partners.map((e, i) => (
					<View style={styles.inner} key={i}>
						<Image
							style={styles.imgOne}
							source={{ uri: e.image }}
						/>
						{/* <Text style={styles.textOne}>
							{strings.oraiaFurniture}
						</Text>
						<Text style={styles.text}>
							{`Текст тест Текст тест Текст тест Текст тест Текст тест Текст тест Текст тест Текст тест Текст тест Текст тест Текст тест Текст тест Текст тест Текст Сайт: t.me/asdad`}
						</Text> */}
					</View>
				))}
			</View>
		</ProfileLayout>
	);
};

export default OurPartnersView;
