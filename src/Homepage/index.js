import { StyleSheet, Text, View,ImageBackground,Image,TouchableOpacity,Dimensions,ScrollView } from 'react-native'
import React, {useContext } from 'react'
import { AuthContext } from '../context/contextApi';
import LinearGradient from 'react-native-linear-gradient'
import Logout from '../Logout';
import ChangePasswordBtn from '../changepassword/changePasswordbtn';

const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;

const Homepage = ({navigation}) => {
  const [state] = useContext(AuthContext)
  const name = state.User.name
  const email =state.User.email
  const gender =state.User.gender
  return (
    <ScrollView style={{backgroundColor:"#1A2238"}}>
      <ImageBackground
      source={require('../assets/profile.jpg')}
      style={{
        height:0.45*DeviceHeight,
      }
      } 
      >
      <View style={{
        flexDirection:'row',
        justifyContent: 'space-between',
        paddingEnd:20,
        marginTop: 60,
        alignItems: 'center'
      }}>
      </View>

      <LinearGradient colors={["rgb(26,34,56)","transparent"]} style={{transform:[{rotate:'180deg'}],
      position: 'absolute',
      left :0,
      bottom:0,
      zIndex:1,
      height: 0.16*DeviceHeight,
      width : DeviceWidth
      }}  >
      <Text style={{
        transform:[{rotate:"-180deg"}],
        color: "#FFF",
        fontSize : 50,
        marginVertical:30,
        alignSelf: 'center'
      }}>
      {name}
      </Text>
      </LinearGradient>
      </ImageBackground>
      <View
      style={{
        flexDirection: 'row',
        alignItems : 'center',
        justifyContent: 'space-around',
        paddingHorizontal:35
      }}
      >
      <View style={{alignItems:"center"}}>
      <Text
      style={{
        fontSize:18,
        color:"#FFF",
        fontWeight:'bold'}}
      >
      {email}
      </Text>
      <Text
      style={{
        fontSize :18,
        color: "#918998",
        fontWeight: "bold"
      }}
      >
      Email
      </Text>
      </View>
      <View style={{alignItems:"center"}}>
      <Text
      style={{
        fontSize:18,
        color:"#FFF",
        fontWeight:'bold'}}
      >
      {gender}
      </Text>
      <Text
      style={{
        fontSize :18,
        color: "#918998",
        fontWeight: "bold"
      }}
      >
      Gender
      </Text>
      </View>
      </View>
      <View style={
        {
        flexDirection :'column',
        alignItems: "center",
        justifyContent: "center",
        backgroundColor : "#3f5388",
        marginTop:30,
        marginHorizontal:10,
        borderRadius :10,
        paddingHorizontal:5,
        paddingVertical:5

        }
      }>
      <Text
      style={{
        textAlign: 'center',
        color: "#FFF",
        fontSize :30,
        fontWeight :"900"
      }}
      >About</Text>
      <Text
      style={{
        color: "#FFF",
        fontSize: 15,
        paddingHorizontal :10
      }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut unde non ullam provident natus. At expedita non nulla excepturi nihil, ut deleniti libero quae repudiandae eum, porro culpa voluptatibus commodi.</Text>
      <Text
      style={{
        color: "#FFF",
        fontSize: 15,
        paddingHorizontal :10
      }}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint molestias, nemo tempora autem natus at. Aspernatur incidunt illum nesciunt cumque nam necessitatibus error amet adipisci a illo ab nihil cum, laborum magnam at aut quas quibusdam, ut libero consequuntur rem sunt veniam quam quasi? Quidem debitis harum nesciunt soluta illum.
      </Text>

      </View>
      <Logout/>
      <ChangePasswordBtn/>
    </ScrollView>

  )
}

export default Homepage

const styles = StyleSheet.create({})