import React, { useEffect } from 'react';
import { TouchableOpacity, Text, FlatList, View } from 'react-native'
import Svg, { Path } from 'react-native-svg'
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../../assets/component';
import { getPasport } from '../../store/Cars/actions';
import styles from './styles'

export default PasportScreen = ({ navigation }) => {

    const { token, pasportList } = useSelector(({ Auth, Car }) => {
        return {
            token: Auth.token,
            pasportList: Car.pasportList,
        }
    })

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPasport(token))
    }, [])

    const Item = ({ name }) => (
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('PasportDetailScreen')}>
            <Text style={styles.name}>{name}</Text>
            <Svg viewBox="0 0 24 24" style={{ width: 24, height: 24 }}>
                <Path d="M12 0a12 12 0 1012 12A12 12 0 0012 0zM9 16.59v-9l8 4.5z" fill="#ffba00"></Path>
            </Svg>
        </TouchableOpacity>
    );

    return (
        <>
            <Header title="Паспорт машины" goBack={() => navigation.goBack()} />
            <View style={styles.container}>
                <FlatList
                    data={pasportList}
                    renderItem={({ item }) => (<Item name={item.name} />)}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </>
    );
}