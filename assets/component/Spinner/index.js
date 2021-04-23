import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'

export default Spinner = ({ load, children }) => {
    return load ?
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#ffba00" />
        </View> : children
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})