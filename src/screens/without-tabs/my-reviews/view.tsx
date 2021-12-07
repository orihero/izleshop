import React, { useState } from 'react';
import { ScrollView, Text, View, Image, TouchableOpacity } from 'react-native';

import ProfileLayout from '../ProfileLayout';
import { styles } from './stlye';
import { strings } from 'locales/locales';
import { useRoute } from '@react-navigation/core';
import Rating from 'components/special/Rating';
import { Modal } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import { windowWidth } from 'constants/sizes';

interface IMyReviewsViewProps {
	comments: any;
}

const MyReviewsView = ({ comments }: IMyReviewsViewProps) => {
	const [modalVisible, setModalVisible] = useState(false);
	const [uri, setUri] = useState('');

	let onModalToggle = (comment) => {
		console.log(comment);

		setUri(comment.image);
		setModalVisible((e) => !e);
	};
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
										<TouchableOpacity
											onPress={() => onModalToggle(e)}
										>
											<Image
												style={styles.image}
												source={{ uri: e.image }}
											/>
										</TouchableOpacity>
									</View>
								</View>
							</View>
						);
					})}
					<Modal
						visible={modalVisible}
						onRequestClose={onModalToggle}
					>
						<ImageViewer
							imageUrls={[
								{
									url: uri,
									props: {
										style: {
											width: windowWidth,
											height: 100,
										},
									},
								},
							]}
						/>
					</Modal>
				</View>
			</ScrollView>
		</ProfileLayout>
	);
};

export default MyReviewsView;
