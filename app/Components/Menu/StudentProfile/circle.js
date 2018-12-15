import React, { Component } from 'react';
import {
  View,
  StyleSheet,TouchableOpacity
} from 'react-native';
import {Icon} from 'react-native-elements';
export const CircleCall=props=>{
  return(
    <TouchableOpacity style={{height:50,width:50,borderRadius:25,borderWidth:0,
      alignItems:'center',justifyContent:'center',backgroundColor:'#5352ed'}}>
     <Icon name='ios-call' type='ionicon' size={34} color='white'/>
   </TouchableOpacity>
 )
}
export const CircleMessage=props=>{
  return(
    <TouchableOpacity style={{height:50,width:50,borderRadius:25,borderWidth:0,
      alignItems:'center',justifyContent:'center',backgroundColor:'#ffa502'}}>
     <Icon name='envelope-o' type='font-awesome' size={24} color='white'/>
   </TouchableOpacity>
 )
}
