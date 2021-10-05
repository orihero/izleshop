import React, { useState } from 'react'
import { View, Text, Image, Pressable, } from 'react-native'
import { strings } from 'locales/locales';
import { styles } from './stlye';
import { colors } from "constants/colors";
import Carousel, { Pagination } from 'react-native-snap-carousel';
let image1 = require('assets/images/Group.png')
let image2 = require('assets/images/Group.png')
let image3 = require('assets/images/Group.png')

export interface IntroProps {
    width: number;
    setActiveSlide: (e: number) => void;
    activeSlide: number;
}


let data = [
    {
        img: image1
    },
    {
        img: image2
    },
    {
        img: image3
    },
]


const IntroView = ({ }: IntroProps) => {
    const [activeSlide, setActiveSlide] = useState(0);
    return (
        <View style={styles.container}>
            <View style={styles.boxOne}>
                <Carousel
                    contentContainerCustomStyle={{ flex: 1, alignItems: 'center' }}
                    onSnapToItem={(index) => setActiveSlide(index)}
                    data={data}
                    sliderWidth={300}
                    sliderHeight={385}
                    itemWidth={300}
                    itemHeight={385}
                    renderItem={({ item: { img } }) => <View><Image
                        style={styles.img}
                        source={img}
                    /></View>} />
            </View>
            <View style={styles.boxTwo}>
                <Text style={styles.textOne}>{strings.toGoToTheBazaar}</Text>
                <Text style={styles.textTwo}>{strings.favorablePrices}</Text>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>{strings.farther}</Text>
                </Pressable>
                <Pagination
                    dotColor={colors.blue}
                    dotStyle={styles.pdot}
                    dotsLength={3}
                    dotContainerStyle={styles.pdotcont}
                    inactiveDotScale={1}
                    inactiveDotOpacity={0.5}
                    activeDotIndex={activeSlide}
                    inactiveDotColor={colors.gray}
                    inactiveDotStyle={{ backgroundColor: colors.gray }}
                />
            </View>
        </View>
    )
}

export default IntroView
