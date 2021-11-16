import React from 'react';

import { Text, View } from 'react-native';
import ProfileLayout from '../ProfileLayout';
import Pressable from 'components/general/Pressable';
import DefaultButton from 'components/general/DefaultButton';

import { styles } from './style';
import { strings } from 'locales/locales';

interface ILanguageProps {
	language: number;
	setLanguage: (e: number) => void;
	arr: string[];
	onPress: () => {};
}

const LanguageView = ({
	language,
	setLanguage,
	arr,
	onPress,
}: ILanguageProps) => {
	return (
		<ProfileLayout headerTitle={strings.language || ''}>
			<View style={styles.container}>
				<Text style={styles.title}>{strings.changeLanguage}</Text>
				<View style={styles.lbox}>
					{arr.map((e, i) => (
						<Pressable key={i} onPress={() => setLanguage(i)}>
							<View style={styles.lrow}>
								<Text
									style={[
										styles.ltext,
										i === language
											? styles.cblue
											: styles.cblack,
									]}
								>
									{e}
								</Text>
								<View
									style={[
										styles.lsquare,
										i === language
											? styles.bblue
											: styles.bblack,
									]}
								>
									{i === language && (
										<View style={styles.circle} />
									)}
								</View>
							</View>
						</Pressable>
					))}
				</View>
				<View style={styles.button}>
					<Text style={styles.textCancel} onPress={onPress}>
						{strings.save}
					</Text>
				</View>
				<View style={styles.content}>
					<View style={styles.box}>
						<Text style={styles.text}>{'izle'}</Text>
					</View>
				</View>
			</View>
		</ProfileLayout>
	);
};

export default LanguageView;
