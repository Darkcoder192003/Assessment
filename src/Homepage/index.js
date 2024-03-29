import { Image, StyleSheet, Text, View,Pressable } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Button from './Button'
import {useNavigation, CommonActions} from '@react-navigation/native';

const Homepage = () => {
    const navigation = useNavigation();
  return (
   <LinearGradient
   style={{
       flex:1
   }}
   colors={["#39B68D","#007260"]}
   >
   <View style={{flex:1
   }}>
   <Image
   source={require('../assets/image1.jpeg')}
   style={[styles.imgStyle,styles.img1]}/>
   <Image
   source={require('../assets/image2.jpeg')}
   style={[styles.imgStyle,styles.img2]}/>
   <Image
   source={require('../assets/image3.jpeg')}
   style={[styles.imgStyle,styles.img3]}/>
   </View>
   <View style={styles.container}>
       <Text style={styles.text}>Let's Get</Text>
       <Text style={styles.text}>Started</Text>
   </View>
   <View>
       <Button/>
   </View>
   <Pressable
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom:30
          }}
          onPress={() => navigation.navigate('Login')}>
          <Text style={{fontSize:18,color: "#fff"}}>Already have an account? Login</Text>
        </Pressable>
   </LinearGradient>
  )
}

export default Homepage

const styles = StyleSheet.create({
    imgStyle:{
        height :100,
        width :100,
        borderRadius :15,
    },
    img1 :{
        position :"absolute",
        top :0,
        left :110,
        transform : [
            {translateX :20},
            {translateY :50},
            {rotate : "-0deg"}
        ]
    },
    img2 :{
        height :200,
        width :200,
        position :"absolute",
        top :100,
        left :200,
        transform : [
            {translateX :20},
            {translateY :50},
            {rotate : "15deg"}
        ]
    },
    img3 :{
        position :"absolute",
        top :45,
        transform : [
            {translateX :20},
            {translateY :50},
            {rotate : "-15deg"}
        ]
    },
    container :{
        paddingHorizontal:22,
        position:"absolute",
        top : 400,
        width : "100%",
    },
    text:{
        fontSize: 50,
        fontWeight: 'bold',
        color: "#FFF"
    }

})