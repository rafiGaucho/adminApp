import React, {PropTypes} from 'react';
import {
  View,ScrollView,ActivityIndicator,Dimensions,
  StyleSheet,Text,Image,ImageBackground,TextInput,
} from 'react-native';
import {Icon,Button,} from 'native-base';
import PopupDialog,{slideAnimation} from 'react-native-popup-dialog';
import {CircleCall,CircleMessage} from './circle.js'
import List from './list.js'
const widthScreen= Dimensions.get('window').width/18;
const heightScreen= Dimensions.get('window').height/26;

export default class Profile extends React.Component {
  static navigationOptions={
    drawerLabel:'Profile',
      header: null,
    drawerIcon:(<Icon name='person'  style={{color:'#636e72'}}/>),
  }

  constructor(props) {
    super(props);
    this.state={waiting:false,studentId:'',
      studentData:{
    "studentId": 20567,
    "studentName": "",
    "standardName": "",
    "divisionName": "",
    "admissionNo": "AIT023",
    "personalDetails": {
        "admissionNo": "AIT023",
        "gender": "Female",
        "bloodGroup": "",
        "houseGroup": "green",
        "busRouteCode": "4",
        "busRouteName": "puranattukara",
        "aadharNo": "",
        "father": {
            "parentId": 16473,
            "parentName": "",
            "mobileNo": "",
            "alternativeNo": null,
            "occupation": null,
            "address": ""
        },
        "mother": {
          "parentId": 1647,
          "parentName": "",
          "mobileNo": "",
          "alternativeNo": null,
          "occupation": null,
        }
    },
    "academicDetails": {
        "absent":"" ,
        "studentExamDetails": {
            "examName": "second unit test",
            "markDetailsList": [
                {
                    "subject": "",
                    "mark": "",
                    "grade": " ",
                    "classAvg": "",
                    "schoolAvg": ""
                },
            ]
        }
    },
    "classDetails": "5-A"
}
    }
  }


handlestudentIdChange=(studentId)=>{this.setState({studentId:studentId})}

handleBackButton=()=>{
  this.props.navigation.goBack(null)
}
componentWillMount(){
  // this.handleRequest()
}
handleRequest=()=>{
  this.setState({waiting:true})
     var data={
     studentId:this.state.studentId
        }
    fetch('http://test.ssdiary.com/ssdiary/adminapp/studentProfile.html', {
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
            alert(value.studentName);
            this.setState({studentData:value,waiting:false})
          }).catch( (err)=>{
            this.setState({waiting:false})
            alert(err)
          })
          this.popupDialog.dismiss();

}
handlePopUP=()=>{ this.popupDialog.show();}
  render() {
    return(
      <View style={{flex:1}}>

        <PopupDialog
            ref={(popupDialog) => { this.popupDialog = popupDialog; }}
           dialogAnimation={slideAnimation}
           height={0.1} width={1} containerStyle={{alignItems:'center',justifyContent:'flex-start'}} dialogStyle={{}} >
           <View style={{borderRadius:1,height:heightScreen*3,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
             <TextInput placeholder="Enter student Id" value={this.state.studentId}
              onChangeText={this.handlestudentIdChange}/>
             <Button  transparent onPress={this.handleRequest} style={{marginTop:10,}}><Icon name='search' style={{color:'#575fcf',fontSize:32}}/></Button>
           </View>
        </PopupDialog>


        <View style={{flex:1.5,backgroundColor:'#3B3B98',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <View>
              <Button transparent  style={{marginTop:10,}} onPress={this.handleBackButton}><Icon name='arrow-round-back' style={{color:'white'}}/></Button>
            </View>
            <Text style={{color:'white',fontSize:20,fontWeight:'600',paddingTop:7}}>STUDENT PROFILE</Text>
          </View>
          <View>
            <Button transparent onPress={this.handlePopUP} style={{marginTop:10,}}><Icon name='search' style={{color:'white',fontSize:32}}/></Button>
          </View>
        </View>


        <View style={{flex:5,backgroundColor:'#dfe6e9',}}>
          <ImageBackground source={require('./school.jpg')} style={{flex:1,height:'50%',width:'100%',
            alignItems:'center',justifyContent:'center'}} >
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
              <View style={{marginRight:'10%',margin:'1%'}}><CircleCall /></View>
              <View style={{alignItems:'center',justifyContent:'space-around'}}>
                <Image style={{height:100,width:100,borderRadius:50,borderColor:'white',borderWidth:3}}
                   source={require("./studen5.jpg")} />
                <View style={{flex:1,marginBottom:'3%'}} >
                  <Text style={{fontSize:16,fontWeight:'600',color:'black',}}>{this.state.studentData.studentName}</Text>
                  <Text syle={{fontSize:10,fontWeight:'400',}}>Class {this.state.studentData.standardName} - {this.state.studentData.divisionName}</Text>
                </View>
              </View>
              <View style={{marginLeft:'10%',margin:'1%'}}><CircleMessage /></View>
            </View>
        </ImageBackground>
        </View>


        <View style={{flex:7,backgroundColor:'white'}}>
          <List studentData={this.state.studentData}/>
        </View>


        <View style={{flex:0.75,backgroundColor:'#575fcf'}}>
        </View>

        {this.state.waiting && <View style={{height:heightScreen*28,width:'100%',position:'absolute',opacity:0.7,
        backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={{fontSize:20,color:'black'}}>Fetching Data ...</Text>
      </View>}




      </View>
    );
  }
}
