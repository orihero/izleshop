import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from 'constants/colors'
import Calendar from 'components/general/Calendar'

const TestScreen = () => {
    return (
        <View style={styles.container}>
            <Calendar />
        </View>
    )
}

export default TestScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.lightBlue
    }
})

