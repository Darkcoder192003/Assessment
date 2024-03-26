import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Login';
import Regiter from '../Register';
import Users from '../Users';


const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <Stack.Navigator>
    {/* <Stack.Screen name="Home" component={Login} options={{headerShown: false}} /> */}
    <Stack.Screen name="Notifications" component={Regiter} options={{headerShown: false}} />
    {/* <Stack.Screen name="Users" component={Users} options={{headerShown: false}} /> */}
  </Stack.Navigator>
  )
}

export default Navigation

const styles = StyleSheet.create({})