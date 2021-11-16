import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

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
}

const WhatsNewView = ({ }: IWhatsNewViewProps) => {
	let navigation = useNavigation();
	let route = useRoute();
	let { banners = [] } = route?.params || {}
	let onNextPress = (id: number) => {
		//@ts-ignore
		navigation.navigate(Routes.TABS, { screen: Routes.HOME_STACK, params: { screen: Routes.PRODUCT_DETAILS, params: { id } } });
	};
	console.log({ route });
	return (
		<ProfileLayout headerTitle={strings.whatsNew || ''}>
			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ paddingBottom: 20 }}
			>
				<View style={styles.container}>
					{banners.map(e => {
						return <TouchableOpacity onPress={() => onNextPress(e.product_id)}>
							<View style={styles.box}>
								<Image
									style={styles.img}
									source={{ uri: e.image }}
								/>
							</View>
						</TouchableOpacity>
					})}
				</View>
			</ScrollView>
		</ProfileLayout>
	);
};

export default WhatsNewView;
