import React, { useEffect, useState } from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { Auth } from './screens'
import store from './store'
import { isAutorise } from './store/Auth/actions';
import NavContainer from './navigation'
import { Disconect, checkIConnect } from './assets/component'
import { PermissionsAndroid } from "react-native";


const App = () => {
	const [connect, setConnect] = useState(true)

	const LoadScreen = () => {
		const dispatch = useDispatch()

		const { isAuth, token } = useSelector(({ Auth }) => {
			return {
				isAuth: Auth.isAuth,
				token: Auth.token,
			}
		})

		useEffect(async () => {
			const result = await checkIConnect()
			setConnect(result)

			if (result) {
				dispatch(isAutorise())
			}
		}, [])

		if (!isAuth && token == false) {
			return <Auth />
		}

		if (isAuth && token) {
			return <NavContainer />
		}

		return null
	}

	return (
		<Provider store={store}>
			{
				connect ? <LoadScreen /> : <Disconect />
			}
		</Provider>
	)
}

export default App;
