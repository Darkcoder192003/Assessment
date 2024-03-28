import React, {useState,useContext } from 'react'
import { AuthContext } from '../context/contextApi';
import {useNavigation, CommonActions} from '@react-navigation/native';
import {Alert} from 'react-native';
export default function ChangePasswordModal() {
  const [state] = useContext(AuthContext)
  const email =state.User.email
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
        console.log("ChangePasswordcalled")
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
      console.log(email,password,newpassword)
      const url = 'http://10.0.2.2:8080/api/v1/auth/changepassword'
      const response = await fetch(url, {
        method: "PUT", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email,password,newpassword})
      });
      const json = await response.json();
      console.log(json)
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