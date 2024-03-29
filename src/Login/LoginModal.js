import {useState,useContext} from 'react';
import { AuthContext } from '../context/contextApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation, CommonActions} from '@react-navigation/native';
import {Alert} from 'react-native';
import { ScreenStackHeaderBackButtonImage } from 'react-native-screens';
import auth from '@react-native-firebase/auth';
export default function LoginModal() {
  const [state,setState] = useContext(AuthContext)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setIsLoading] = useState(false);
  const [companyId, setCompanyId] = useState('');
  const [isFormValid, setIsFormValid] = useState({
    email: false,
    password: false,
  });
  const navigation = useNavigation();
  const handleFformData = event => {
    if (event.name === 'email') setEmail(event.value);
    else if (event.name === 'password') setPassword(event.value);
    else if (event.name === 'companyId') setCompanyId(event.value);
  };
  const handleSubmit = async () => { 
    try {
      let oldValues = isFormValid;
      if (!companyId) {
        oldValues = {...oldValues, companyId: true};
      } else if (companyId.length < 1) {
        oldValues = {...oldValues, companyId: true};
      } else { 
        oldValues = {...oldValues, companyId: false};
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
      setIsFormValid(oldValues);
      setIsLoading(true);
      const url = 'http://10.0.2.2:8080/api/v1/auth/login'
      const response = await fetch(url, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email,password})
      });
      const json = await response.json();
      // console.log(json.token)
      setState(json)
      if(json.success==false){
        Alert.alert(json.message)
        return;
      }
      await AsyncStorage.setItem('user',JSON.stringify(json));
      await AsyncStorage.setItem('userToken', JSON.stringify(json.token));
      setIsLoading(false);
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'Data'}],
        }),
      );
    } catch (err) {
      setIsLoading(false);
    }
  };
  return {
    email,
    password,
    setEmail,
    setPassword,
    handleSubmit,
    isFormValid,
    handleFformData,
    loading,
  };
}

// export default LoginModal;