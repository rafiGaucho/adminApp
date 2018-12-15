import React, {Component} from 'react';
import {View,StyleSheet,Image,TextInput,Dimensions} from 'react-native';
import { Body, Content,Item,Input, Text, Icon,Button} from 'native-base';
import MessageScreen from './../MessageScreen';
import Notification from './../Notification';
import Profile from './../Profile';
import Settings from './../Settings';
import Menu from './../Menu';
import Main from './../Menu/index0.js';
import Contact from './../Contact'
import {DrawerNavigator,DrawerItems} from 'react-navigation'
import {connect} from 'react-redux';
import {logoutUser} from './../../store/session/actions.js'
import CustomDrawer from './customDrawer.js'
const widthScreen= Dimensions.get('window').width/18;

 class Home extends Component {
render() {
  return (<HomeDrawer screenProps={{islock:this.props.islock}}/> );
}
}


const HomeDrawer= DrawerNavigator({
  menu:{
    screen:Main,
  },
  profile:{
    screen:Profile
  },
  Message:{
    screen:MessageScreen
  },
  Notification:{screen:Notification
  },
  Contacts:{
    screen:Contact
  },
  Settings:{
    screen:Settings
  }
},{
  initialRouteName:'menu',
  contentComponent:CustomDrawer ,
  drawerOpenRoute:'DraweOpen',
  drawerCloseRoute:'DraweClose',
  drawerToggleRoute:'DraweToggle',drawerWidth:widthScreen*13.5
})
mapStateToProps=(state)=>({
  islock:state.voice.drawerLock
})

export default connect(mapStateToProps)(Home)
