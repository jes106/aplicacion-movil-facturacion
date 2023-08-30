import React from 'react'
import {Text, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    text: {
        fontFamily: 'open-sans'
    },
    bold: {
        fontFamily: 'open-sans-bold'
    },
    blue: {
        color: 'blue'
    }
})

export default function StyledText ({text, blue, bold, children}){
    const textStyles = [
        styles.text,
        blue && styles.blue,
        bold && styles.bold,
        text && styles.text
    ]

    return (
        <Text style={textStyles}>
            {children}
        </Text>
    )
}