import React from 'react';
import { Linking, Platform, Text, TouchableOpacity, View } from 'react-native';

import ProfileLayout from '../ProfileLayout';
import { styles } from './style';
import { strings } from 'locales/locales';
import { TelephoneIcon, CallIcon, MailIcon, MapIcon } from 'assets/icons/icons';
import { colors } from 'constants/colors';

const HelpSupportView = () => {
	let openContact = (number) => {
		let phoneNumber = '';
		if (Platform.OS === 'android') {
			phoneNumber = `tel:${number}`;
		} else {
			phoneNumber = `telprompt:${number}`;
		}

		console.log(number);

		Linking.openURL(phoneNumber);
	};
	return (
		<ProfileLayout headerTitle={strings.helpSupport || ''}>
			<View style={styles.container}>
				<View style={styles.box}>
					<View style={styles.boxs}>
						<View style={styles.iconBox}>
							<CallIcon color={colors.black} size={25} />
							<TouchableOpacity
								onPress={() => openContact('+998 90 123-45-67')}
							>
								<Text style={styles.number}>
									{'+998 90 123-45-67'}
								</Text>
							</TouchableOpacity>
						</View>
						<View style={styles.iconBox}>
							<MailIcon color={colors.leghtGrey1} size={25} />
							<Text>info@izle.uz</Text>
						</View>
						<View style={styles.iconBox}>
							<MapIcon size={25} />
							<Text>Нукус</Text>
						</View>
					</View>
				</View>
			</View>
		</ProfileLayout>
	);
};
export default HelpSupportView;
