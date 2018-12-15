import React, {PropTypes} from 'react';
import {
  View,Text,Dimensions,TouchableOpacity,TouchableWithoutFeedback,
  StyleSheet,ImageBackground,TextInput,ActivityIndicator,AsyncStorage
} from 'react-native';
import {connect} from 'react-redux';
import {Icon} from 'native-base';
import Hr from "react-native-hr-component";
import {userLogin,toChangePassword,saveUser} from './../store/session/actions.js'
import {messageDataSaver,getUserId,loadBusRouteDetails} from './../store/session/actions.js'
const widthScreen= Dimensions.get('window').width/18;
const heightScreen= Dimensions.get('window').height/26;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state={userName:'appscook@gmail.com',password:'drssd@pass',waiting:false,text:''}
  }

handleUserNameChange=(userName)=>{this.setState({userName:userName})}
handlePasswordChange=(password)=>{this.setState({password:password})}
handleLogin=()=>{
  this.setState({waiting:true});
  fetch('http://test.ssdiary.com/ssdiary/adminapp/signin.html?userName='+this.state.userName+'&password='+this.state.password, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => {
          return response.json();
        })
        .then(value => {
          this.setState({ data: value });
          if(value.success === true){
            this.props.saveUser(this.state.data);
          }
          else {alert(this.state.data.message);this.setState({waiting:false})}
        }).then(()=>{
          if(this.state.data.success === true){
            this.getUser().then(()=>{this.loadData();});
          }
        })
        .catch((err)=>{
          alert(err)
          this.setState({waiting:false});
        });

}
getUser = async () => {
   let userId = '';
   let schoolId=''
   try {
     userId = await AsyncStorage.getItem('userAcoountId');
     schoolId = await AsyncStorage.getItem('schoolId');
     this.setState({userAcoountId:userId,schoolId:schoolId});
   } catch (error) {
     console.warn(error);
   }
   return userId;
  }
loadData=()=>{
  this.setState({waiting:true,text:'Loading'});
  var data = { "schoolId":this.state.schoolId };
  this.setState({text:'Loading Standards'})
  fetch('http://test.ssdiary.com/ssdiary/adminapp/loadStandards.html', {
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
      this.setState({ standards: value });
    }).then(()=>{
      this.setState({text:'Loading Divisions'})
      fetch('http://test.ssdiary.com/ssdiary/adminapp/loadDivisions.html', {
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
          this.setState({ divisions: value });
          var arrayStdDiv=[]
          this.state.standards.map((x,index)=>{
            var divisionList=[];
            value.map((y,index2)=>{
            divisionList[index2]={name:y.division,id:y.id,divState:false}
               })
           arrayStdDiv[index]={name:x.standard,id:x.id,stdState:false,divisionList:divisionList}
        })
        this.setState({arrayStdDiv})
        }).then(()=>{
          this.setState({text:'Loading Departments'})
          fetch('http://test.ssdiary.com/ssdiary/adminapp/loadDepartments.html', {
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
              this.setState({ departments: value, });
              var arrayDept=[]
              value.map((x,index)=>{
                arrayDept[index]={name:x.department,id:x.id,state:false}
               })
               this.setState({arrayDept})

            }).then(()=>{
              this.props.messageDataSaver(this.state.arrayDept,this.state.arrayStdDiv);
              this.props.getUserId(this.state.userAcoountId,this.state.schoolId);
            }).then(()=>{
              this.setState({text:'Loading Bus Route Details'})
              fetch('http://test.ssdiary.com/ssdiary/adminapp/loadBusrouteDetails.html', {
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
                  this.props.loadBusRouteDetails(value)
                }).then(()=>{
                  this.setState({waiting:false,text:''});
                  this.props.userLogin();
                }).catch((err)=>{alert(err);this.setState({waiting:false,text:''});})
              }).catch((err)=>{alert(err);this.setState({waiting:false,text:''});})
        }).catch((err)=>{alert(err);this.setState({waiting:false,text:''});})
    }).catch((err)=>{alert(err);this.setState({waiting:false,text:''});})

}
handleChangePassword=()=>{this.props.toChangePassword();}
  render() {
    return (
      <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'grey'}}>
        <ImageBackground source={require('./login.jpg')} style={{width: '100%', height: '100%',justifyContent:'flex-end'}} >
          <View style={{width:widthScreen*16,marginHorizontal:widthScreen,height:heightScreen*13,borderRadius:5,
            backgroundColor:'white',marginBottom:heightScreen,alignItems:'center',justifyContent:'center'}}>

          <View style={{flex:1,justifyContent:'flex-end'}}>
            <View style={{flexDirection:'row',alignItems:'center',marginLeft:widthScreen}}>
              <Icon name='user-o' type='FontAwesome' style={{color:'#0984e3'}}/>
              <TextInput placeholder='Username' placeholderTextColor='#7f8c8d'
                value={this.state.userName}
                 onChangeText={this.handleUserNameChange} />
            </View>
            <Hr lineColor="#636e72" textPadding={0.001} hrStyles={{width:'90%',marginHorizontal:'5%',marginTop:-10}}/>
          </View>
          <View style={{flex:1,justifyContent:'center'}}>
            <View style={{flexDirection:'row',alignItems:'center',marginLeft:widthScreen}}>
              <Icon name='lock' type='SimpleLineIcons' style={{color:'#0984e3'}}/>
              <TextInput placeholder='Password' placeholderTextColor='#7f8c8d'
                value={this.state.password}
                  onChangeText={this.handlePasswordChange} />
            </View>
            <Hr lineColor="#636e72" textPadding={0.001} hrStyles={{width:'90%',marginHorizontal:'5%',marginTop:-10}}/>
          </View>
          <View style={{flex:1,}}>
            <TouchableOpacity style={{width:widthScreen*12,height:heightScreen*2.5,borderRadius:heightScreen*1.25,
              backgroundColor:'#f1c40f',justifyContent:'center',alignItems:'center'}}
              onPress={this.handleLogin} >
              <Text style={{color:'white',fontWeight:'bold',fontSize:22,}}>Login</Text>
            </TouchableOpacity>
            <View style={{alignItems:'center',justifyContent:'flex-end'}}>
             <TouchableWithoutFeedback onPress={this.handleChangePassword}>
               <Text style={{fontWeight:'400',marginTop:'5%'}}>Change Password ?</Text>
             </TouchableWithoutFeedback>
             {/* <TouchableWithoutFeedback onPress={this.handleNewUser}>
               <Text style={{fontWeight:'400'}}>Signup </Text>
             </TouchableWithoutFeedback> */}
           </View>
          </View>

          </View>
        </ImageBackground>
        {this.state.waiting && <View style={{height:heightScreen*28,width:'100%',position:'absolute',
        backgroundColor:'#3B3B98',justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size="large" color="white" />
        <Text style={{color:'white',fontSize:15,fontWeight:'bold',marginTop:'35%'}}>{this.state.text}</Text>
      </View>}
      </View>
    );
  }
}
mapDispatchToProps={
userLogin:userLogin,toChangePassword:toChangePassword,saveUser:saveUser,
messageDataSaver:messageDataSaver,getUserId:getUserId,
loadBusRouteDetails:loadBusRouteDetails
}
mapStateToProps=(state)=>({
initialWindow:state.session.initialWindow
})
export default connect(mapStateToProps,mapDispatchToProps)(Login)
