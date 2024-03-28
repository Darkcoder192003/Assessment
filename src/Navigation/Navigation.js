import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Login';
import Regiter from '../Register';
import Homepage from '../Homepage';
import ChangePassword from '../changepassword';


const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
    <Stack.Screen name="Register" component={Regiter} options={{headerShown: false}} />
    <Stack.Screen name="Homepage" component={Homepage} options={{headerShown: false}} />
    <Stack.Screen name="ChangePassword" component={ChangePassword} options={{headerShown: false}} />
  </Stack.Navigator>
  )
}

export default Navigation

const styles = StyleSheet.create({})