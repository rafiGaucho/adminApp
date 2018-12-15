import React, { Component } from 'react';
import {View,StyleSheet,Image,TextInput,Dimensions} from 'react-native';
import { Body, Content,Item,Input, Text, Icon,Button} from 'native-base';
const widthScreen= Dimensions.get('window').width/18;
import {DrawerNavigator,DrawerItems} from 'react-navigation'
import {connect} from 'react-redux';
import {logoutUser} from './../../store/session/actions.js'

const CustomDrawer=(props)=>{
  const heightScreen= Dimensions.get('window').height;
  return(
  <View style={[{backgroundColor:'#00a8ff'},{height:heightScreen*(25/26)}]}>


    <View style={[{flex:5.5,backgroundColor:'#00a8ff',alignItems:'center',justifyContent:'center',
      borderBottomWidth:0.5,borderBottomColor:'grey'}]}>

          <View style={[{backgroundColor:'#2980b9',position:'absolute',
            marginBottom:'5%',flexDirection:'row',alignItems:'center'},
          {height:heightScreen*(1.7/26),width:heightScreen*(10/26),borderRadius:heightScreen*(5/26),top:heightScreen*(0.8/26),
          left:widthScreen*0.5}]}>
            <Icon name='search' type='EvilIcons' style={{color:'white',marginLeft:'5%',marginBottom:'3%'}}/>
            <TextInput style={{marginBottom:'3%',width:'80%'}} placeholder='search' placeholderTextColor='white'/>
          </View>

          <View style={[{height:'60%'},{marginTop:heightScreen*(3.2/26)}]}  >
           <Image style={[{borderColor:'white',borderWidth:1},
           {height:heightScreen*(3.1/26),width:heightScreen*(3.1/26),borderRadius:heightScreen*(3.1/52)}]} source={require("./photo.jpg")} />
           <Text style={{fontSize:16,fontWeight:'bold',textAlign:'center',color:'white',marginTop:10}}>principal</Text>
           <Text style={{fontSize:10,textAlign:'center',color:'white',marginBottom:10}}>school Name</Text>
         </View>
    </View>


    <View style={[{flex:8,textColor:'white',borderBottomWidth:0.5,borderBottomColor:'grey',}]}>
      <DrawerItems activeTintColor='white'
        activeBackgroundColor='rgba(223, 230, 233,0.3)'
        inactiveTintColor='white'
        // itemsContainerStyle={{flex:1}}
        itemStyle={[{height:heightScreen*(2.2/26)}]}
         {...props} />
    </View>


    <View style={[{flex:1,alignItems:'flex-start',justifyContent:'center',marginBottom:'2%',marginTop:'2%'}]}>
        <Button iconLeft transparent primary style={{marginLeft:5}} onPress={props.logout}>
          <Icon name='wine' style={{color:'#636e72'}}/>
          <Text style={{color:'white',marginLeft:10}}>Logout</Text>
        </Button>
    </View>


  </View>
)
}

const mapDispatchToProps = {
  logout: logoutUser
}
mapStateToProps=(state)=>({
  initialWindow:state.initialWindow
})

export default connect(mapStateToProps,mapDispatchToProps)(CustomDrawer)
