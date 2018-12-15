import React, {PropTypes} from 'react';
import {
  View,
  StyleSheet,Text
} from 'react-native';
import {connect} from 'react-redux'
import {Icon} from 'native-base'
import MessageScreenContainer from './messageScreenContainer.js'

export default class MessageScreen extends React.Component {
  static navigationOptions=({screenProps})=>({
    drawerLabel:'Message',

    drawerIcon:(<Icon name='chatboxes'  style={{color:'#636e72'}}/>),
    drawerLockMode:screenProps.islock
  })

  handleBackButton=()=>{this.props.navigation.goBack(null)}


  render() {
    return(
      // <View style={{flex:1,alignItems:'center',justifyContent:'center'}}><Text>Message</Text></View>
      <MessageScreenContainer func={this.handleBackButton}/>
    );
  }
}
