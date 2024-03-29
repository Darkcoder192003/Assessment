import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect, useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import User from '../Users';
import {useNavigation, CommonActions} from '@react-navigation/native';
import Profilepage from '../Profilepage';

const Data = () => {
    const [user,setUser] = useState(null)
    const navigation = useNavigation();
         useEffect(()=>{
            const fetchUserData = async () => {
                const authToken = await AsyncStorage.getItem('userToken');
        const url = 'http://10.0.2.2:8080/api/v1/auth/getuser'
        const response= await fetch(url, {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
            "auth-token" : JSON.parse(authToken)
          },
        })
        const userData = await response.json();
        await AsyncStorage.setItem('userEmail',userData.email);

        setUser(userData);
    }
    fetchUserData(); 
    },[])
    
  return (
    <View>
    {user ? (
     user.usertype=='user' ? ( <Profilepage user={user}/>):(<User/>)
      
    ) : (
        <View>
      <Text>Loading user data...</Text>
      </View>
    )}
  </View>
  )
}

export default Data

const styles = StyleSheet.create({})