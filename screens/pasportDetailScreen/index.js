import React from 'react';
import { Text, FlatList, View } from 'react-native'
import { Header } from '../../assets/component';
import styles from './styles'

export default PasportDetailScreen = ({ navigation }) => {

    const DATA = [
        {
            id: 'asd',
            name: 'Номер рамы',
            parament: '1938'
        },
        {
            id: 'asdasd',
            name: 'КД рамы',
            parament: 'ТМ10.1126.000-01'
        },
        {
            id: 'asdasdewr',
            name: 'Тип телег',
            parament: '7-и катковая ТМ10.2127.000 (-01)'
        },
        {
            id: 'asdff',
            name: 'Направляющие колеса',
            parament: '50 - 21 - 305(306)'
        },
        {
            id: 'asdasdff',
            name: 'Сегмент ведущей звезды',
            parament: '50 - 19 - 201(ЧТЗ)'
        },
        {
            id: 'asdasdewrff',
            name: 'Гусеницы',
            parament: '900 мм, 45 башмаков, Тm - CK - 1 - 03'
        },
    ]

    const Item = ({ name, parament }) => (
        <View style={styles.item}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.parament}>{parament}</Text>
        </View>
    );

    return (
        <>
            <Header title="Общая информация" goBack={() => navigation.goBack()} />
            <View style={styles.container}>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => (<Item name={item.name} parament={item.parament} />)}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </>
    );
}