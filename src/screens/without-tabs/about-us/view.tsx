import React from 'react';

import { Text, View } from 'react-native';

import { styles } from './style';
import { strings } from 'locales/locales';
import ProfileLayout from '../ProfileLayout';

const text =
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mauris pretium elit dolor. Facilisi at id vitae fames. Diam, dolor semper feugiat amet et posuere. Gravida ac viverra ante vitae, mauris enim amet vestibulum volutpat. Dolor diam aliquam nulla natoque gravida sapien aliquam. Etiam sit duis turpis at sit morbi. Fermentum turpis et ornare nullam lorem placerat pellentesque dui. Mauris sapien magnis nisl euismod sit. Magna eu non turpis commodo. Donec diam morbi velit, vulputate habitant imperdiet nullam lacus rhoncus. Adipiscing gravida dictumst consequat, cras interdum. Neque lorem ultricies eu etiam ipsum scelerisque in aenean amet.';

const AboutUsView = () => {
	return (
		<ProfileLayout headerTitle={strings.aboutUs || ''}>
			<View style={styles.container}>
				<Text style={styles.text}>{text}</Text>
				<Text style={[styles.text, styles.mt20]}>{text}</Text>
			</View>
		</ProfileLayout>
	);
};

export default AboutUsView;
