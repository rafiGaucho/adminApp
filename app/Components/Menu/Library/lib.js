import React, {PropTypes} from 'react';
import {
  View,Image,
  StyleSheet,Text,Dimensions
} from 'react-native';

export default class Lib extends React.Component {
  render() {
    heightScreen= Dimensions.get('window').height/26;
    return (
      <View style={{flex:1,height:'100%',width:'100%'}}>
        <View style={{flex:1,flexDirection:'row'}}>
          <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'space-around',backgroundColor:'#dcdde1'}}>
            <Text style={{fontSize:12}}>Total No of Books</Text>
            <Text style={{fontSize:20,fontWeight:'bold'}}>2586</Text>
          </View>
          <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'space-around',backgroundColor:'#44bd32'}}>
            <View>
              <Text style={{fontSize:12}}>Subscription</Text>
              <Text style={{fontSize:12,paddingTop:0}}>End Days</Text>
            </View>
            <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>03</Text>
          </View>
        </View>
        <View style={{flex:9,height:'100%',alignItems:'center',justifyContent:'center'}}>
          <Image source={require('./library.jpg')}  style={{height:'100%',width:'100%'}}
        resizeMode='stretch' />

          <View style={{position:'absolute',top:'2%',left:'50%'}}>
            <Text style={{fontSize:14,fontWeight:'400'}}>Reference Books</Text>
            <Text style={{fontSize:20,fontWeight:'bold'}}>586</Text>
          </View>
          <View style={{position:'absolute',top:'20%',right:'50%',alignItems:'flex-end'}}>
            <Text style={{fontSize:14,fontWeight:'400'}}>Books Issued</Text>
            <Text style={{fontSize:20,fontWeight:'bold'}}>186</Text>
          </View>
          <View style={{position:'absolute',top:'38%',left:'50%'}}>
            <Text style={{fontSize:14,fontWeight:'400'}}>Books due as on today</Text>
            <Text style={{fontSize:20,fontWeight:'bold'}}>26</Text>
          </View>
          <View style={{position:'absolute',top:'56%',right:'50%',alignItems:'flex-end'}}>
            <Text style={{fontSize:14,fontWeight:'400'}}>Damaged books</Text>
            <Text style={{fontSize:20,fontWeight:'bold'}}>286</Text>
          </View>
          <View style={{position:'absolute',top:'74%',left:'50%'}}>
            <Text style={{fontSize:14,fontWeight:'400'}}>New book request</Text>
            <Text style={{fontSize:20,fontWeight:'bold'}}>185</Text>
          </View>
          <View style={{position:'absolute',top:'89%',right:'50%',alignItems:'flex-end'}}>
            <Text style={{fontSize:14,fontWeight:'400'}}>Journals</Text>
            <Text style={{fontSize:18,fontWeight:'bold',}}>286</Text>
          </View>

        </View>
      </View>
      );
  }
}
