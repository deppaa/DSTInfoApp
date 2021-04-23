import React, { useEffect } from 'react'
import { TouchableOpacity, Text, Image, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { useDispatch, useSelector } from 'react-redux';
import { Card, Header } from '../../assets/component'
import { getCarBaseInfo } from '../../store/Cars/actions';
import styles from './styles'


export default CarScreen = ({ route, navigation }) => {
    const dispatch = useDispatch()

    const { nomer } = route.params

    const { token, carList, } = useSelector(({ Auth, Car }) => {
        return {
            token: Auth.token,
            carList: Car.carList,
        }
    })

    useEffect(() => {
        dispatch(getCarBaseInfo(token, nomer))
    }, [])

    return (
        <>
            <Header title="Мои обращения" goBack={() => navigation.goBack()} />
            <View style={styles.container}>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.buttonCar}>
                        <Text style={styles.topTitle}>Бульдозер {carList.model}</Text>
                        <Text style={styles.subTitle}>{carList.gen} поколение</Text>
                        <Text style={styles.bottomTitle}>{carList.worktime} м/ч</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonMap} onPress={() => navigation.navigate('MapScreen')} >
                        <Image style={styles.bg} source={require('../../assets/image/map.png')} />
                        <Icon style={styles.mapIcon} name="ios-location-outline" size={40} color="#ff9700" />
                        <Text style={styles.bottomTitleBlack}>Где машина</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <Card image={require('../../assets/image/fb_car_list.png')} topText={"Обращения \nпо машине"} bottomText={<><View style={styles.messageIcon} /><Text style={styles.message}>Сообщение</Text></>} />
                    <Card image={require('../../assets/image/card_new_feedback_new.png')} bottomText={"Новое \nобращение"} />
                </View>
                <View style={styles.row}>
                    <Card image={require('../../assets/image/carPasport.png')} bottomText={"Паспорт \nмашины"} press={() => navigation.navigate('PasportScreen')} />
                    <Card image={require('../../assets/image/file.png')} bottomText="Файлы" press={() => navigation.navigate('FileScreen')} />
                </View>
                <View style={styles.row}>
                    <Card image={require('../../assets/image/carTO.png')} bottomText={"ТО \nи ремонт"} />
                    <Card image={require('../../assets/image/carWork.png')} bottomText={"Работа \nмашины"} />
                </View>
            </View>
        </>
    )
}