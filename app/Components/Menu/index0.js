import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import {
  View,AsyncStorage,
  StyleSheet,Dimensions,ActivityIndicator
} from 'react-native';
import { Body, Content,Card,Item,Input, Icon,Button} from 'native-base';
import Menu from './index.js';
import Reports from './Reports';
import Absent from './Absent';
import Library from './Library';
import Staff from './Staff';
import Bus from './Bus';
import TimeTable from './TimeTable';
import StudentProfile from './StudentProfile';


const RootStack = createStackNavigator(
  {
    Menu: Menu,
    StudentProfile:StudentProfile,
    Reports:Reports,
    Absent:Absent,
    Bus:Bus,
    Library:Library,
    Staff:Staff,
    TimeTable:TimeTable
    },
  {
    initialRouteName: 'Menu',
  }
);
export default class Main extends React.Component {
  static navigationOptions={
    drawerLabel:'Menu',
    drawerIcon:(<Icon name='menu'  style={{color:'#636e72'}}/>),
  }

static router = RootStack.router;
  render() {
    return (<RootStack navigation={this.props.navigation}/>);
  }
}
