/* eslint-disable prettier/prettier */
import {StyleSheet, View, ScrollView, Pressable, Image} from 'react-native';
import React from 'react';
import Component from '../components';
import ChangePasswordModal from './changePasswordModal'

const ChangePassword = ({navigation}) => {
  const {
    password,
    newpassword,
    handleSubmit,
    isFormValid,
    loading,
    handleFformData,
  } = ChangePasswordModal();

  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
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
              fontSize={24}
              color={'#000000'}
              text={'Change Password'}
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
              onChangeText={value => handleFformData({name: 'password', value})}
              placeholder={'Old Password'}
              value={password}
            />
            {isFormValid.password && (
              <Component.CustomText
                color="red"
                marginTopBottom={30}
                fontSize={14}
                text={'Password should be at least 6 character'}
              />
            )}

            <Component.AuthInputField
              paddingLeft={12}
              style={styles.inputField}
              marginTopBottom={4}
              height={55}
              color={'black'}
              width={Component.DeviceWidth * 0.84}
              placeholder={'New Password'}
              onChangeText={value => handleFformData({name: 'newpassword', value})}
              value={newpassword}
            />
            {isFormValid.newpassword && (
              <Component.CustomText
                color="red"
                fontSize={14}
                text={'Please enter a valid password'}
              />
            )}
          </View>
          <Component.Spacer top={12} />
          <Component.SubmitButton 
            text={'Change Password'}
            handleSubmit={handleSubmit}/>
          <Component.Spacer top={12} />
        </View>
      </ScrollView>
    </View>
  );
};

export default ChangePassword;

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