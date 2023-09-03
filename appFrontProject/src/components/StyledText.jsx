import React from 'react'
import {Text, StyleSheet} from 'react-native'
import theme from '../theme'

const styles = StyleSheet.create({
    text: {
        fontFamily: theme.fonts.main
    },
    bold: {
        fontFamily: theme.fonts.bold
    },
    blue: {
        color: theme.color.secondary
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