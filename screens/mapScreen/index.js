import React, { useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity } from 'react-native'
import YaMap, { Marker } from 'react-native-yamap'
import { useSelector } from 'react-redux';
import Moment from 'moment'
import styles from './styles'

export default MapScreen = ({ navigation }) => {
    YaMap.init("18115e81-5c44-440a-8741-64a2e38b3631")
    const mapRef = useRef()

    const { lat, lon, datetime } = useSelector(({ Car }) => {
        return {
            lat: Car.carList.lat,
            lon: Car.carList.lon,
            datetime: Car.carList.datetime,
        }
    })

    useEffect(() => {
        mapRef.current.setCenter({ lat: Number(lat), lon: Number(lon) }, 14)
    }, [])

    return (
        <>
            <Header title="На карте" goBack={() => navigation.goBack()} />
            <View style={styles.container}>
                <YaMap ref={mapRef} showUserPosition={false} style={{ flex: 1 }}>
                    <Marker source={require('../../assets/image/y_icon.png')} point={{ lat: Number(lat), lon: Number(lon) }} anchor={{ x: 0.5, y: 1 }} scale={0.7} />
                </YaMap>
                <View style={styles.infoWrapper}>
                    <Text style={styles.infoTitle}>Положение машины</Text>
                    <Text style={styles.infoText}>{Moment(datetime).format('DD.MM.YYYY')} в {Moment(datetime).format('hh:mm')}</Text>
                </View>
            </View>
        </>
    )
}