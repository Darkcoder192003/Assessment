import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation, CommonActions} from '@react-navigation/native';

const ChangePasswordBtn = () => {
    const navigation = useNavigation();
    const handleChangePassword = async() =>{
        await AsyncStorage.removeItem('user')
        navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{name: 'ChangePassword'}],
            }),
          );
    }
  return (
    <TouchableOpacity style={styles.submitBtn}
     onPress={handleChangePassword}
     >
    <Text style={styles.submitText}>
      Change Password
    </Text>
    </TouchableOpacity>
  )
}

export default ChangePasswordBtn

const styles = StyleSheet.create({
    submitBtn : {
        height : 35,
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
        fontSize : 20,
        color : '#fff',
        fontWeight:'900'
      }
})