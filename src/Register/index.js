import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Pressable,
} from 'react-native';
import React, { useMemo, useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import Component from '../components';
import registerModal from './registermodal';
import LinearGradient from 'react-native-linear-gradient'
import { RadioButton } from 'react-native-paper';


const Regiter = ({ navigation }) => {
  const {
    name,
    email,
    password,
    dropdownOptions,
    dropDownValue,
    setDropDownValue,
    loading,
    isFormValid,
    updateProfile,
    handleFformData,
    usertype,
    setUsertype,
    secretkey
  } = registerModal();
  return (
    <LinearGradient
      style={{
        flex: 1,
      }}
      colors={["#39B68D", "#007260"]}
    >
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          <View style={{
            flex: 1
          }}>
            <View style={styles.container}>
              <Component.Spacer top={8} />
              <Component.CustomText
                fontSize={30}
                color={'#FFF'}
                text={'Register'}
              />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'flex-start',
                paddingLeft: 30,
              }}>
              <Component.AuthInputField
                paddingLeft={12}
                style={styles.inputField}
                placeholder={'Full Name'}
                color={'black'}
                marginTopBottom={4}
                height={55}
                width={Component.DeviceWidth * 0.84}
                onChangeText={value => handleFformData({ name: 'name', value })}
                value={name}
              />
              {isFormValid.name && (
                <Component.CustomText
                  color="red"
                  fontSize={14}
                  text={'Full Name'}
                />
              )}

              <Component.AuthInputField
                paddingLeft={12}
                style={styles.inputField}
                color={'black'}
                placeholder={'Email'}
                marginTopBottom={4}
                height={55}
                width={Component.DeviceWidth * 0.84}
                onChangeText={value => handleFformData({ name: 'email', value })}
                value={email}

              />
              {isFormValid.email && (
                <Component.CustomText
                  color="red"
                  fontSize={14}
                  text={'Please enter a valid email id'}
                />
              )}

              <Component.AuthInputField
                paddingLeft={12}
                type={password}
                style={styles.inputField}
                placeholder={'Password'}
                color={'black'}
                marginTopBottom={4}
                height={55}
                width={Component.DeviceWidth * 0.84}
                onChangeText={value => handleFformData({ name: 'password', value })}
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

              <Component.Spacer top={10} />
              <Dropdown
                style={styles.dropdown}
                data={dropdownOptions}
                maxHeight={200}
                labelField="label"
                valueField="value"
                placeholder={'Select Gender'}
                color={'black'}
                itemTextStyle={{ color: 'black' }}
                selectedTextStyle={{ color: 'black' }}
                placeholderStyle={{ color: 'black' }}
                value={dropDownValue}
                onChange={item => {
                  setDropDownValue(item.value);
                }}
                renderRow={(option, index, isSelected) => (
                  <Text
                    style={{
                      color: 'black',
                      padding: 10,
                      borderBottomWidth: 1,
                      borderBottomColor: '#887E7E',
                    }}>
                    {option.label}
                  </Text>
                )}
              />
              {isFormValid.dropDownValue && (
                <Component.CustomText
                  color="red"
                  fontSize={14}
                  text={'Please select gender'}
                />
              )}
            </View>
            {/* <Component.Spacer top={20} /> */}
            <View style={{ display: "flex", alignItems: "center" }}>
              <View style={styles.radioGroup}>
                <View style={styles.radioButton}>
                  <RadioButton.Android
                    value="admin"
                    status={usertype === 'admin' ?
                      'checked' : 'unchecked'}
                    onPress={() => setUsertype('admin')}
                    color="#007BFF"
                  />
                  <Text style={styles.radioLabel}>
                    Admin
                  </Text>
                </View>
                <View style={styles.radioButton}>
                  <RadioButton.Android
                    value="user"
                    status={usertype === 'user' ?
                      'checked' : 'unchecked'}
                    onPress={() => setUsertype('user')}
                    color="#007BFF"
                  />
                  <Text style={styles.radioLabel}>
                    User
                  </Text>
                </View>
              </View>
              {usertype== 'admin' ?
              <View>
              <Component.AuthInputField
                paddingLeft={12}
                style={styles.inputField}
                color={'black'}
                placeholder={'Secret Key'}
                marginTopBottom={4}
                height={55}
                width={Component.DeviceWidth * 0.84}
                onChangeText={value => handleFformData({ name: 'secretkey', value })}
                value={secretkey}

              />
              </View>
              : null
              }
            </View>
            <Component.Spacer top={20} />
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Component.SubmitButton
                text={'Submit'}
                handleSubmit={updateProfile} />
            </View>
            <Pressable
              style={{
                justifyContent: 'center',
                marginVertical: 10,
                alignItems: 'center',
              }}
              onPress={() => navigation.navigate('Login')}>
              <Component.CustomText text={'Already have an account? Login'} color={'white'} />
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  )
}

export default Regiter

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 31,
  },
  dropdown: {
    height: 55,
    width: Component.DeviceWidth * 0.84,
    borderColor: '#887E7E',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 8,
    backgroundColor: 'white',
  },

  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
    borderRadius: 6,
  },
  inputField: {
    color: 'black',
    borderWidth: 1, // Set border width
    borderColor: '#887E7E',
    alignSelf: 'flex-start',
    borderRadius: 5, // Set border color
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  radioGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    borderRadius: 8,
    padding: 10,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10
  },
  radioLabel: {
    marginLeft: 8,
    fontSize: 16,
    color: '#333',
  },
});