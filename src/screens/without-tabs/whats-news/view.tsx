import React from 'react';
import { ScrollView, Text, TouchableOpacity, View, Image} from 'react-native'; 

import ProfileLayout from '../ProfileLayout';
import { styles } from './style';
import { strings } from 'locales/locales';



const WhatsNewsView = () => {
	return (
		<ProfileLayout headerTitle={strings.viewAll || ''}>
			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ paddingBottom: 20 }}
			>
				<View style={styles.container}>
						<View style={styles.box}>
							<Image
								style={styles.img}
								source={require('assets/images/image16.png')}
							/>
						<Text style={styles.text}>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, nihil aut? Molestiae sequi deserunt magnam suscipit, placeat nobis autem natus repellat, veritatis vero illo totam dolores provident optio amet explicabo.
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, voluptas? Exercitationem libero iure temporibus consequatur, officiis eius sit, eos earum dolorem, incidunt cupiditate eum cum quia quisquam laudantium recusandae blanditiis.
						</Text>
						</View>
				</View>
			</ScrollView>
		</ProfileLayout>
	);
};

export default WhatsNewsView;