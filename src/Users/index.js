
import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Logout from '../Logout';
export default function User() {
  const [data,setData] = useState([])
  const getData = async () =>{
    const url = 'http://10.0.2.2:8080/api/v1/auth/users'
    const apiData = await fetch(url)
    const result = await apiData.json();
    setData(result)
  }
  useEffect(()=>{
    getData();
  },[])
  return (
    <View style={{backgroundColor: "#39B68D",height:"100%"}}>
          <ScrollView >
        <View style={styles.secContainer}>
          <View style={{}}>
            <Text style={{fontSize:30,textAlign:"center",color:"#FFF",fontWeight:"bold"}}>All Users</Text>
          </View>
          <View>
            {
              data.map((item)=>(
                <View key = {item._id} style={styles.inputContainer}>
                  <View style={styles.output}>
                  <Text style={{color: "#FFF",fontSize:20}}>{item.name}</Text>
                  <Text style={{color: "#FFF",fontSize:20}}>{item.age}</Text>
                  </View>
                  <View>
                  <Text style={{color: "#FFF",fontSize:15,margin :5}}>{item.email}</Text>
                  </View>
                  </View>
              ))
            }
            {/* <Text>{data}</Text> */}
          </View>
        </View>
      </ScrollView>
      <View style={{flex:1,position:"absolute",
      bottom:20,left:"30%"}}>

      <Logout/>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container :{
    margin: 20,
    flex :1,
  },
  secContainer:{
    marginTop : 15,
    padding : 10,
    flex:1
  },
  inputContainer :{
    borderColor: "#FFFF",
    borderWidth : 2,
    borderRadius :10,
    padding: 10,
    margin : 5,
  },
  output: {
    display : "flex",
    flexDirection : "row",
    justifyContent : "space-between"
  }
});
