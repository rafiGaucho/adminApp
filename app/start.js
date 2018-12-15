import React ,{Component} from 'react';
import {connect} from 'react-redux';
import {View,Text,AsyncStorage,ActivityIndicator} from 'react-native'
import Auth from './Auth'
import Home from './Components/Home/container.js'
import PreAuth from './Auth/start.js';
import {userLogin,messageDataSaver,getUserId,loadBusRouteDetails} from './store/session/actions.js'




class Start extends Component{
  constructor(props) {
      super(props);
      this.state={
        loading:false,isLoad:this.props.logged,text:''
      }
    }
getUser = async () => {
   let userId = '';
   let schoolId='';
   try {
     userId = await AsyncStorage.getItem('userAcoountId');
     schoolId = await AsyncStorage.getItem('schoolId');
     this.setState({userAcoountId:userId,schoolId:schoolId});
   } catch (error) {
     console.warn(error.message);
   }
   return userId;
  }
loadData=()=>{
  this.setState({loading:true,text:'Loading'});
  this.getUser().then(()=>{
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
                // this.setState({ busRouteDetails: value, });
                this.props.loadBusRouteDetails(value)
              }).then(()=>{
                this.setState({loading:false,text:''});
              }).catch((err)=>{alert(err);this.setState({loading:false,text:''});})
            }).catch((err)=>{alert(err);this.setState({loading:false,text:''});})
      }).catch((err)=>{alert(err);this.setState({loading:false,text:''});})
  }).catch((err)=>{alert(err);this.setState({loading:false,text:''});})

  })

}

componentWillMount=()=>{
  this.getUserId();
  }

getUserId = async () => {
   let userId = '';
   try {
     userId = await AsyncStorage.getItem('userData') || 'none';
     this.setState({user:userId});
   } catch (error) {
     // console.warn(error.message);
   }
   if(this.state.user == 'true'){
     this.props.userLogin()
     this.loadData()
   }

 }
render(){

    if(this.props.logged == true)
      {
        if(this.state.loading === true){
        return (<Loading text={this.state.text}/>);}
        else if (this.state.loading === false) {
          return(<Home />)
        }
      }
    else {
      return(<PreAuth /> ) }

    }
   }

const Loading=(props)=>{
 return (
   <View style={{height:'100%',width:'100%',position:'absolute',
    backgroundColor:'#3B3B98',justifyContent:'center',alignItems:'center'}}>
    <ActivityIndicator size="large" color="white" />
    <Text style={{color:'white',fontSize:15,fontWeight:'bold',marginTop:'35%'}}>{props.text}</Text>
  </View>
 );
   }
mapDispatchToProps={
userLogin:userLogin,
messageDataSaver:messageDataSaver,getUserId:getUserId,
loadBusRouteDetails:loadBusRouteDetails
}

mapStateToProps=(state)=>({
  logged:state.session.logged,
})

export default connect(mapStateToProps,mapDispatchToProps)(Start)
