import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { colors } from 'constants/colors'
import { windowWidth } from 'constants/sizes'
import { CalenderIcon, ChevronLeftIcon, ChevronRightIcon } from 'assets/icons/icons'

function daysInMonth(month: number, year: number) { // Use 1 for January, 2 for February, etc.
    return new Date(year, month, 0).getDate();
}

const Calendar = () => {
    let array = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let today = new Date(Date.now())
    let monthDays = daysInMonth(today.getMonth() + 1, today.getFullYear())
    let day = today.getDay();
    let days = []
    let count = 0
    for (let i = 0; i < 6; i++) {
        let week = []
        for (let j = 0; j < 7; j++) {
            if ((j >= day || i > 0) && count <= monthDays) {
                count++
            }
            week.push(count <= monthDays ? count : 0 )
        }
        days.push(week)
    }
    console.log({ days, monthDays })

    return (
        <View style={styles.container}>
            <View style={styles.input}>
                <Text style={styles.number}>12/12/2020</Text>
                <CalenderIcon />
            </View>
            <View style={styles.calendar}>
                <View style={styles.month}>
                    <ChevronLeftIcon />
                    <Text style={styles.months}> {months[today.getMonth()]} {today.getFullYear()} </Text>
                    <ChevronRightIcon />
                </View >
                {/* <ScrollView pagingEnabled horizontal showsHorizontalScrollIndicator={false}> */}
                {/* <View style={styles.week}>
                        {
                            array.map((e, i) => {
                                return <View key={i} style={styles.cell}>
                                    <Text style={styles.textWeek}>{e.substring(0, 3)}</Text>
                                </View>
                            })
                        }
                    </View> */}
                <View>
                    <View style={styles.week}>
                        {
                            array.map((e) => {
                                return <View style={styles.cell}>
                                    <Text style={styles.textWeek}>{e.substring(0, 3)}</Text>
                                </View>
                            })
                        }
                    </View>

                    {
                        days.map((e, i) => {
                            return <View style={styles.week}>
                                {e.map((el, j) => {
                                    return <View key={`${i}${j}`} style={styles.cell}>
                                        <Text style={styles.textWeek}>{!el ? "" : el}</Text>
                                    </View>
                                })}
                            </View>
                        })
                    }
                </View>
                {/* <View style={styles.week}>
                        {
                            array.map((e) => {
                                return <View style={styles.cell}>
                                    <Text style={styles.textWeek}>{e.substring(0, 3)}</Text>
                                </View>
                            })
                        }
                    </View> */}
                {/* </ScrollView> */}
            </View>
        </View>
    )
}

export default Calendar

const styles = StyleSheet.create({
    container: {
    },
    input: {
        width: windowWidth - 32,
        height: 50,
        borderWidth: 1,
        paddingLeft: 16,
        borderRadius: 5,
        paddingRight: 15,
        alignItems: 'center',
        flexDirection: 'row',
        borderColor: colors.blueLight,
        backgroundColor: colors.white,
        justifyContent: 'space-between',
    },
    number: {
        color: colors.leghtGrey1,
    },
    calendar: {
        width: windowWidth - 32,
        marginTop: 10,
        borderRadius: 5,
        backgroundColor: colors.white
    },
    month: {
        paddingTop: 10,
        paddingLeft: 25,
        paddingRight: 25,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    months: {
        fontFamily: 'Poppins-Medium',
    },
    week: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    cell: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: colors.leghtGrey,
        height: (windowWidth - 32) / 7,
        width: (windowWidth - 32) / 7,
        backgroundColor: colors.white
    },
    textWeek: {
        fontSize: 12,
        lineHeight: 18,
        fontFamily: 'Poppins-Medium',
    },
})
