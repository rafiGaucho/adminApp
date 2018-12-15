import React, { Component } from 'react';
import {
  View,Dimensions,TextInput,ActivityIndicator,
  StyleSheet,Text,TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {toAuth} from './../../store/session/actions.js'

const widthScreen= Dimensions.get('window').width/18;
const heightScreen= Dimensions.get('window').height/26;

class PasswordForgot extends React.Component {
  constructor(props) {
    super(props);
    this.state={mobNo:'',waiting:false,userName:'',password:'',newPassword:''}
  }
  handleUserNameChange=(userName)=>{this.setState({userName:userName})}
  handlePasswordChange=(password)=>{this.setState({password:password})}
  handlenewPasswordChange=(newPassword)=>{this.setState({newPassword:newPassword})}
  handleCancel=()=>{this.props.toAuth();}
  handleRequest=()=>{
    this.setState({waiting:true})
     var data={   }

    fetch('http://parentconnect.in/ssdiary/adminapp/changePassword?schoolId='+schoolCode+'&username='+this.state.userName+'&oldPassword='+this.state.password+'&newPassword='+this.state.newPassword, {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(response => {
            return response.json();
          })
          .then(value => {
            alert(value.message);

          }).then(() =>{
            this.setState({waiting:false});
              this.handleCancel();
          }).catch( (err)=>{
            this.setState({waiting:false})
            alert('Network Error')
          })
  }


  render() {
    return (
      <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#5352ed'}}>
        <View style={{width:widthScreen*16,height:heightScreen*13,borderRadius:5,backgroundColor:'white'}}>
          <View style={{flex:1.5,alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontWeight:'600',color:'black',textAlign:'center'}}> Password Change</Text>
            <Text style={{fontWeight:'400',textAlign:'center',}}> </Text>
          </View>
          <View style={{flex:1,alignItems:'center'}}>
            <TextInput placeholder='Username' placeholderTextColor='#7f8c8d'
              value={this.state.userName}
              onChangeText={this.handleUserNameChange}
            />
          </View>
          <View style={{flex:1,alignItems:'center'}}>
            <TextInput placeholder='Old Password' placeholderTextColor='#7f8c8d'
              value={this.state.password}
              onChangeText={this.handlePasswordChange}
            />
          </View>
          <View style={{flex:1,alignItems:'center'}}>
            <TextInput placeholder='New Password' placeholderTextColor='#7f8c8d'
              value={this.state.newPassword}
              onChangeText={this.handlenewPasswordChange}
            />
          </View>
          <View style={{flex:1,flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
            <View style={{}}>
              <TouchableOpacity onPress={this.handleCancel} style={{padding:10,backgroundColor:'#5352ed',borderRadius:5}}>
                <Text style={{color:'white'}}>Cancel</Text>
              </TouchableOpacity>
            </View>
            <View style={{}}>
              <TouchableOpacity onPress={this.handleRequest} style={{padding:10,backgroundColor:'#5352ed',borderRadius:5}}>
                <Text style={{color:'white'}}>Request</Text>
              </TouchableOpacity></View>
          </View>
        </View>
        {this.state.waiting && <View style={{height:heightScreen*28,width:'100%',position:'absolute',opacity:0.7,
        backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>}
      </View>
    );
  }
}
mapStateToProps=(state)=>({
  authSelector:state.session.authSelector
})
mapDispatchToProps={
  toAuth:toAuth
}
export default connect(mapStateToProps,mapDispatchToProps)(PasswordForgot)
