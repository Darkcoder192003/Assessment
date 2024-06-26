import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation, CommonActions} from '@react-navigation/native';

const Logout = () => {
    const navigation = useNavigation();
    const handleLogout = async() =>{
        await AsyncStorage.removeItem('user')
        navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{name: 'Login'}],
            }),
          );
    }
  return (
    <TouchableOpacity style={styles.submitBtn}
     onPress={handleLogout}
     >
    <Text style={styles.submitText}>
      Logout
    </Text>
    </TouchableOpacity>
  )
}

export default Logout

const styles = StyleSheet.create({
    submitBtn : {
        height : 33,
        width : '80%',
        backgroundColor : '#394b7b',
        color : '#fff',
        borderRadius: 30,
        flex :1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: '10%',
        marginTop:20
      },
      submitText : {
        fontSize : 18,
        color : '#fff',
        fontWeight:'900'
      }
})