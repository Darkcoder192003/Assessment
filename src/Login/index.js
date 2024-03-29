/* eslint-disable prettier/prettier */
import {StyleSheet, View, ScrollView, Pressable, Image} from 'react-native';
import React from 'react';
import { AuthContext } from '../context/contextApi';
import Component from '../components';
import LoginModal from './LoginModal'
import LinearGradient from 'react-native-linear-gradient'

const Login = ({navigation}) => {
  const {
    email,
    password,
    handleSubmit,
    isFormValid,
    loading,
    handleFformData,
  } = LoginModal();

  return (
    <LinearGradient
    style={{
        flex:1,
    }} 
    colors={["#39B68D","#007260"]}
    >
    <View style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <View style={{ 
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 32,
          paddingTop: 16,
          flex: 1,
        }}>
          <View style={styles.container}>
            <Component.Spacer top={8} />
            <Component.CustomText
              fontSize={40}
              color={'#FFF'}
              text={'Login'}
            />
          </View>
          <Component.Spacer top={12} />
          <View
            style={{
              flex: 1,
              paddingLeft: '5%',
            }}>
            <Component.AuthInputField
              paddingLeft={12}
              style={styles.inputField}
              marginTopBottom={4}
              height={55}
              color={'black'}
              width={Component.DeviceWidth * 0.84}
              onChangeText={value => handleFformData({name: 'email', value})}
              placeholder={'Email'}
              value={email}
            />
            {isFormValid.email && (
              <Component.CustomText
                color="red"
                marginTopBottom={30}
                fontSize={14}
                text={'Please enter a valid email ID'}
              />
            )}

            <Component.AuthInputField
              paddingLeft={12}
              style={styles.inputField}
              marginTopBottom={4}
              height={55}
              color={'black'}
              width={Component.DeviceWidth * 0.84}
              placeholder={'Password'}
              onChangeText={value => handleFformData({name: 'password', value})}
              value={password}
              secureTextEntry={true}
            />
            {isFormValid.password && (
              <Component.CustomText
                color="red"
                fontSize={14}
                text={'Please enter a valid password'}
              />
            )}
          </View>
          <Component.Spacer top={12} />
          <Component.SubmitButton 
            text={'Login'}
            handleSubmit={handleSubmit}/>
          <Component.Spacer top={12} />
          <Pressable onPress={() => navigation.navigate('Register')}>
            <Component.CustomText text={"Don't have an account? Register"} color={'white'} />
          </Pressable>
        </View>
      </ScrollView>
    </View>
    </LinearGradient>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    paddingVertical: 20,
    paddingHorizontal: 31,
  },
  inputField: {
    color: 'black',
    borderWidth: 1,
    borderColor: '#887E7E',
    alignSelf: 'flex-start',
    borderRadius: 5,
  },
  bottomImageContainer: {
    zIndex: 1,
    bottom: 0,
    position: 'absolute',
    justifyContent: 'flex-end',
  },
});