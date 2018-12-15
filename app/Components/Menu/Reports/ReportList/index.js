import React, {PropTypes} from 'react';
import {
  View,
  StyleSheet,Text,TouchableOpacity
} from 'react-native';
import { Body, Content,Card,Item,Input, Icon,Button} from 'native-base';
import Hr from "react-native-hr-component";
import { withNavigation } from 'react-navigation';

export default  class Reports extends React.Component {
  static navigationOptions={
    header:null
  }

  goback=()=>{this.props.navigation.popToTop()}
  goAccount=()=>{this.props.navigation.navigate('AccountReport')}
  goAbsent=()=>{ this.props.navigation.navigate('AbsentReport')}
  goAcademic=()=>{ this.props.navigation.navigate('AcademicReport')}
  goInventory=()=>{ this.props.navigation.navigate('InventoryReport')}
  goLibrary=()=>{ this.props.navigation.navigate('LibraryReport')}
  goMessage=()=>{ this.props.navigation.navigate('MessageReport')}
  goStaffLeave=()=>{ this.props.navigation.navigate('StaffLeaveReport')}


  render() {
    return (
    <View style={{flex:1,}}>
      <View style={{flex:1.5,backgroundColor:'#3B3B98',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <View>
            <Button transparent onPress={this.goback} style={{marginTop:10,}}><Icon name='arrow-round-back' style={{color:'white'}}/></Button>
          </View>
          <Text style={{color:'white',fontSize:20,fontWeight:'600',paddingTop:7}}>REPORT</Text>
        </View>
        <View>
          <Button transparent  style={{marginTop:10,}}><Icon name='search' style={{color:'white',fontSize:32}}/></Button>
        </View>
      </View>


      <View style={{flex:12}}>
        <Items iconName='account-card-details' iconType='MaterialCommunityIcons' heading='Account Report' bgColor='#3498db' function={this.goAccount}/>
        <Items iconName='envelope-open' iconType='SimpleLineIcons' heading='Message Report' bgColor='#2ecc71' function={this.goMessage}/>
        <Items iconName='account-card-details' iconType='MaterialCommunityIcons' heading='Absent Report' bgColor='#e74c3c' function={this.goAbsent}/>
        <Items iconName='envelope-open' iconType='SimpleLineIcons' heading='Staff Leave Report' bgColor='#f39c12' function={this.goStaffLeave}/>
        <Items iconName='envelope-open' iconType='SimpleLineIcons' heading='Library Report' bgColor='#e056fd' function={this.goLibrary}/>
        <Items iconName='account-card-details' iconType='MaterialCommunityIcons' heading='Academic Report' bgColor='#00cec9' function={this.goAcademic}/>
        <Items iconName='envelope-open' iconType='SimpleLineIcons' heading='Inventory Report' bgColor='#ff7675' function={this.goInventory}/>
      </View>


      <View style={{flex:0.75,backgroundColor:'#575fcf'}}>
      </View>


    </View>
    );
  }
}


const Items=(props)=>{
  return(
    <TouchableOpacity style={{flex:1}} onPress={props.function}>
      <View style={{flex:1,backgroundColor:'white'}} >
        <View style={{marginLeft:'7%',flex:1,alignItems:'center',flexDirection:'row',justifyContent:'space-between'}}>
          <View style={{alignItems:'center',flexDirection:'row'}}>
            <View style={[{height:45,width:45,borderRadius:22.5,alignItems:'center',justifyContent:'center'},{backgroundColor:props.bgColor}]}>
              <Icon name={props.iconName} type={props.iconType}  style={{color:'white',fontSize:18}}/>
            </View>
            <View style={{marginLeft:'8%'}}>
              <Text style={{fontWeight:'400'}}>{props.heading}</Text>
              <Text style={{fontSize:10}}>2018 feb 21 monday</Text>
            </View>
          </View>
          <Icon name='chevron-right' type='EvilIcons' size={12} style={{color:'grey',marginRight:'3%'}}/>
        </View>
        <Hr lineColor="#eee" textPadding={0.001} hrStyles={{width:'88%',marginHorizontal:'6%'}}/>
      </View>
    </TouchableOpacity>
  )
}
