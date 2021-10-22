import React from 'react';
import { Image, Text, View } from 'react-native';
import Rating from 'components/special/Rating';
import styles from './style'

const CommentsView = () => {
	return (
		<View style={styles.container}>
			<View style={styles.boxOne}>
				<View>
					<Image
						style={styles.userImage}
						source={require('../../../../../assets/images/user.png')}
					/>
				</View>
				<View style={styles.textBox}>
					<View style={styles.userName}>
						<Text>S**o</Text>
						<Image
							style={styles.flag}
							source={require('assets/images/flagUzbekiston.jpg')}
						/>
						<View style={styles.rating}>
							<Rating />
						</View>
					</View>
					<View style={styles.data}>
						<Text style={styles.dataText}>01 Aug 2021</Text>
						<Text style={styles.dataText}>Color Red</Text>
						<Text style={styles.lorem}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Nam fugit non sint et animi at voluptatibus vero
							voluptatem est nemo mollitia corrupti, quae
							illum quas harum delectus maiores placeat.Lorem ipsum dolor
							sit amet consectetur adipisicing elit.
							Nam fugit non sint et animi at voluptatibus vero
							voluptatem est nemo mollitia corrupti, quae similique
							illum quas harum delectus maiores placeat.....
						</Text>
					</View>
					<View style={styles.img}>
						<Image
							style={styles.sos}
							source={require('assets/images/image44.png')}
						/>
						<Image
							style={styles.sos}
							source={require('assets/images/image44.png')}
						/>
					</View>
				</View>
			</View>
			<View style={styles.boxTwo}>
				<View>
					<Image
						style={styles.userImage}
						source={require('../../../../../assets/images/user.png')}
					/>
				</View>
				<View style={styles.textBox}>
					<View style={styles.userName}>
						<Text>S**o</Text>
						<Image
							style={styles.flag}
							source={require('assets/images/flagUzbekiston.jpg')}
						/>
						<View style={styles.rating}>
							<Rating />
						</View>
					</View>
					<View style={styles.data}>
						<Text style={styles.dataText}>01 Aug 2021</Text>
						<Text style={styles.dataText}>Color Red</Text>
						<Text style={styles.lorem}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Nam fugit non sint et animi at voluptatibus vero
							voluptatem est nemo mollitia corrupti, quae
							illum quas harum delectus maiores placeat.Lorem ipsum dolor
							sit amet consectetur adipisicing elit.
							Nam fugit non sint et animi at voluptatibus vero
							voluptatem est nemo mollitia corrupti, quae similique
							illum quas harum delectus maiores placeat.....
						</Text>
					</View>
					<View style={styles.img}>
						<Image
							style={styles.sos}
							source={require('assets/images/image44.png')}
						/>
						<Image
							style={styles.sos}
							source={require('assets/images/image44.png')}
						/>
					</View>
				</View>
			</View>
		</View>
	);
};

export default CommentsView;
