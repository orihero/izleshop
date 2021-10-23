import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import ProfileLayout from '../ProfileLayout';
import { styles } from './style';
import { strings } from 'locales/locales';
import { useNavigation } from '@react-navigation/core';
import { Routes } from 'constants/routes';

interface IWhatsNewViewProps {
	password: string;
	setPassword: (e: string) => void;
	onPress: () => void;
	navigate: () => void;
}

const WhatsNewView = ({}: IWhatsNewViewProps) => {
	let navigation = useNavigation();

	let onNextPress = () => {
		//@ts-ignore
		navigation.navigate(Routes.WHATS_NEWS);
	};

	return (
		<ProfileLayout headerTitle={strings.whatsNew || ''}>
			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ paddingBottom: 20 }}
			>
				<View style={styles.container}>
					<TouchableOpacity onPress={onNextPress}>
						<View style={styles.box}>
							<Image
								style={styles.img}
								source={require('assets/images/image16.png')}
							/>
						</View>
					</TouchableOpacity>
					<TouchableOpacity onPress={onNextPress}>
						<View style={styles.box}>
							<Image
								style={styles.img}
								source={require('assets/images/image17.png')}
							/>
						</View>
					</TouchableOpacity>
					<TouchableOpacity onPress={onNextPress}>
						<View style={styles.box}>
							<Image
								style={styles.img}
								source={require('assets/images/image18.png')}
							/>
						</View>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</ProfileLayout>
	);
};

export default WhatsNewView;
