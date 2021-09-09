import React from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import DefaultButton from 'components/general/DefaultButton';
import Header from 'components/navigation/Header';
import SliderItem from '../../components/SliderItem';
import Rating from '../../components/Rating';
import ProductItem from '../../components/ProductItem';

import { styles } from './style';
import { item, items } from 'mockup/data';
import { colors } from 'constants/colors';
import { windowWidth } from 'constants/sizes';
import { strings } from 'locales/locales';

export interface ProductDetailsViewProps {
	setActiveSlide: (e: number) => void;
	activeSlide: number;
}

const longText =
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam vel quam elementum pulvinar etiam non quam. Ac auctor augue mauris augue neque. Vel risus commodo viverra maecenas accumsan lacus vel. Euismod elementum nisi quis eleifend. Imperdiet proin fermentum leo vel orci porta non pulvinar neque. Ut sem viverra aliquet eget. Aliquet eget sit amet tellus cras adipiscing enim eu. Bibendum neque egestas congue quisque egestas diam in arcu cursus. Nibh sed pulvinar proin gravida hendrerit lectus. Pretium quam vulputate dignissim suspendisse in est. Nec ultrices dui sapien eget mi proin. Vulputate enim nulla aliquet porttitor lacus. Enim ut tellus elementum sagittis vitae et.Ultricies tristique nulla aliquet enim tortor. Vestibulum lorem sed risus ultricies tristique. Neque laoreet suspendisse interdum consectetur. Tellus molestie nunc non blandit. Mauris augue neque gravida in fermentum. Semper quis lectus nulla at volutpat diam ut venenatis tellus. Urna duis convallis convallis tellus id interdum velit laoreet id. Cras semper auctor neque vitae tempus quam pellentesque nec. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Sit amet mauris commodo quis. In arcu cursus euismod quis viverra. Augue lacus viverra vitae congue eu consequat ac felis. Fermentum dui faucibus in ornare quam. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. Sit amet mattis vulputate enim nulla aliquet porttitor. Vitae ultricies leo integer malesuada nunc vel risus. Vel turpis nunc eget lorem dolor sed viverra ipsum. Commodo viverra maecenas accumsan lacus vel facilisis volutpat. Id ornare arcu odio ut sem. Massa tincidunt dui ut ornare lectus sit. Cras fermentum odio eu feugiat pretium nibh. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Malesuada proin libero nunc consequat interdum varius sit amet. Eget duis at tellus at urna condimentum mattis. Tristique et egestas quis ipsum. Ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Vel elit scelerisque mauris pellentesque pulvinar. Amet tellus cras adipiscing enim eu turpis. Mattis molestie a iaculis at erat pellentesque adipiscing commodo elit. Malesuada fames ac turpis egestas integer eget aliquet. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula. Pretium fusce id velit ut tortor pretium. Duis at consectetur lorem donec massa sapien. Vitae suscipit tellus mauris a diam maecenas sed enim. Sit amet consectetur adipiscing elit pellentesque habitant morbi. Imperdiet proin fermentum leo vel orci porta non. Cursus turpis massa tincidunt dui ut ornare lectus sit amet. At elementum eu facilisis sed odio. Lectus sit amet est placerat. Id diam vel quam elementum pulvinar etiam non quam lacus. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec. Vitae turpis massa sed elementum tempus egestas sed sed risus.';

const ProductDetailsView = ({
	setActiveSlide,
	activeSlide,
}: ProductDetailsViewProps) => {
	const onPress = () => console.log('onPressed');

	return (
		<View style={styles.container}>
			<Header hasBorder title={'Text'} />
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.bgw}>
					<Carousel
						data={item.images}
						renderItem={(props) => (
							<SliderItem {...props} contain />
						)}
						sliderWidth={windowWidth}
						itemWidth={windowWidth}
						containerCustomStyle={styles.carousel}
						onSnapToItem={(index) => setActiveSlide(index)}
					/>
					<View style={styles.row}>
						<View style={styles.tmpBox} />
						<Pagination
							dotColor={colors.blue}
							dotStyle={styles.pdot}
							dotsLength={item.images.length}
							dotContainerStyle={styles.pdotcont}
							inactiveDotScale={1}
							inactiveDotOpacity={0.5}
							activeDotIndex={activeSlide}
							inactiveDotColor={colors.gray}
							containerStyle={{ paddingVertical: 0 || undefined }}
							inactiveDotStyle={{ backgroundColor: colors.gray }}
						/>
						<View style={styles.tmpBox} />
					</View>
				</View>
				<View style={styles.main}>
					<Text style={styles.text1}>{item.title}</Text>
					<Rating styleChanged />
					<View style={styles.pr}>
						<Text style={styles.text2}>
							{`${item.oldPrice} ${item.currency}`}
						</Text>
						<Text style={styles.text3}>
							{`${item.newPrice} ${item.currency}`}
						</Text>
					</View>
					<Text style={styles.text4}>{strings.similarProducts}</Text>
					<View style={styles.mt20}>
						<ProductItem item={items[0]} />
						{/* <FlatList
							contentContainerStyle={styles.flatList}
							snapToInterval={windowWidth / 2 - 5}
							data={items}
							horizontal
							renderItem={(props) => <ProductItem {...props} />}
							decelerationRate={'fast'}
							showsHorizontalScrollIndicator={false}
							keyExtractor={(e) => e.id.toString()}
						/> */}
						<Text>text</Text>
					</View>
					{/* <Text>{longText}</Text> */}
				</View>
			</ScrollView>
			<View style={styles.btnCont}>
				<DefaultButton onPress={onPress} text={strings.addToCart} />
			</View>
		</View>
	);
};

export default ProductDetailsView;
