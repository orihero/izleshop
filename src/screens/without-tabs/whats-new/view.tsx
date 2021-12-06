import React from 'react';
import {
	Image,
	Linking,
	ScrollView,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

import ProfileLayout from '../ProfileLayout';
import { styles } from './style';
import { strings } from 'locales/locales';
import { useNavigation, useRoute } from '@react-navigation/core';
import { Routes } from 'constants/routes';

interface IWhatsNewViewProps {
	password: string;
	setPassword: (e: string) => void;
	onPress: () => void;
	navigate: () => void;
	news: any;
}

const WhatsNewView = ({ news }: IWhatsNewViewProps) => {
	let navigation = useNavigation();
	let onNextPress = (item) => {
		//@ts-ignore
		navigation.navigate(Routes.WHATS_NEWS, { item });
	};
	return (
		<ProfileLayout headerTitle={strings.whatsNew || ''}>
			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ paddingBottom: 20 }}
			>
				<View style={styles.container}>
					{news.map((e) => {
						return (
							<TouchableOpacity onPress={() => onNextPress(e)}>
								<View style={styles.box}>
									<Image
										style={styles.img}
										source={{ uri: e.image_url }}
									/>
								</View>
							</TouchableOpacity>
						);
					})}
				</View>
			</ScrollView>
		</ProfileLayout>
	);
};

export default WhatsNewView;
