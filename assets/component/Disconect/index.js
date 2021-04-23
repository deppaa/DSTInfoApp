import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import NetInfo from "@react-native-community/netinfo"


export const Disconect = () => {
    return (
        <View style={styles.container}>
            <Icon name="wifi-off" size={60} color="#ffba00" />
            <Text style={styles.title}>Подключитесь к интернету</Text>
            <Text>Проверьте подключение к сети</Text>
            <TouchableOpacity onPress={() => { checkIConnect() }} style={styles.refreshButton}><Text style={{ color: '#ffba00', fontSize: 15 }}>Повторить</Text></TouchableOpacity>
        </View>
    )
}

export const checkIConnect = async () => {
    const state = await NetInfo.fetch()

    if (state.isConnected == true) {
        return true
    } else {
        return false
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#fff'
    },
    title: {
        marginTop: 10,
        fontWeight: '600',
        fontSize: 20
    },
    refreshButton: {
        marginTop: 15
    }
})