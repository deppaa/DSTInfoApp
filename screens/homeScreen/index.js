import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Text, Image, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { Disconect, checkIConnect, Header, Label } from '../../assets/component'
import { getCarCount } from '../../store/Cars/actions';
import styles from './styles'

export default HomeScreen = ({ navigation }) => {
	const dispatch = useDispatch()
	const [connect, setConnect] = useState(true)

	const { count, token } = useSelector(({ Auth, Car }) => {
		return {
			count: Car.count,
			token: Auth.token,
		}
	})

	useEffect(async () => {
		const result = await checkIConnect()
		setConnect(result)

		if (result) {
			dispatch(getCarCount(token))
		}
	}, [])

	const myCarText = (param) => {
		if (param >= 5) {
			return `${count} машин`
		}

		if (param < 5 && param > 1) {
			return `${count} машины`
		}

		if (param == 1) {
			return `${count} машина`
		}
	}

	return (
		<>
			<Header title="DST Info" noLeft={true} />
			<View style={styles.container}>
				<View style={styles.functionsWrapper}>
					<Label image={require('../../assets/image/card_technic.png')} title="Мои машины" subTitle={myCarText(count)} onPress={() => navigation.navigate('MyCarScreen')} />
					<Label image={require('../../assets/image/card_feedBack_list.png')} title="Мои обращения" subTitle={<><View style={styles.circlMessage} /><Text> Сообщение</Text></>} />
					<Label image={require('../../assets/image/card_new_feedback.png')} title="Новое обращение" isTop={false} />
				</View>
				<View style={styles.controllerWrapper}>
					<TouchableOpacity activeOpacity={0.7} style={styles.controllerButtonCall}>
						<Text style={styles.buttonCallTitle}>Звонок{"\n"}на завод</Text>
						<Image style={styles.controllerButtonIcon} source={require('../../assets/image/call.png')} />
					</TouchableOpacity>
					<TouchableOpacity activeOpacity={0.7} style={styles.controllerButtonSettings}>
						<Text style={styles.buttonSettingsTitle}>Настройки</Text>
						<Image style={styles.controllerButtonIcon} source={require('../../assets/image/setting.png')} />
					</TouchableOpacity>
				</View>
			</View>
		</>
	);
}