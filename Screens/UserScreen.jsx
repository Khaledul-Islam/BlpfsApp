import React, { Component } from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


function UserScreen(props){
  return (
    <View style={styles.viewStyle}>
      <Text style={{color:'black', fontSize:30,alignItems:'center', textAlign:'center'}}> PFS User </Text>
      
      <Icon name="user" size={50} color="#900" style={{padding:10}}/>
      <Button title='Home' onPress={()=>props.navigation.navigate("Home")}/>
    </View>
  )  
}

const styles = StyleSheet.create({
  viewStyle:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flex:1,
    backgroundColor:'coral'
  }
})
export default UserScreen
