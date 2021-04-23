import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

export default Label = ({ image, title, subTitle, isTop = true, onPress = null }) => {
    return (
        <TouchableOpacity activeOpacity={0.7} style={styles.functionWrapper} onPress={onPress}>
            <Image style={styles.functionButtonImage} source={image} />
            <Text style={isTop ? styles.buttonTitleTop : styles.buttonTitleBottom}>{title}</Text>
            <Text style={styles.buttonTextBottom}>{subTitle}</Text>
        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    functionWrapper: {
        flex: 1,
        borderRadius: 4,
        marginBottom: 7,
        overflow: 'hidden',
        position: 'relative'
    },
    buttonTitleTop: {
        position: "absolute",
        top: 17,
        left: 19,
        fontSize: 15,
        fontWeight: "700",
        color: '#fff',
        fontFamily: 'Montserrat'
    },
    functionButtonImage: {
        flex: 1,
        resizeMode: 'cover',
        width: '100%',
    },
    buttonTextBottom: {
        position: "absolute",
        bottom: 18,
        left: 19,
        fontSize: 12,
        fontWeight: '300',
        color: '#fff',
        justifyContent: 'center',
        fontFamily: 'Montserrat'
    },
    buttonTitleBottom: {
        position: "absolute",
        bottom: 16,
        left: 19,
        fontSize: 15,
        fontWeight: "700",
        color: '#fff'
    },
})