import React, { Component } from 'react'
import { Text, View,Button, StyleSheet } from 'react-native'

function HomeScreen (props){
  return (
    <View style={styles.viewStyle}>
      <Text style={{color:'black', fontSize:30,alignItems:'center', textAlign:'center'}}> PFS</Text>
    </View>
  )}

const styles = StyleSheet.create({
  viewStyle:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flex:1,
    backgroundColor:'white'
  }
})

export default HomeScreen
