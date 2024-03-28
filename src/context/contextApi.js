import React,{createContext, useState,useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLinkProps } from '@react-navigation/native';

const AuthContext = createContext()

const AuthProvider = ({children}) =>{
    const [state,setState] = useState({
       user : null
    });
    useEffect(() => {
        const getLocalStorageData = async() =>{
            const json = await AsyncStorage.getItem('user')
            const parseData= await JSON.parse(json);
              setState({...state,user:parseData?.User});
    }
    getLocalStorageData()
}, [])
return (
    <AuthContext.Provider value={[state,setState]}>
        {children}
    </AuthContext.Provider>
)
    
};
export {AuthContext,AuthProvider}