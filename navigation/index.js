import * as React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Svg, { Circle, Path } from 'react-native-svg';
import { HomeScreen, MyCarScreen, CarScreen, MapScreen, PasportScreen, FileScreen, PasportDetailScreen } from '../screens'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

/* function ChatStack(e) {
    let showLeft = e.route.params.showLeft
    return (
        <Stack.Navigator headerMode={"none"}>
            <Stack.Screen initialParams={{ showLeft: showLeft }} name="MessageListScreen" component={MessageListScreen} />
            <Stack.Screen name="ChatScreen" component={ChatScreen} />
        </Stack.Navigator>
    )
} */

function Pasport(e) {
    return (
        <Stack.Navigator headerMode={"none"}>
            <Stack.Screen name="PasportScreen" component={PasportScreen} />
            <Stack.Screen name="PasportDetailScreen" component={PasportDetailScreen} />
        </Stack.Navigator>
    )
}

function MyCarStack() {
    return (
        <Stack.Navigator headerMode={"none"}>
            <Stack.Screen name="MyCarScreen" component={MyCarScreen} />
            <Stack.Screen name="CarScreen" component={CarScreen} />
            <Stack.Screen name="MapScreen" component={MapScreen} />
            <Stack.Screen name="PasportScreen" component={Pasport} />
            <Stack.Screen name="FileScreen" component={FileScreen} />
            <Stack.Screen name="PasportDetailScreen" component={PasportDetailScreen} />
        </Stack.Navigator>
    );
}

export default function NavContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    showLabel: false,
                    activeTintColor: '#ffba00',
                    inactiveTintColor: '#cccccc',
                    inactiveBackgroundColor: '#eeeeee',
                    activeBackgroundColor: '#eeeeee',
                }}>
                <Tab.Screen options={{
                    tabBarVisible: false,
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Svg width="80%" height="80%" viewBox="0 0 20 20" fill={color} >
                                <Path d="M10 2.8c.2 0 .4.1.6.2l5.5 3.9c.3.2.5.6.5.9v8.3c0 .6-.5 1.1-1.1 1.1h-11c-.6 0-1.1-.5-1.1-1.1V7.8c0-.4.2-.7.5-.9L9.4 3c.2-.1.4-.2.6-.2m0-1c-.4 0-.8.1-1.2.4L3.3 6.1c-.6.4-.9 1-.9 1.7v8.3c0 1.2.9 2.1 2.1 2.1h11.1c1.1 0 2.1-1 2.1-2.1V7.8c0-.7-.3-1.4-.9-1.8l-5.5-3.9c-.5-.2-.9-.3-1.3-.3z" fill={color}></Path>
                            </Svg>
                        )
                    }
                }} name="Home" component={HomeScreen} />
                <Tab.Screen options={{
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Svg width="80%" height="80%" viewBox="0 0 20 20" stroke={color} >
                                <Path d="M6.7 12.6V7.5c0-.3.2-.5.5-.5l8.3-.1m-1 4.7l1.9-8.8c.1-.3.3-.4.6-.4h6.2c.3 0 .5.2.5.5v1.6c0 .2-.1.3-.2.4l-.8.9c-.1.1-.2.3-.2.5v5.8"></Path>
                                <Path d="M21.9 17.6H8.7c-1.6 0-2.9-1.3-2.9-2.9 0-1.6 1.3-2.9 2.9-2.9h13.2c1.6 0 2.9 1.3 2.9 2.9 0 1.6-1.3 2.9-2.9 2.9zM4.1 10.8l-.9 6.5c0 .2-.2.4-.4.4H1.4c-.1 0-.2-.1-.2-.3l1.9-6.6c0-.1.1-.2.3-.2H4c.1 0 .2.1.1.2zm-.2 3.8h9.7M10.2 3.5V7"></Path>
                            </Svg>
                        )
                    }
                }} name="MyCarScreen" component={MyCarStack} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}