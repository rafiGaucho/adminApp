import React, { Component } from 'react';
import {
  View,Dimensions,
  StyleSheet,TouchableOpacity
} from 'react-native';
import {Icon} from 'react-native-elements';

export const Circle=props=>{
  heightScreen= Dimensions.get('window').height;
  heightCircle=(heightScreen*3)/25.4;
  borderRadiusCircle=heightCircle/2;
  return(
    <TouchableOpacity style={[{borderWidth:2,borderColor:'white',
      backgroundColor:'#3B3B98',alignItems:'center',justifyContent:'center'},
      {height:heightCircle,width:heightCircle,borderRadius:borderRadiusCircle}]}
      onPress={props.func}>
     <Icon name={props.name} type={props.type} size={34} color='white'/>
   </TouchableOpacity>
 )
}
