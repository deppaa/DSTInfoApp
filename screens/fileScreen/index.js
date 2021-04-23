import React, { useEffect, useRef } from 'react';
import { TouchableOpacity, Text, FlatList, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import Toast from 'react-native-easy-toast'
import FileViewer from 'react-native-file-viewer'
import { Header } from '../../assets/component';
import { getCarFile, downloadCarFile, isLoadComplete } from '../../store/Cars/actions';
import styles from './styles'
import Icon from 'react-native-vector-icons/Entypo';
import { asin } from 'react-native-reanimated';

export default FileScreen = ({ navigation }) => {

    const { token, fileList, isLoad } = useSelector(({ Auth, Car }) => {
        return {
            token: Auth.token,
            fileList: Car.fileList,
            isLoad: Car.isLoad
        }
    })

    const dispatch = useDispatch()
    const toastRef = useRef()

    useEffect(() => {
        dispatch(getCarFile(token))
    }, [])

    useEffect(() => {
        if (isLoad) {
            toastRef.current.show('Файл загружен в папку "Download"', 2000)
        }
        dispatch(isLoadComplete(false))
    }, [isLoad])

    const color = (format) => {
        switch (format) {
            case 'pdf':
                return '#ffba00'

            case 'doc':
                return '#e4001b'

            case 'docx':
                return '#e4001b'

            case 'xls':
                return '#ea4d00'

            case 'xlsx':
                return '#ea4d00'

            case 'webp':
                return '#0bbd48'

            case 'jpg':
                return '#644691'

            case 'png':
                return '#6262d4'

            default:
                return
        }
    }

    const handlerClick = async ({ index, file_url, file_name, local, localPath }) => {
        if (!local) {
            dispatch(downloadCarFile(index, file_url, file_name))
        } else {
            try {
                await FileViewer.open(localPath, { showOpenWithDialog: true })
            } catch (error) {
                console.error(error)
            }
        }
    }

    const emptyList = () => (
        <View style={styles.emptyWrapper}>
            <Text style={styles.emptyText}>У этой машины еще {"\n"}нет файлов</Text>
        </View>
    )

    const Item = ({ index, name, size, seze_format, file_format, file_url, file_name, local = false, localPath = null }) => (
        <TouchableOpacity style={styles.item} onPress={() => { handlerClick({ index, file_url, file_name, local, localPath }) }}>
            <View style={[styles.icon, { backgroundColor: color(file_format) }]}>
                <Text style={styles.fileFormat}>{file_format}</Text>
            </View>
            <View>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.size}>{(size / 1024 / 1024).toFixed(2)} {seze_format}</Text>
            </View>
            {
                local ? <Icon name="controller-record" size={10} style={styles.local} /> : null
            }
        </TouchableOpacity>
    );

    return (
        <>
            <Header title="Файлы" goBack={() => navigation.goBack()} />
            <View style={styles.container}>
                <FlatList
                    style={{ flex: 1 }}
                    data={fileList}
                    renderItem={({ item, index }) => (<Item index={index} id={item.id} name={item.name} size={item.size} seze_format={item.seze_format} file_format={item.file_format} file_url={item.file_url} file_name={`${item.name}.${item.file_format}`} local={item.local} localPath={item.localPath} />)}
                    keyExtractor={item => item.id}
                    ListEmptyComponent={() => emptyList()}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                />
                <Toast ref={toastRef} />
            </View>
        </>
    );
}