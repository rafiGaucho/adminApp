import React, {PropTypes} from 'react';
import {
  View,
  StyleSheet,Text
} from 'react-native';
import Hr from "react-native-hr-component";


export default class Payments extends React.Component {
  render() {
    return (
      <View style={{flex:1,backgroundColor:'white'}}>
        <View style={{flex:1}}>
          <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <View style={{marginLeft:'5%',}}>
              <Text style={{fontWeight:'600'}}>Salary Cost</Text>
              <Text style={{fontSize:10}}>2018 feb 21 monday</Text>
            </View>
            <View style={{alignItems:'center',marginRight:'5%'}}>
              <Text style={{fontWeight:'600',paddingHorizontal:25,paddingVertical:15}}>198456.00</Text>
            </View>
          </View>
          <Hr lineColor="#eee" textPadding={0.001} hrStyles={{width:'90%',marginHorizontal:'5%'}}/>
        </View>

        <View style={{flex:1}}>
          <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <View style={{marginLeft:'5%',}}>
              <Text style={{fontWeight:'600'}}>Apps cook ..</Text>
              <Text style={{fontSize:10}}>2018 feb 21 monday</Text>
            </View>
            <View style={{alignItems:'center',marginRight:'5%'}}>
              <Text style={{fontWeight:'600',paddingHorizontal:25,paddingVertical:15}}>198456.00</Text>
            </View>
          </View>
          <Hr lineColor="#eee" textPadding={0.001} hrStyles={{width:'90%',marginHorizontal:'5%'}}/>
        </View>

        <View style={{flex:1}}>
          <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <View style={{marginLeft:'5%',}}>
              <Text style={{fontWeight:'600'}}>Hk school trends..</Text>
              <Text style={{fontSize:10}}>2018 feb 21 monday</Text>
            </View>
            <View style={{alignItems:'center',marginRight:'5%'}}>
              <Text style={{fontWeight:'600',paddingHorizontal:25,paddingVertical:15}}>198456.00</Text>
            </View>
          </View>
          <Hr lineColor="#eee" textPadding={0.001} hrStyles={{width:'90%',marginHorizontal:'5%'}}/>
        </View>

        <View style={{flex:1}}>
          <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <View style={{marginLeft:'5%',}}>
              <Text style={{fontWeight:'600'}}>Orient school swan.. </Text>
              <Text style={{fontSize:10}}>2018 feb 21 monday</Text>
            </View>
            <View style={{alignItems:'center',marginRight:'5%'}}>
              <Text style={{fontWeight:'600',paddingHorizontal:25,paddingVertical:15}}>198456.00</Text>
            </View>
          </View>
          <Hr lineColor="#eee" textPadding={0.001} hrStyles={{width:'90%',marginHorizontal:'5%'}}/>
        </View>
          <View style={{flex:3}}></View>
      </View>
    );
  }
}
