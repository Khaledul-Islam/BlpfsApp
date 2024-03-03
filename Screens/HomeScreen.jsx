import React, { Component } from 'react'
import { Text, View,Button, StyleSheet } from 'react-native'

function HomeScreen (props){
  console.log(props);
  return (
    <View style={styles.viewStyle}>
      <Text style={{color:'black', fontSize:30,alignItems:'center', textAlign:'center'}}> Welcome to Banglalink PFS</Text>
      <Button title='User' onPress={()=>props.navigation.navigate("User")}/>
    </View>
  )}

const styles = StyleSheet.create({
  viewStyle:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flex:1,
    backgroundColor:'orange'
  }
})

export default HomeScreen
