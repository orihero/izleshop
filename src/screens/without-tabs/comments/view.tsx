import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import Rating from 'components/special/Rating';
import styles from './style';
import ProfileLayout from '../ProfileLayout';
import { strings } from 'locales/locales';
import { useRoute } from '@react-navigation/core';
import { url } from 'src/api/requests';

interface ICommentsView {
	// comments: any;
}

const CommentsView = ({}: ICommentsView) => {
	let { comments } = useRoute().params || {};
	return (
		<ProfileLayout headerTitle={strings.reviews || ''}>
			<ScrollView>
				<View style={styles.container}>
					{comments?.map((e) => {
						let time = new Date(e.created_at);
						console.log(e.image);

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

export default CommentsView;
