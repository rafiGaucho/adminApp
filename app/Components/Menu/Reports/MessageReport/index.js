import React, {PropTypes} from 'react';
import {
  View,ScrollView,TouchableOpacity,
  StyleSheet,Text,Dimensions,TouchableWithoutFeedback
} from 'react-native';
import { Body, Content,Card,Item,Input, Icon,Button} from 'native-base';
import Recharge from './recharge.js';
import Hr from "react-native-hr-component";
import Pie from './graph.js'


export default class MessageReport extends React.Component {
  constructor(props) {
    super(props);
    this.heightScreen= Dimensions.get('window').height;
    this.state={
      isRecharge:false,
      isopen1:false,
      isopen2:false,
      isopen3:false,
      isopen4:false,
      isopen5:false
    }
  }
  handlePress1=()=>{
    this.setState({isopen1:!this.state.isopen1,isopen2:false,
    isopen3:false,isopen4:false,isopen5:false})
  }
  handlePress2=()=>{
    this.setState({isopen2:!this.state.isopen2,isopen1:false,
    isopen3:false,isopen4:false,isopen5:false,})
  }
  handlePress3=()=>{
    this.setState({isopen3:!this.state.isopen3,isopen2:false,
    isopen1:false,isopen4:false,isopen5:false,})
  }
  handlePress4=()=>{
    this.setState({isopen4:!this.state.isopen4,isopen2:false,
    isopen3:false,isopen1:false,isopen5:false,})
  }
  handlePress5=()=>{
    this.setState({isopen5:!this.state.isopen5,isopen2:false,
    isopen3:false,isopen4:false,isopen1:false,})
    // this.refs.scroll.scrollToEnd()
     //this.handleScroll()
  }
  handleRecharge=()=>{
    this.setState({isRecharge:!this.state.isRecharge})
  }

  static navigationOptions={
    header:null
  }
  goback=()=>{this.props.navigation.goBack()}

  render() {
    return (
      <View style={{flex:1,backgroundColor:'white'}}>
        <View style={{flex:1.5,backgroundColor:'#3B3B98',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <View>
              <Button transparent onPress={this.goback} style={{marginTop:10,}}><Icon name='arrow-round-back' style={{color:'white'}}/></Button>
            </View>
            <Text style={{color:'white',fontSize:20,fontWeight:'600',paddingTop:7}}>MESSAGE REPORT</Text>
          </View>
          <View>
            <Button transparent  style={{marginTop:10,}}><Icon name='search' style={{color:'white',fontSize:32}}/></Button>
          </View>
        </View>

      {!this.state.isRecharge && <View style={{flex:10.4}}>
            <ScrollView>
              <List isopen={this.state.isopen1} func={this.handlePress1} show=<MessageData /> />
              <List isopen={this.state.isopen2} func={this.handlePress2} show=<MessageData />/>
               <List isopen={this.state.isopen3} func={this.handlePress3} show=<MessageData />/>
              <List isopen={this.state.isopen4} func={this.handlePress4} show=<MessageData />/>
              <List isopen={this.state.isopen5} func={this.handlePress5} show=<MessageData />/>
            </ScrollView>
          </View>}


        <View style={{flex:1.6,}}>
          <View style={{flex:0.5,alignItems:'center',justifyContent:'center',backgroundColor:'#dcdde1'}}>
            <Text style={{fontSize:8}}>Balance Credit</Text>
          </View>
          <View style={[{flex:1.1,alignItems:'center',justifyContent:'space-around',flexDirection:'row'},{backgroundColor:this.state.isRecharge?'#f5f6fa':null}]}>
            <View style={{flex:1,marginLeft:'5%'}}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <Text style={{fontSize:10}}>Total SMS</Text>
                <Text style={{fontWeight:'600',marginLeft:'3%'}}>225306</Text>
              </View>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <Text style={{fontSize:10}}>Total Voice</Text>
                <Text style={{fontWeight:'600',marginLeft:'3%'}}>25306</Text>
              </View>
            </View>
            <View style={{flex:1,}}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <Text style={{fontSize:10}}>Balance SMS</Text>
                <Text style={{fontWeight:'600',marginLeft:'3%'}}>306</Text>
              </View>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <Text style={{fontSize:10}}>Balance Voice</Text>
                <Text style={{fontWeight:'600',marginLeft:'3%'}}>06</Text>
              </View>
            </View>
            <View style={{flex:1,marginBottom:'1%'}}>
              <TouchableOpacity onPress={this.handleRecharge}
                disabled={this.state.dropMenu} style={{marginTop:'5%'}}>
               <View style={[{alignItems:'center',justifyContent:'space-around',flexDirection:'row',backgroundColor:'#2ecc71'},
                 {height:heightScreen*(1.5/26),width:heightScreen*(3.5/26),borderRadius:heightScreen*(1.5/52)}]}>
                  <Text style={{fontWeight:'bold',color:'white',fontSize:10,marginLeft:'5%'}}>Recharge</Text>
                  <Icon name={!this.state.isRecharge ? 'chevron-up':'chevron-down' } type='Entypo' style={{color:'white',fontSize:14}}/>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>

      {this.state.isRecharge && <View style={{flex:10.4,backgroundColor:'purple'}}>
        <Recharge />
      </View>}
        <View style={{flex:0.75,backgroundColor:'#575fcf',flexDirection:'row'}}>
          </View>


      </View>
    );
  }
}


const List=(props)=>{
  heightScreen= Dimensions.get('window').height;

  return(
  <View >
    <TouchableWithoutFeedback onPress={props.func}>
      <View style={{flex:1}}>
        <View style={[{height:heightScreen/8.5},{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}]}>
        <View style={{marginLeft:'6%',flexDirection:'row',alignItems:'center',}}>
          <View style={[{height:45,width:45,borderRadius:22.5,alignItems:'center',justifyContent:'center',backgroundColor:'#c8d6e5'},
            {backgroundColor:props.isopen ? '#1dd1a1':'#c8d6e5'}]}>
            <Icon name='envelope-open' type='SimpleLineIcons' style={{color:'white',fontSize:20}} />
          </View>
          <View style={{marginLeft:'5%'}}>
            <Text style={{fontWeight:'600',}}>Campaign Name</Text>
            <Text style={{fontSize:10}}>2018 feb 21 monday 03:22:08</Text>
          </View>
        </View>
        <View style={{marginRight:'5%'}}>
          <Icon  name={props.isopen ? 'chevron-up':'chevron-down'} type='EvilIcons' style={{}}/>
        </View>
        </View>
        <Hr lineColor="#eee" textPadding={0.001} hrStyles={{width:'88%',marginHorizontal:'6%'}}/>
      </View>
    </TouchableWithoutFeedback>
    {props.isopen  && <View style={[{height:this.heightScreen/3.5},
      {backgroundColor:'#ecf0f1',width:'90%',marginHorizontal:'5%',borderRadius:8}]}>
      {props.show }
    </View>}

  </View>
  )
}

const MessageData=()=>{
  return(
    <View style={{flex:1}}>
      <View style={{flex:1.6,marginLeft:'5%',marginTop:'3%'}}>
        <Text style={{fontSize:10}}>
          PTA meeting is on 02/02/2018 at 10.30am @ seminar hall.you are requested to attend the
          same without fail.principal Appscook school of Management
        </Text>
      </View>
      {/* <Hr lineColor="grey" textPadding={0.001} hrStyles={{width:'88%',marginHorizontal:'6%'}}/> */}
      <View style={{flex:3.5,flexDirection:'row',justifyContent:'space-between'}}>
        <View style={{flex:1}}>
          <View style={{flex:0.3}}></View>
          <View style={{flexDirection:'row',flex:1}}>
            <View style={{marginLeft:'7%',height:17,width:17,borderRadius:8.5,backgroundColor:'#bdc3c7'}}></View>
            <Text style={{marginLeft:'5%',fontSize:12}}>Total Sent</Text>
            <Text style={{marginLeft:'5%'}}>2405</Text>
          </View>
          <View style={{flexDirection:'row',flex:1}}>
            <View style={{marginLeft:'7%',height:17,width:17,borderRadius:8.5,backgroundColor:'#4cd137'}}></View>
            <Text style={{marginLeft:'5%',fontSize:12}}>Delivered</Text>
            <Text style={{marginLeft:'5%'}}>2305</Text>
          </View>
          <View style={{flexDirection:'row',flex:1}}>
            <View style={{marginLeft:'7%',height:17,width:17,borderRadius:8.5,backgroundColor:'#fbc531'}}></View>
            <Text style={{marginLeft:'5%',fontSize:12}}>Submitted</Text>
            <Text style={{marginLeft:'5%'}}>36</Text>
          </View>
          <View style={{flexDirection:'row',flex:1}}>
            <View style={{marginLeft:'7%',height:17,width:17,borderRadius:8.5,backgroundColor:'#e84118'}}></View>
            <Text style={{marginLeft:'5%',fontSize:12}}>Failed</Text>
            <Text style={{marginLeft:'5%'}}>25</Text>
          </View>
          <View style={{flex:0.3}}></View>
        </View>
        <View style={{flex:1}}>
          {/* place for graph */}
          <Pie />
        </View>
      </View>
    </View>
  )
}
