import {useState,useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation, CommonActions} from '@react-navigation/native';
import {Alert} from 'react-native';


export default function RegisterViewModel() {
  // const [state,setState] = useContext(AuthContext)
  const [loading, setLoading] = useState(false);
  const [usertype, setUsertype] = useState('user'); 

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [secretkey,setSecretkey] = useState(null)
  const [dropDownValue, setDropDownValue] = useState(null);
  const [isFormValid, setIsFormValid] = useState({
    name: false,
    email: false,
    password: false,
    dropDownValue: false,
    usertype: false
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
    if (event.name === 'usertype') setUsertype(event.value);
    if (event.name === 'password') setPassword(event.value);
    if (event.name === 'dropDownValue') setDropDownValue(event.value);
    if (event.name === 'secretkey') setSecretkey(event.value);
  };
  const updateProfile = async () => {
    try {
      if(usertype=='admin' && secretkey!= 'kuldeep'){
        Alert.alert('Invalid Admin')
        return;
      }
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
        oldValues.dropDownValue
      )
       
      return;
      const data = {
        name : name,
        email : email,
        password : password,
        gender: dropDownValue,
        usertype: usertype
      }
      const url = 'http://10.0.2.2:8080/api/v1/auth/register'
      const response =await fetch(url,{
        method : "POST",
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify(data)
      })
      const json = await response.json();

      // setState(json)
      if(json.success==false){
        Alert.alert(json.message)
        return;
      }
      await AsyncStorage.setItem('user',JSON.stringify(data));
      await AsyncStorage.setItem('userToken', JSON.stringify(json.token));
    
      setLoading(false);
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'Data'}],
        }),
      );
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
    usertype,
    setUsertype,
    secretkey,
    setSecretkey
  };
}
