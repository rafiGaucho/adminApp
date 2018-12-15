import React, {PropTypes} from 'react';
import {
  View,
  StyleSheet,Text
} from 'react-native';
import Hr from "react-native-hr-component";


export default class Details extends React.Component {
  render() {
    return (
      <View style={{flex:1,backgroundColor:'white'}}>
        <View style={{flex:1}}>
          <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <View style={{marginLeft:'5%',}}>
              <Text style={{fontWeight:'600'}}>Today's Collection</Text>
              <Text style={{fontSize:10}}>2018 feb 21 monday</Text>
            </View>
            <View style={{alignItems:'center',marginRight:'5%',marginTop:'2%'}}>
              <Text style={{fontWeight:'600',backgroundColor:'#dfe6e9',paddingHorizontal:'8%',paddingVertical:'4%'}}>198456.00</Text>
            </View>
          </View>
          <Hr lineColor="#eee" textPadding={0.001} hrStyles={{width:'90%',marginHorizontal:'5%'}}/>
        </View>

        <View style={{flex:1}}>
          <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <View style={{marginLeft:'5%',}}>
              <Text style={{fontWeight:'600'}}>Dues as on today</Text>
              <Text style={{fontSize:10}}>2018 feb 21 monday</Text>
            </View>
            <View style={{alignItems:'center',marginRight:'5%'}}>
              <Text style={{fontWeight:'600',backgroundColor:'#dfe6e9',paddingHorizontal:'8%',paddingVertical:'4%'}}>198456.00</Text>
            </View>
          </View>
          <Hr lineColor="#eee" textPadding={0.001} hrStyles={{width:'90%',marginHorizontal:'5%'}}/>
        </View>

        <View style={{flex:1}}>
          <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <View style={{marginLeft:'5%',}}>
              <Text style={{fontWeight:'600'}}>Fine collection</Text>
              <Text style={{fontSize:10}}>2018 feb 21 monday</Text>
            </View>
            <View style={{alignItems:'center',marginRight:'5%'}}>
              <Text style={{fontWeight:'600',backgroundColor:'#dfe6e9',paddingHorizontal:'8%',paddingVertical:'4%'}}>198456.00</Text>
            </View>
          </View>
          <Hr lineColor="#eee" textPadding={0.001} hrStyles={{width:'90%',marginHorizontal:'5%'}}/>
        </View>

        <View style={{flex:1}}>
          <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <View style={{marginLeft:'5%',}}>
              <Text style={{fontWeight:'600'}}>Cash in hand</Text>
              <Text style={{fontSize:10}}>2018 feb 21 monday</Text>
            </View>
            <View style={{alignItems:'center',marginRight:'5%'}}>
              <Text style={{fontWeight:'600',backgroundColor:'#dfe6e9',paddingHorizontal:'8%',paddingVertical:'4%'}}>198456.00</Text>
            </View>
          </View>
          <Hr lineColor="#eee" textPadding={0.001} hrStyles={{width:'90%',marginHorizontal:'5%'}}/>
        </View>

        <View style={{flex:1}}>
          <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <View style={{marginLeft:'5%',}}>
              <Text style={{fontWeight:'600'}}>Cash @ Bank</Text>
              <Text style={{fontSize:10}}>2018 feb 21 monday</Text>
            </View>
            <View style={{alignItems:'center',marginRight:'5%'}}>
              <Text style={{fontWeight:'600',backgroundColor:'#dfe6e9',paddingHorizontal:'8%',paddingVertical:'4%'}}>198456.00</Text>
            </View>
          </View>
          <Hr lineColor="#eee" textPadding={0.001} hrStyles={{width:'90%',marginHorizontal:'5%'}}/>
        </View>

        <View style={{flex:1}}>
          <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <View style={{marginLeft:'5%',}}>
              <Text style={{fontWeight:'600'}}>Total Cash</Text>
              <Text style={{fontSize:10}}>2018 feb 21 monday</Text>
            </View>
            <View style={{alignItems:'center',marginRight:'5%'}}>
              <Text style={{fontWeight:'600',backgroundColor:'#dfe6e9',paddingHorizontal:'8%',paddingVertical:'4%'}}>198456.00</Text>
            </View>
          </View>
          <Hr lineColor="#eee" textPadding={0.001} hrStyles={{width:'90%',marginHorizontal:'5%'}}/>
        </View>


        <View style={{flex:1}}>
          <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <View style={{marginLeft:'5%',}}>
              <Text style={{fontWeight:'600'}}>Payments Due</Text>
              <Text style={{fontSize:10}}>2018 feb 21 monday</Text>
            </View>
            <View style={{alignItems:'center',marginRight:'5%'}}>
              <Text style={{fontWeight:'600',backgroundColor:'#dfe6e9',paddingHorizontal:'8%',paddingVertical:'4%'}}>198456.00</Text>
            </View>
          </View>
          <Hr lineColor="#eee" textPadding={0.001} hrStyles={{width:'90%',marginHorizontal:'5%'}}/>
        </View>


      </View>
    );
  }
}
