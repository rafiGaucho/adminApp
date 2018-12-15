import React, { Component } from 'react';
import {
  Text,Image,View,TouchableOpacity,Dimensions
} from 'react-native';
import { Body, Content,Card,Item,Input, Icon,Button} from 'native-base';
import {Circle} from './circle.js';
import { DrawerActions } from 'react-navigation';

export default class Menu extends Component {
  static navigationOptions={
    drawerLabel:'Menu',
    header: null,
    drawerIcon:(<Icon name='menu'  style={{color:'#636e72'}}/>),

  }
  openDrawer=()=>{
this.props.navigation.dispatch(DrawerActions.openDrawer());  }
handleStudentProfile=()=>{this.props.navigation.navigate('StudentProfile')}
handleMessage=()=>{this.props.navigation.navigate('Message')}
handleReports=()=>{this.props.navigation.navigate('Reports')}
handleAbsent=()=>{this.props.navigation.navigate('Absent')}
handleTimeTable=()=>{this.props.navigation.navigate('TimeTable')}
handleStaff=()=>{this.props.navigation.navigate('Staff')}
handleLibrary=()=>{this.props.navigation.navigate('Library')}
handleBus=()=>{this.props.navigation.navigate('Bus')}
handleProfile=()=>{this.props.navigation.navigate('profile')}


  render() {
    heightScreen= Dimensions.get('window').height/26;
    // widthScreen=Dimensions.get('window').height

    return (
          <View style={{flex:1,}}>


            <View style={[{backgroundColor:'#3B3B98',flexDirection:'row',alignItems:'center',justifyContent:'space-between'},
            {height:heightScreen*2.6}]}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <View>
                  <Button transparent onPress={this.openDrawer} style={{marginTop:10,}}><Icon name='menu' style={{color:'white'}}/></Button>
                </View>
                <Text style={{color:'white',fontSize:20,fontWeight:'600',paddingTop:7}}>MY SCHOOL</Text>
              </View>
              <View>
                <Button transparent  style={{marginTop:10,}}><Icon name='search' style={{color:'white',fontSize:32}}/></Button>
              </View>
            </View>


            <View style={[{},
            {height:heightScreen*7.5}]}>
              <Image source={require('./schoolPic.jpg')} style={[{height:heightScreen*7.5},{width:'100%'}]} />
            </View>


            <View style={[{backgroundColor:'#3B3B98',alignItems:'center',justifyContent:'space-between'},
            {height:heightScreen*13.5}]}>
              <View style={{flex:1,justifyContent:'space-around',flexDirection:'row',alignItems:'center'}}>
                <View style={{flex:1,alignItems:'center',paddingLeft:10}}><Circle name='md-grid' type='ionicon' func={this.handleTimeTable}/><Text style={{color:'white'}}>Time Table</Text></View>
                <View style={{flex:1,alignItems:'center'}}><Circle name='ios-people' type='ionicon' func={this.handleStaff}/><Text style={{color:'white'}}>Staff</Text></View>
                <View style={{flex:1,alignItems:'center',paddingRight:10}}><Circle name='library' type='material-community' func={this.handleLibrary}/><Text style={{color:'white'}}>Library</Text></View>
              </View>
              <View style={{flex:1,justifyContent:'space-around',flexDirection:'row',alignItems:'center'}}>
                <View style={{flex:1,alignItems:'center',paddingLeft:10}}><Circle name='human-child' type='material-community' func={this.handleStudentProfile}/><Text style={{color:'white'}}>student profile</Text></View>
                <View style={{flex:1,alignItems:'center'}}><Circle name='user-unfollow' type='simple-line-icon' func={this.handleAbsent}/><Text style={{color:'white'}}>Absent</Text></View>
                <View style={{flex:1,alignItems:'center',paddingRight:10}}><Circle name='ios-paper' type='ionicon' func={this.handleReports}/><Text style={{color:'white'}}>Reports</Text></View>
              </View>
              <View style={{flex:1,justifyContent:'space-around',flexDirection:'row',alignItems:'center'}}>
                <View style={{flex:1,alignItems:'center',paddingLeft:10}}><Circle name='message' type='material' func={this.handleMessage}/><Text style={{color:'white'}}>Message</Text></View>
                <View style={{flex:1,alignItems:'center'}}><Circle name='bus' type='font-awesome' func={this.handleBus}/><Text style={{color:'white'}}>Bus</Text></View>
                <View style={{flex:1,alignItems:'center',paddingRight:10}}><Circle name='user' type='font-awesome' func={this.handleProfile}/><Text style={{color:'white'}}>Profile</Text></View>
              </View>
            </View>


            <View style={[{backgroundColor:'#575fcf'},
            {height:heightScreen*1.5}]}>
            </View>


          </View>
    );
  }
}
