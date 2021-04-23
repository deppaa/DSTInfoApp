import React from 'react'
import { TouchableOpacity, Text, View, StatusBar } from 'react-native';
import { Input } from '../../assets/component'
import styles from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { getToken, setLogin, setPassword } from '../../store/Auth/actions';

export default Auth = () => {
	const dispatch = useDispatch()

	const { login, password } = useSelector(({ Auth }) => {
		return {
			login: Auth.login,
			password: Auth.password
		}
	})

	const send = () => {
		if (login.trim().length !== 0 && password.trim().length !== 0) {
			dispatch(getToken(login, password))
		}
	}

	return (
		<View style={styles.container}>
			<StatusBar backgroundColor="#fff" barStyle="dark-content" />
			<Text style={styles.title}>DST</Text>
			<Text style={styles.subTitle}>Info</Text>
			<Input onSet={(login) => { dispatch(setLogin(login)) }} value={login} lable="Логин" placeholder="Введите ваш логин" cursoreColor="#ffba00" />
			<Input onSet={(password) => { dispatch(setPassword(password)) }} value={password} lable="Пароль" placeholder="Введите ваш пароль" cursoreColor="#ffba00" hidenText={true} />
			<TouchableOpacity onPress={send} style={styles.sendBtn}><Text style={{ fontSize: 18, color: "#fff" }}>Войти</Text></TouchableOpacity>
		</View>
	)
}