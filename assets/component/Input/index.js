import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default Input = ({ lable, placeholder, cursoreColor, hidenText = false, value = '', onSet }) => {

    const [eye, setEye] = useState(hidenText)

    const Eye = () => {
        return (
            <TouchableOpacity style={styles.eye} onPress={() => { setEye(!eye) }}>
                {
                    eye ? <Icon name="visibility" size={30} color="#808080" /> : <Icon name="visibility" size={30} color="#333" />
                }
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>{lable}</Text>
            <TextInput style={styles.input} placeholder={placeholder} selectionColor={cursoreColor} secureTextEntry={eye} value={value} onChangeText={onSet} />
            {
                hidenText ? <Eye /> : null
            }
        </View >
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 7,
        marginBottom: 40,
        position: "relative"
    },
    input: {
        height: 60,
        letterSpacing: 1,
    },
    inputLabel: {
        fontSize: 18,
        marginHorizontal: 4
    },
    eye: {
        position: "absolute",
        right: 20,
        bottom: 0,
        height: 60,
        justifyContent: "center"
    }
})