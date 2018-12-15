import React, { Component } from 'react';
import {
  View,
  StyleSheet,Text,Image,Dimensions
} from 'react-native';
import { Body, Content,Card,Item,Input, Icon,Button} from 'native-base';
import {createMaterialTopTabNavigator} from 'react-navigation'
import MessageContainer from './Message'
// import VoiceContainer from './Voice'
// import ChatContainer from './Chat'
import {connect} from 'react-redux'

 class MessageScreenContainer extends React.Component {

  render() {
    heightScreen= Dimensions.get('window').height;
    return (
      <View style={[{height:heightScreen*(25/26)}]}>


        <View style={{flex:1.5,backgroundColor:'#3B3B98',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <View>
              <Button transparent disabled={this.props.startRecord} onPress={this.props.func} style={{marginTop:10,}}><Icon name='arrow-round-back' style={{color:'white'}}/></Button>
            </View>
            <Text style={{color:'white',fontSize:20,fontWeight:'600',paddingTop:7}}>MESSAGE</Text>
          </View>
          <View>
            <Button transparent  style={{marginTop:10,}}><Icon name='search' style={{color:'white',fontSize:32}}/></Button>
          </View>
        </View>


        <View style={{flex:12.25,backgroundColor:'#575fcf'}}>
          <Tabs screenProps={{islock:this.props.islock}}/>
        </View>


        <View style={{flex:0.75,backgroundColor:'#575fcf'}}></View>


      </View>
    );
  }
}

const Tabs=createMaterialTopTabNavigator({
  Message:MessageContainer,
  // Voice:VoiceContainer,
  // Chat:ChatContainer
})
mapStateToProps=(state)=>({
  islock:state.voice.tabLock,startRecord:state.voice.startRecord
})

export default connect(mapStateToProps)(MessageScreenContainer)
