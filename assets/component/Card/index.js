import React from 'react'
import { TouchableOpacity, Text, Image, View, StyleSheet } from 'react-native'

export default Card = ({ image, topText, bottomText, press }) => {
    return (
        <TouchableOpacity style={styles.card} onPress={press}>
            <Image style={styles.bg} source={image} />
            {topText ? <Text style={styles.topTitle}>{topText}</Text> : null}
            {bottomText ? <Text style={styles.bottomTitle}>{bottomText}</Text> : null}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffba00',
        borderRadius: 4,
        overflow: 'hidden',
        width: '49%'
    },
    bg: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    topTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: '#fff',
        position: 'absolute',
        top: 19,
        left: 16,
    },
    bottomTitle: {
        marginTop: 'auto',
        fontSize: 13,
        fontWeight: '700',
        color: '#fff',
        position: 'absolute',
        bottom: 19,
        left: 16,
    },
})