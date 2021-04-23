import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: "center"
    },
    title: {
        fontSize: 140,
        marginBottom: -45,
    },
    subTitle: {
        fontSize: 90,
        marginLeft: 4,
        marginBottom: 60
    },
    sendBtn: {
        backgroundColor: "#ffba00",
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        borderRadius: 5,
        marginHorizontal: 10
    }
})