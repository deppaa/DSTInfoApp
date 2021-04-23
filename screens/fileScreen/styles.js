import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eeeeee',
        paddingHorizontal: 16,
        paddingVertical: 10
    },
    item: {
        flexDirection: 'row',
        paddingVertical: 16,
        borderBottomColor: '#dfdfdf',
        borderBottomWidth: 1
    },
    icon: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 16,
        position: 'relative'
    },
    fileFormat: {
        textTransform: 'uppercase',
        color: '#fff',
    },
    name: {
        fontSize: 16,
        fontWeight: '700'
    },
    size: {
        fontSize: 14,
        color: '#646464'
    },
    local: {
        justifyContent: 'center',
        marginLeft: 'auto',
        textAlignVertical: 'center',
        color: '#008000'
    },
    emptyWrapper: {
        flex: 1,
    },
    emptyText: {
        textAlign: 'center',
        fontSize: 20,
        color: '#646464'
    },
})