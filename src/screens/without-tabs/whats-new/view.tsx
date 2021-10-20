import React from 'react';
import { Image, ScrollView, Text, View, } from 'react-native';

import ProfileLayout from '../ProfileLayout';
import { styles } from './style';
import { strings } from 'locales/locales';


const WahatsNewView = () => {
	return (
		<ProfileLayout headerTitle={strings.whatsNew || ''}>
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
				</View>
				<View style={styles.box}>
					<Image
						style={styles.img}
						source={require('assets/images/image17.png')}
					/>
				</View>
				<View style={styles.box}>
					<Image
						style={styles.img}
						source={require('assets/images/image18.png')}
					/>
				</View>
			</View>
			</ScrollView>
		</ProfileLayout>
	);
};

export default WahatsNewView;