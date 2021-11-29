import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import Rating from 'components/special/Rating';
import styles from './style';
import ProfileLayout from '../ProfileLayout';
import { strings } from 'locales/locales';
import { useRoute } from '@react-navigation/core';

interface ICommentsView {
	comments: any;
}

const CommentsView = ({ comments }: ICommentsView) => {
	console.log({ comments });
	return (
		<ProfileLayout headerTitle={strings.reviews || ''}>
			<ScrollView>
				<View style={styles.container}>
					{comments?.map((e) => {
						let time = new Date(e.created_at);
						return (
							<View style={styles.boxOne}>
								<View>
									<Image
										style={styles.userImage}
										source={require('assets/images/user.png')}
									/>
								</View>
								<View style={styles.textBox}>
									<View style={styles.userName}>
										<Text>{e.user_name}</Text>
										<Image
											style={styles.flag}
											source={require('assets/images/flagUzbekiston.jpg')}
										/>
										<View style={styles.rating}>
											<Rating />
										</View>
									</View>
									<View style={styles.data}>
										<Text style={styles.dataText}>
											{time.toLocaleDateString()}
										</Text>
										<Text style={styles.lorem}>
											{e.message}
										</Text>
									</View>
								</View>
							</View>
						);
					})}
				</View>
			</ScrollView>
		</ProfileLayout>
	);
};

export default CommentsView;
