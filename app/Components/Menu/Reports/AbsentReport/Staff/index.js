import React, {PropTypes} from 'react';
import {
  View,
  StyleSheet,Text,Dimensions,ScrollView,Image
} from 'react-native';
import { Body, Content,Card,Item,Input, Icon,Button} from 'native-base';
import Hr from "react-native-hr-component";


export default class Staff extends React.Component {


  render() {
    return (
      <View style={{flex:1,backgroundColor:'white'}}>
        <View style={{flex:1,backgroundColor:'#dfe6e9',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
          <Text style={{marginLeft:'5%',fontWeight:'400'}}>Total No.of Staff</Text>
          <Text style={{marginRight:'5%',fontWeight:'600'}}>346</Text>
        </View>

        <View style={{flex:1,backgroundColor:'#c8d6e5',flexDirection:'row'}}>
          <View style={{flex:3,alignItems:'center',borderRightWidth:0.5}}>
            <View style={{flex:1}}><Text style={{fontWeight:'400',fontSize:10}}>Teaching Staff Leave</Text></View>
            <View style={{flex:1,paddingBottom:5}}><Text style={{fontWeight:'600'}}>26</Text></View>
          </View>
          <View style={{flex:3.7,alignItems:'center',borderRightWidth:0.5}}>
            <View style={{flex:1}}><Text style={{fontWeight:'400',fontSize:10}}>Non-Teaching Staff Leave</Text></View>
            <View style={{flex:1,paddingBottom:5}}><Text style={{fontWeight:'600'}}>26</Text></View>
          </View>
          <View style={{flex:2.3,alignItems:'center'}}>
            <View style={{flex:1}}><Text style={{fontWeight:'400',fontSize:10}}>Total Leave</Text></View>
            <View style={{flex:1,paddingBottom:5}}><Text style={{fontWeight:'600'}}>26</Text></View>
          </View>
        </View>

      <View style={{flex:9}}>
        <ScrollView >
          <Items />
          <Items />
          <Items />
          <Items />
          <Items />
          <Items />
          <Items />
          <Items />
          <Items />
          <Items />
          <Items />
          <Items />
          <Items />
          <Items />
        </ScrollView>
      </View>
      </View>
    );
  }
}
const Items=()=>{
  heightScreen= Dimensions.get('window').height;
  return(

      <View style={[{height:heightScreen/8.5},{paddingTop:3,marginLeft:'5%',backgroundColor:'white',}]} >
          <View style={{flex:1,flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
            <View style={[{height:45,width:45,borderRadius:22.5,alignItems:'center',justifyContent:'center',backgroundColor:'grey'}]}>
              <Image style={{height:45,width:45,borderRadius:22.5}} source={require("./staff.jpg")} />
            </View>
            <View style={{marginLeft:'5%'}}>
              <Text style={{fontWeight:'600'}}>Staff Name</Text>
              <Text style={{fontSize:10}}>Teaching</Text>
            </View>
          </View>
        <Hr lineColor="#eee" textPadding={0.001} hrStyles={{width:'88%',marginHorizontal:'6%'}}/>
      </View>

  )
}
