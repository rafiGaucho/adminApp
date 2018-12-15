import React, {PropTypes} from 'react';
import {
  View,
  StyleSheet,Text
} from 'react-native';


export default class CommentsRemarks extends React.Component {
  render() {
    return (
      <View style={{flex:1,backgroundColor:'#ecf0f1',width:'90%',marginHorizontal:'5%',borderTopWidth:0.3,borderTopColor:'#bdc3c7'}}>

        {<View style={{flex:1,justifyContent:'center',paddingLeft:'5%',backgroundColor:'#f5f6fa'}}><Text style={{fontSize:10,fontWeight:'600',}}>Improvement Needed</Text></View>}
        {<View style={{flex:1,justifyContent:'center',paddingLeft:'5%'}}><Text style={{fontSize:10,fontWeight:'600',}}>Good In Science</Text></View>}
        {<View style={{flex:1,justifyContent:'center',paddingLeft:'5%',backgroundColor:'#f5f6fa'}}><Text style={{fontSize:10,fontWeight:'600',}}>Attitude Is High</Text></View>}
        {<View style={{flex:1,justifyContent:'center',paddingLeft:'5%'}}><Text style={{fontSize:10,fontWeight:'600',}}>If Motivated She Can Reach High</Text></View>}

      </View>
    );
  }
}
