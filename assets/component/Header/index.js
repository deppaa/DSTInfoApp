import React from 'react'
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

export default Header = ({ noLeft = false, goBack = null, title }) => {
    const LeftButton = () => {
        if (!noLeft) {
            return (
                <View style={styles.buttonWrapper}>
                    <TouchableOpacity style={styles.button} onPress={goBack}>
                        <Icon name="arrow-back" size={25} color="#fff" />
                    </TouchableOpacity>
                </View>
            )
        } else {
            return null
        }

    }
    return (
        <View>
            <StatusBar backgroundColor="#ffba00" />
            <View style={styles.headerWrapper}>
                <LeftButton />
                <View>
                    <Text style={styles.headerTitle}>{title}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerWrapper: {
        height: 60,
        backgroundColor: '#ffba00',
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonWrapper: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        padding: 10
    },
    headerTitle: {
        marginLeft: 10,
        fontSize: 23,
        fontWeight: '600',
        color: '#fff'
    }
})