import React from 'react';
import {
	ScrollView,
	Text,
	TouchableOpacity,
	View,
	Image,
	Dimensions,
} from 'react-native';

import ProfileLayout from '../ProfileLayout';
import { styles } from './style';
import { strings } from 'locales/locales';
import { useRoute } from '@react-navigation/core';
import RenderHTML from 'react-native-render-html';

interface IWhatsNewsViewProps {
	password: string;
	setPassword: (e: string) => void;
	onPress: () => void;
	navigate: () => void;
	news: any;
}

const WhatsNewsView = ({}: IWhatsNewsViewProps) => {
	let { item } = useRoute().params || {};
	return (
		<ScrollView
			showsVerticalScrollIndicator={false}
			contentContainerStyle={{ paddingBottom: 20 }}
		>
			<ProfileLayout headerTitle={strings.viewAll || ''}>
				<View style={styles.container}>
					<View style={styles.box}>
						<Image
							style={styles.img}
							source={{ uri: item.image }}
						/>
						<Text style={styles.textOne}>{item?.title}</Text>
						<Text style={styles.text}>{item?.description}</Text>
						<View style={styles.render}>
							<RenderHTML
								source={{ html: item.body }}
								contentWidth={
									Dimensions.get('window').width - 50
								}
							/>
						</View>
						{/* <Text style={styles.text}>{item?.body}</Text> */}
					</View>
				</View>
			</ProfileLayout>
		</ScrollView>
	);
};

export default WhatsNewsView;
