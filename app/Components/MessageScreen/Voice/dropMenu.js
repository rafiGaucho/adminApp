import React, { Component } from 'react';
import {
  View,
  StyleSheet,Text,
} from 'react-native';
import { Body, Content,Card,Item,Input, Icon,Button} from 'native-base';
import CheckBox from 'react-native-check-box'

export default class DropMenuVoice extends React.Component {
constructor(props) {
  super(props);
  this.state={
    checkedHod:false,checkedTeach:false,checkedNteach:false,checkedPta:false,
    checkedManag:false,checkedNss:false,checkedNcc:false,checkedTrust:false,
    checkedDept:true,
    checkedStud:false,
    checkedBus:false,
  }
  this.handleClickHod=()=>{this.setState({checkedHod:!this.state.checkedHod})}
  this.handleClickTeach=()=>{this.setState({checkedTeach:!this.state.checkedTeach})}
  this.handleClickNteach=()=>{this.setState({checkedNteach:!this.state.checkedNteach})}
  this.handleClickPta=()=>{this.setState({checkedPta:!this.state.checkedPta})}
  this.handleClickManag=()=>{this.setState({checkedManag:!this.state.checkedManag})}
  this.handleClickNss=()=>{this.setState({checkedNss:!this.state.checkedNss})}
  this.handleClickNcc=()=>{this.setState({checkedNcc:!this.state.checkedNcc})}
  this.handleClickTrust=()=>{this.setState({checkedTrust:!this.state.checkedTrust})}

  this.handleClick=()=>{
    if(this.state.checkedDept){
    this.setState({
        checked:!this.state.checked
    })
    }
  }
  this.handleClickDept=()=>{
    this.setState({
      checkedDept:!this.state.checkedDept,
      checkedStud:false,checkedBus:false,
    })

  }
  this.handleClickStud=()=>{
    this.setState({
      checkedStud:!this.state.checkedStud,
      checkedDept:false,checkedBus:false,checked:false,
      checkedHod:false,checkedTeach:false,checkedNteach:false,checkedPta:false,
      checkedManag:false,checkedNss:false,checkedNcc:false,checkedTrust:false,
        })

  }
  this.handleClickBus=()=>{
    this.setState({
      checkedBus:!this.state.checkedBus,
      checkedStud:false,checkedDept:false,checked:false,
      checkedHod:false,checkedTeach:false,checkedNteach:false,checkedPta:false,
      checkedManag:false,checkedNss:false,checkedNcc:false,checkedTrust:false,
    })

  }
}

  render() {
    list=['HOD','Teaching','Non Teaching','PTA','Management Committee','NCC','NSS','Trustees']

    return (
      <Card style={{height:'70%',width:'85%',position:'absolute',
         backgroundColor:'white',flex:1,top:0
        ,left:'5%',borderBottomWidth:1,}}>
       <View style={{flexDirection:'row',flex:1,
        }}>
          <CheckBox   checkBoxColor='blue'
            style={[{flex:1.3,alignItems:'center', justifyContent:'center'},
            this.state.checkedDept?{backgroundColor:'#45aaf2'}:null]}
            isChecked={this.state.checkedDept} leftTextStyle={[{padding:3},this.state.checkedDept?{color:'white'}:{color:'black'}]}
            leftText='Department' onClick={this.handleClickDept}/>
          <CheckBox checkBoxColor='blue'
            style={[{flex:1.1,alignItems:'center', justifyContent:'center',},
            this.state.checkedStud?{backgroundColor:'#45aaf2'}:null]} isChecked={this.state.checkedStud}
              leftText='Students'  leftTextStyle={[{paddingLeft:5},this.state.checkedStud?{color:'white'}:{color:'black'}]} onClick={this.handleClickStud}/>
          <CheckBox checkBoxColor='blue'
            style={[{flex:1,alignItems:'center', justifyContent:'center'},
            this.state.checkedBus?{backgroundColor:'#45aaf2'}:null]} isChecked={this.state.checkedBus}
                leftText='Bus'  leftTextStyle={[{paddingLeft:20},this.state.checkedBus?{color:'white'}:{color:'black'}]} onClick={this.handleClickBus}/>
        </View>
       <View style={{flex:4}}>
         {/* {list.map((x,index)=>
           <CheckBox key={index} style={[ {flex:1},{alignItems:'center'},
             index % 2 !== 0 ? {backgroundColor:'white'}:{backgroundColor:'#ecf0f1'} ,{justifyContent:'center'} ]}
              isChecked={false}
            leftText={x} leftTextStyle={{marginLeft:20}}/>
         )} */}
         <CheckBox checkBoxColor='#1B9CFC' disabled={!this.state.checkedDept}
           style={{flex:1,alignItems:'center', backgroundColor:'#ecf0f1',justifyContent:'center'}} isChecked={this.state.checkedHod}
          leftText='HOD' leftTextStyle={{marginLeft:20}}
           onClick={this.handleClickHod}/>
        <CheckBox checkBoxColor='#1B9CFC' disabled={!this.state.checkedDept}
          style={{flex:1,alignItems:'center', justifyContent:'center'}} isChecked={this.state.checkedTeach}
         leftText='Teaching' leftTextStyle={{marginLeft:20}}
          onClick={this.handleClickTeach}/>
         <CheckBox checkBoxColor='#1B9CFC' disabled={!this.state.checkedDept}
            style={{flex:1,alignItems:'center', backgroundColor:'#ecf0f1',justifyContent:'center'}} isChecked={this.state.checkedNteach}
          leftText='Non Teaching' leftTextStyle={{marginLeft:20}}
        onClick={this.handleClickNteach}/>
         <CheckBox checkBoxColor='#1B9CFC' disabled={!this.state.checkedDept}
           style={{flex:1,alignItems:'center', justifyContent:'center'}} isChecked={this.state.checkedPta}
          leftText='PTA' leftTextStyle={{marginLeft:20}}
        onClick={this.handleClickPta}/>
         <CheckBox checkBoxColor='#1B9CFC' disabled={!this.state.checkedDept}
           style={{flex:1,alignItems:'center', backgroundColor:'#ecf0f1',justifyContent:'center'}} isChecked={this.state.checkedManag}
            leftText='Management Committee' leftTextStyle={{marginLeft:20}}
          onClick={this.handleClickManag}/>
         <CheckBox checkBoxColor='#1B9CFC' disabled={!this.state.checkedDept}
           style={{flex:1,alignItems:'center', justifyContent:'center'}} isChecked={this.state.checkedNcc}
          leftText='NCC' leftTextStyle={{marginLeft:20}}
        onClick={this.handleClickNcc}/>
         <CheckBox checkBoxColor='#1B9CFC' disabled={!this.state.checkedDept}
           style={{flex:1,alignItems:'center',backgroundColor:'#ecf0f1', justifyContent:'center'}} isChecked={this.state.checkedNss}
          leftText='NSS' leftTextStyle={{marginLeft:20}}
        onClick={this.handleClickNss}/>
         <CheckBox checkBoxColor='#1B9CFC' disabled={!this.state.checkedDept}
           style={{flex:1,alignItems:'center', justifyContent:'center'}} isChecked={this.state.checkedTrust}
          leftText='Trustees' leftTextStyle={{marginLeft:20}}
        onClick={this.handleClickTrust}/>

      </View>
    </Card>


    );
  }
}
