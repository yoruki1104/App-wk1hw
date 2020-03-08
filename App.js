import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    
    <View style={styles.container}>
      <View style={styles.area}>
      <View style={styles.top}></View>
       <View style={styles.card}>
       <View style={styles.card2}>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
        </View>
      </View>
      </View>
      <View style={styles.area}>
        <Text style={styles.text2}>100%</Text>
        <Text style={styles.text3}>complete!</Text>
        <Text style={styles.text}>110719036</Text>
       <Text style={styles.text}>黃盈瑄</Text>
      </View>
     
     
      
     
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#00A29A',
    alignItems: 'center',
    justifyContent: 'center',
  },
 area: {
    flex: 1,
    backgroundColor: '#00A29A',
    alignItems: 'center',
    marginTop:70,
 
  },
  text:{
    marginTop:10,
    fontSize:30,
    color:'white',
    
  },
  text2:{
    top:-200,
    fontSize:50,
    color:'black',
    fontWeight:'bold',
    
  },
  text3:{
    top:-50,
    fontSize:30,
    color:'black',
    fontWeight:'bold',
    
  },
  card:{
    width:200,
    height:280,
    backgroundColor:'black',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:10,
    marginBottom:20,
  },
  card2:{
    width:170,
    height:250,
    backgroundColor:'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  top:{
    width:100,
    height:30,
    backgroundColor:'black',
    marginTop:0,
    marginBottom:-5,
    marginLeft:0,
    borderRadius:5,
  },
  box:{
    width:150,
    height:40,
    backgroundColor:'#8FC31F',
    marginTop:10,
    marginBottom:10,
   
  },
});