import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {useNavigation, CommonActions} from '@react-navigation/native';

export default function Button() {
    const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.submitBtn}
    onPress={()=>navigation.navigate('Register')}
    >
   <Text style={styles.submitText}>
     Join Now
   </Text>
   </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    submitBtn : {
        marginBottom :10,
        marginHorizontal: 20,
        paddingBottom: 10,
        paddingVertical:10,
        borderColor:"#007260",
        borderWidth:3,
        borderRadius:10,
        alignItems: "center",
        justifyContent : 'center',
        backgroundColor: "#FFF"
      },
      submitText : {
        fontSize : 18,
        color : '#39B68D',
        fontWeight:'900'
      }
})