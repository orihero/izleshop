import React from 'react';
import { ScrollView, Text, View, Image } from 'react-native';

import ProfileLayout from '../ProfileLayout';
import { styles } from './stlye';
import { strings } from 'locales/locales';
import { useRoute } from '@react-navigation/core';
import Rating from 'components/special/Rating';

interface IMyReviewsViewProps {
	comments: any;
}

const MyReviewsView = ({ comments }: IMyReviewsViewProps) => {
	return (
		<ProfileLayout headerTitle={strings.myreviews || ''}>
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
										<View style={styles.name}>
											<Text>{e.user_name}</Text>
											<Image
												style={styles.flag}
												source={require('assets/images/flagUzbekiston.jpg')}
											/>
										</View>
										<View style={styles.rating}>
											<Rating readOnly={true} />
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
									<View style={styles.imageBox}>
										<Image
											style={styles.image}
											source={{ uri: e.image }}
										/>
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

export default MyReviewsView;
