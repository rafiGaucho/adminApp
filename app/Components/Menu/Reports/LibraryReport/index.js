import React, {PropTypes} from 'react';
import {
  View,
  StyleSheet,Text
} from 'react-native';
import { Body, Content,Card,Item,Input, Icon,Button} from 'native-base';


export default class LibraryReport extends React.Component {
  static navigationOptions={
    header:null
  }
  goback=()=>{this.props.navigation.goBack()}

  render() {
    return (
      <View style={{flex:1,}}>

        <View style={{flex:1.5,backgroundColor:'#3B3B98',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <View>
              <Button transparent onPress={this.goback} style={{marginTop:10,}}><Icon name='arrow-round-back' style={{color:'white'}}/></Button>
            </View>
            <Text style={{color:'white',fontSize:20,fontWeight:'600',paddingTop:7}}>LIBRARY REPORT </Text>
          </View>
          <View>
            <Button transparent  style={{marginTop:10,}}><Icon name='search' style={{color:'white',fontSize:32}}/></Button>
          </View>
        </View>


        <View style={{flex:12,alignItems:'center',justifyContent:'center'}}>
          <Text>LibraryReport</Text>
        </View>

        <View style={{flex:0.75,backgroundColor:'#575fcf'}}>
        </View>

      </View>
    );
  }
}
