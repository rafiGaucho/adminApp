import React, {PropTypes} from 'react';
import {
  View,TouchableWithoutFeedback,
  StyleSheet,Text
} from 'react-native';
import { Body, Content,Card,Item,Input, Icon,Button,Radio} from 'native-base';
import Hr from "react-native-hr-component";

export default class Recharge extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      isSms:false,
      isVoice:false,
      isSoftware:false
    }
  }
handleSms=()=>{this.setState({isSms:!this.state.isSms})}
handleVoice=()=>{this.setState({isVoice:!this.state.isVoice})}
handleSoftware=()=>{this.setState({isSoftware:!this.state.isSoftware})}
  render() {
    return (
      <View style={{flex:1,backgroundColor:'white'}}>

        <View style={{flex:0.5}}></View>

        <View style={{flex:1}}>
          <View style={{flex:1,flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
              <View style={{flex:1,flexDirection:'row',alignItems:'center',marginLeft:'9%'}}>
                <Radio color={"#ecf0f1"} selectedColor={"#95a5a6"} selected={this.state.isSms} onPress={this.handleSms}/>
                <TouchableWithoutFeedback onPress={this.handleSms}>
                  <View style={{marginLeft:'5%'}}><Text>SMS</Text></View>
                </TouchableWithoutFeedback>
              </View>
              <View style={{flex:1,flexDirection:'row',alignItems:'center',}}>
                <View style={{width:'75%',borderWidth:0.5,flexDirection:'row',alignItems:'center',backgroundColor:'#ecf0f1',
                  justifyContent:'space-around',height:35,marginHorizontal:'12.5%'}}>
                  <Text>1000</Text>
                  <Icon name='chevron-down' type='EvilIcons' style={{color:'grey',fontSize:18}}/>
                </View>
              </View>
              <View style={{flex:1,alignItems:'center',marginRight:'5%'}}>
                <Text>Rs.4500.00</Text>
              </View>
        </View>
        <Hr lineColor="#eee" textPadding={0.001} hrStyles={{width:'88%',marginHorizontal:'6%'}}/>
        </View>
        <View style={{flex:1}}>
          <View style={{flex:1,flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
              <View style={{flex:1,flexDirection:'row',alignItems:'center',marginLeft:'9%'}}>
                <Radio color={"#ecf0f1"} selectedColor={"#95a5a6"} selected={this.state.isVoice} onPress={this.handleVoice}/>
                <TouchableWithoutFeedback onPress={this.handleVoice}>
                  <View style={{marginLeft:'5%'}}><Text>Voice</Text></View>
                </TouchableWithoutFeedback>
              </View>
              <View style={{flex:1,flexDirection:'row',alignItems:'center',}}>
                <View style={{width:'75%',borderWidth:0.5,flexDirection:'row',alignItems:'center',backgroundColor:'#ecf0f1',
                  justifyContent:'space-around',height:35,marginHorizontal:'12.5%'}}>
                  <Text>1000</Text>
                  <Icon name='chevron-down' type='EvilIcons' style={{color:'grey',fontSize:18}}/>
                </View>
              </View>
              <View style={{flex:1,alignItems:'center',marginRight:'5%'}}>
                <Text>Rs.4500.00</Text>
              </View>
        </View>
        <Hr lineColor="#eee" textPadding={0.001} hrStyles={{width:'88%',marginHorizontal:'6%'}}/>
        </View>
        <View style={{flex:1}}>
          <View style={{flex:1,flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
              <View style={{flex:1,flexDirection:'row',alignItems:'center',marginLeft:'9%'}}>
                <Radio color={"#ecf0f1"} selectedColor={"#95a5a6"} selected={this.state.isSoftware} onPress={this.handleSoftware}/>
                <TouchableWithoutFeedback onPress={this.handleSoftware}>
                  <View style={{marginLeft:'5%'}}><Text>Software</Text></View>
                </TouchableWithoutFeedback>
              </View>
              <View style={{flex:1,flexDirection:'row',alignItems:'center',}}>
                <View style={{width:'75%',flexDirection:'row',alignItems:'center',
                  justifyContent:'space-around',height:35,marginHorizontal:'12.5%'}}>
                  <Text></Text>
                  {/* <Icon name='chevron-down' type='EvilIcons' style={{color:'grey',fontSize:18}}/> */}
                </View>
              </View>
              <View style={{flex:1,alignItems:'center',marginRight:'5%'}}>
                <Text>Rs.4500.00</Text>
              </View>
        </View>
        <Hr lineColor="#eee" textPadding={0.001} hrStyles={{width:'88%',marginHorizontal:'6%'}}/>
        </View>

        <View style={{flex:1}}>
          <View style={{flex:1,flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
            <Text>Total Amount</Text>
            <Text>Rs:00.00</Text>
          </View>
          <Hr lineColor="#eee" textPadding={0.001} hrStyles={{width:'88%',marginHorizontal:'6%'}}/>
        </View>

        <View style={{flex:1}}>
          <View style={{flex:1,flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
            <Text>Tax   GST 18%</Text>
            <Text>Rs:00.00</Text>
          </View>
          <Hr lineColor="#eee" textPadding={0.001} hrStyles={{width:'88%',marginHorizontal:'6%'}}/>
        </View>

        <View style={{flex:1}}>
          <View style={{flex:1,flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
            <Text>Grand Total</Text>
            <Text>Rs:00.00</Text>
          </View>
          {/* <Hr lineColor="#eee" textPadding={0.001} hrStyles={{width:'88%',marginHorizontal:'6%'}}/> */}
        </View>

        <View style={{flex:0.5}}></View>

      </View>
      );
  }
}
