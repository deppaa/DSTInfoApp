import React, { useEffect } from 'react';
import { Text, FlatList, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../../assets/component';
import { getPasportDetail } from '../../store/Cars/actions';
import styles from './styles'

export default PasportDetailScreen = ({ navigation }) => {

    const { token, nomer, pasportDetail, loading, screenTitle } = useSelector(({ Auth, Car, App }) => {
        return {
            token: Auth.token,
            nomer: Car.carList.nomer,
            pasportDetail: Car.pasportDetail,
            loading: App.loading,
            screenTitle: Car.curentPasportItem.name
        }
    })

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPasportDetail(token, nomer))
    }, [])

    const Item = ({ name, parament }) => (
        <View style={styles.item}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.parament}>{parament}</Text>
        </View>
    );

    const emptyList = () => (
        <View style={styles.emptyWrapper}>
            <Text style={styles.emptyText}>Пока у нас нет данных</Text>
        </View>
    )

    return (
        <>
            <Header title={screenTitle} goBack={() => navigation.goBack()} />
            <View style={styles.container}>
                <Spinner load={loading}>
                    <FlatList
                        data={pasportDetail}
                        renderItem={({ item }) => (<Item name={item.name} parament={item.parament} />)}
                        keyExtractor={item => item.code}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        ListEmptyComponent={() => emptyList()}
                    />
                </Spinner>
            </View>
        </>
    );
}