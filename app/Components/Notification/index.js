import React, {PropTypes} from 'react';
import {
  View,
  StyleSheet,Text
} from 'react-native';
import {Icon,Button,} from 'native-base'


export default class Notification extends React.Component {
  static navigationOptions={
    drawerLabel:'Notification',

    drawerIcon:(<Icon name='alarm'  style={{color:'#636e72'}}/>),

  }
  handleBackButton=()=>{this.props.navigation.goBack(null)}

  render() {
    return(
      <View style={{flex:1}}>

        <View style={{flex:1.5,backgroundColor:'#3B3B98',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <View>
              <Button transparent  style={{marginTop:10,}} onPress={this.handleBackButton}><Icon name='arrow-round-back' style={{color:'white'}}/></Button>
            </View>
            <Text style={{color:'white',fontSize:20,fontWeight:'600',paddingTop:7}}>NOTIFICATION</Text>
          </View>
          <View>
            <Button transparent  style={{marginTop:10,}}><Icon name='search' style={{color:'white',fontSize:32}}/></Button>
          </View>
        </View>


        <View style={{flex:12,backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
          <Text>Notification</Text>
        </View>

        <View style={{flex:0.75,backgroundColor:'#575fcf'}}>
        </View>

      </View>
    );
  }
  }
