import {useState,useContext} from 'react';
import { AuthContext } from '../context/contextApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation, CommonActions} from '@react-navigation/native';
import {Alert} from 'react-native';
import axios from 'axios';


export default function RegisterViewModel() {
  const [state,setState] = useContext(AuthContext)
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [dropDownValue, setDropDownValue] = useState(null);
  const [isFormValid, setIsFormValid] = useState({
    id: false,
    name: false,
    email: false,
    password: false,
    dropDownValue: false,
  }); 
    const dropdownOptions = [
      {label: 'Male', value: 'Male'},
      {label: 'Female', value: 'Female'},
      {label: 'Other', value: 'Other'},
    ];
  const navigation = useNavigation();
  const handleFformData = event => {
    if (event.name === 'name') setName(event.value);
    if (event.name === 'email') setEmail(event.value);
    if (event.name === 'id') setId(event.value);
    if (event.name === 'password') setPassword(event.value);
    if (event.name === 'dropDownValue') setDropDownValue(event.value);
  };
  const updateProfile = async () => {
    console.log("Update")
    try {
      setLoading(true);
      let oldValues = isFormValid;
      if (
        name === '' ||
        name === null ||
        name === undefined ||
        name.length < 3
      ) {
        oldValues = {...oldValues, name: true};
      } else {
        oldValues = {...oldValues, name: false};
      }
      if (!email) {
        oldValues = {...oldValues, email: true};
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        oldValues = {...oldValues, email: true};
      } else {
        oldValues = {...oldValues, email: false};
      }
      if (!password) {
        oldValues = {...oldValues, password: true};
      } else if (password.length < 8) {
        oldValues = {...oldValues, password: true};
      } else {
        oldValues = {...oldValues, password: false};
      }
      if (!dropDownValue === null) {
        oldValues = {...oldValues, dropDownValue: true};
      } else {
        oldValues = {...oldValues, dropDownValue: false};
      }
      setLoading(false);
      setIsFormValid(oldValues);
      if (
        oldValues.email ||
        oldValues.name ||
        oldValues.password ||
        oldValues.id ||
        oldValues.dropDownValue
      )
       
      return;
      const data = {
        name : name,
        email : email,
        password : password,
        gender: dropDownValue
      }
      const url = 'http://10.0.2.2:8080/api/v1/auth/register'
      const response =await fetch(url,{
        method : "POST",
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify(data)
      })
      const json = await response.json();

      setState(json)
      if(json.success==false){
        Alert.alert(json.message)
        return;
      }
      await AsyncStorage.setItem('user',JSON.stringify(data));
    
      setLoading(false);
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'Homepage'}],
        }),
      );
      console.log('Regitered')
    } catch (error) {
      setLoading(false);
    }
  };
  return {
    name,
    email,
    password,
    setEmail,
    setName,
    setPassword,
    dropdownOptions,
    dropDownValue,
    setDropDownValue,
    loading,
    show,
    handleFformData,
    isFormValid,
    updateProfile,
  };
}
