import React, {useEffect, useState} from 'react'
import {useNavigation, CommonActions} from '@react-navigation/native';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function ChangePasswordModal() {
  const [email,setEmail] = useState('')
  useEffect(()=>{
    const getEmail = async()=>{
       const useremail = await AsyncStorage.getItem('userEmail')
       setEmail(useremail);
    }
    getEmail()
  })
  const [password, setPassword] = useState('');
  const [newpassword, setNewPassword] = useState('');
  const [loading, setIsLoading] = useState(false);
  const [isFormValid, setIsFormValid] = useState({
    password: false,
    newpassword: false,
  });
  const navigation = useNavigation();
  const handleFformData = event => {
    if (event.name === 'password') setPassword(event.value);
    else if (event.name === 'newpassword') setNewPassword(event.value);
  };
  const handleSubmit = async () => { 
    try {
      let oldValues = isFormValid;
      if (!password) {
        oldValues = {...oldValues, password: true};
      } else if (password.length < 8) {
        oldValues = {...oldValues, password: true};
      } else {
        oldValues = {...oldValues, password: false};
      }
      if (!newpassword) {
        oldValues = {...oldValues, newpassword: true};
      } else if (password.length < 8) {
        oldValues = {...oldValues, newpassword: true};
      } else {
        oldValues = {...oldValues, newpassword: false};
      }
      setIsFormValid(oldValues);
      setIsLoading(true);
      const url = 'http://10.0.2.2:8080/api/v1/auth/changepassword'
      const response = await fetch(url, {
        method: "PUT", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email,password,newpassword})
      });
      const json = await response.json();
      if(json.success==false){
        Alert.alert(json.message)
        return;
      }
      Alert.alert(json.message);
      setIsLoading(false);
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'Login'}],
        }),
      );
    } catch (err) {
      setIsLoading(false);
    }
  };
  return {
    password,
    setPassword,
    newpassword,
    setNewPassword,
    handleSubmit,
    isFormValid,
    handleFformData,
    loading,
  };
}