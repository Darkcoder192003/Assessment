import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Login';
import Regiter from '../Register';
import Profilepage from '../Profilepage';
import ChangePassword from '../changepassword';
import User from '../Users';
import Homepage from '../Homepage';
import Data from '../Data/data';


const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <Stack.Navigator >
    <Stack.Screen name="Homepage" component={Homepage} options={{headerShown: false}} />
    <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
    <Stack.Screen name="Data" component={Data} options={{headerShown: false}} />
    <Stack.Screen name="Register" component={Regiter} options={{headerShown: false}} />
    <Stack.Screen name="Profilepage" component={Profilepage} options={{headerShown: false}} />
    <Stack.Screen name="ChangePassword" component={ChangePassword} options={{headerShown: false}} />
    <Stack.Screen name="User" component={User} options={{headerShown: false}} />
  </Stack.Navigator>
  )
}

export default Navigation

const styles = StyleSheet.create({})