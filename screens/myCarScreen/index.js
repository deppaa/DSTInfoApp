import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Text, FlatList, TextInput, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { useSelector, useDispatch } from 'react-redux';
import { Disconect, checkIConnect, Header } from '../../assets/component';
import { getCarList } from '../../store/Cars/actions';
import styles from './styles'

export default MyCarScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const [connect, setConnect] = useState(true)

    const { token, data, } = useSelector(({ Auth, Car }) => {
        return {
            token: Auth.token,
            data: Car.data,
        }
    })

    useEffect(async () => {
        const result = await checkIConnect()
        setConnect(result)

        if (result) {
            dispatch(getCarList(token))
        }
    }, [])

    const SearchHeader = () => {
        return (
            <View style={styles.searchWrapper}>
                <TextInput style={styles.searchInput} placeholder="Найти машину" />
                <TouchableOpacity style={styles.serchButton}>
                    <Icon name="search" size={20} color="#000" />
                </TouchableOpacity>
            </View>)
    }

    const Item = ({ title, name }) => (
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('CarScreen', { nomer: title })}>
            <View style={styles.itemHeader}>
                <Text style={styles.itemTitle}>{title}</Text>
            </View>
            <Text style={styles.itemSubTitle}>{name}</Text>
        </TouchableOpacity>
    );

    return (
        <>
            <Header title="Мои машины" goBack={() => navigation.goBack()} />
            {
                connect ? <View style={styles.container}>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => (<Item title={item.nomer} name={item.model} />)}
                        keyExtractor={item => item.nomer}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        ListHeaderComponent={<SearchHeader />}
                    />
                </View> : <Disconect />
            }
        </>
    );
}