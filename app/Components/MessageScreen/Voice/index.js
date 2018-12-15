import React, { Component } from 'react';
import {
  View,Dimensions,BackHandler,
  StyleSheet,Text,TouchableOpacity
} from 'react-native';
import Sound from 'react-native-sound';
import {AudioRecorder, AudioUtils} from 'react-native-audio';
import {Icon} from 'native-base';
import DropMenuVoice from './dropMenu.js'
import {connect} from 'react-redux'
screenHeight= Dimensions.get('window').height/28;
screenWidth= Dimensions.get('window').width/18;
import {recording,recorded,recordeStart,recordeStop} from './../../../store/voice/actions.js'

class VoiceContainer extends React.Component {
  static navigationOptions=({screenProps})=>({
  swipeEnabled:screenProps.islock,tabBarVisible: screenProps.islock,
})
state={startRecord:false,isRecorded:false,isPlaying:false,
  divisions:[],departments:[],standards:[],
      audioPath: AudioUtils.DocumentDirectoryPath + '/test.aac',
      hasPermission: true,}

componentDidMount(){this.prepareRecordingPath(this.state.audioPath);}


componentWillMount() {
  AudioRecorder.requestAuthorization()
this.setState({voice:new Sound(this.state.audioPath)})
  BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
}

componentWillUnmount() {
  BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
}

handleBackButton() {
  return true;
}
prepareRecordingPath(audioPath){
  AudioRecorder.prepareRecordingAtPath(audioPath, {
    SampleRate: 22050,
    Channels: 1,
    AudioQuality: "medium",
    AudioEncoding: "aac",
    AudioEncodingBitRate: 32000
    });
   }

   async handleStart() {
    this.prepareRecordingPath(this.state.audioPath);
    this.props.recordeStart();
    try {
      const filePath = await AudioRecorder.startRecording();
    } catch (error) {
      console.error(error);
    }
   }

  async handleStop () {
    this.props.recording()
    this.props.recordeStop();
   try {
    const filePath = await AudioRecorder.stopRecording();
    return filePath;
   } catch (error) {
    console.error(error);
   }
    // this.setState({isRecorded:true,})
   }


  _play=()=> {
    this.setState({isPlaying:true})
    this.play();
 }
 play=()=>{
   setTimeout(() => {
   var sound = new Sound(this.state.audioPath);
   this.setState({voice:sound})
   setTimeout(() => {
    this.state.voice.play((success) => {
  if (success) {
    this.setState({isPlaying:false})
  } else {
    console.log('playback failed due to audio decoding errors')}})}, 100);}, 100)

  }
  stop=()=>{ this.setState({isPlaying:false}) }
  handleDelete=()=>{this.state.voice.stop();this.props.recorded();this.setState({isPlaying:false}) }
  handllePause=()=>{this.state.voice.pause();this.setState({isPlaying:false})}
  loadDivisions=()=>{
    var data = { "schoolId":9 };
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
      })
  }
  loadDepartments=()=>{
    var data = { "schoolId":9 };
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
        this.setState({ departments: value });
      })
  }
  loadStandards=()=>{
    var data = { "schoolId":9 };
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
      })
  }
  componentDidMount() {
    this.loadDivisions();
    this.loadDepartments();
    this.loadStandards();
   }
  handleSend=()=>{
    var divisionListData=[];
    this.state.divisions.map((x,index)=>{
    divisionListData[index]={name:x.division , id:x.id}
  })
  var standardListData=[];
  this.state.standards.map((x,index)=>{
    standardListData[index]={name:x.standard , id:x.id , divisionList:divisionListData}
  })
  var departmentListData=[];
  this.state.departments.map((x,index)=>{
    departmentListData[index]={name:x.department , id:x.id}
  })
  stdAndDeptDetails1=[{

   // {standard:[{name:"1",id:120,divisionId:[{name:"A",id:49},{name:"B",id:50},{name:"C",id:581},{name:"D",id:825},
   // {name:"E",id:1249},{name:"F",id:2201}]},
   // {name:"2",id:254,divisionId:[{name:"A",id:49},{name:"B",id:50},{name:"C",id:581},{name:"D",id:825},
   // {name:"E",id:1249},{name:"F",id:2201}]}],
   // Dept:[{name:"APPSCOOK TEAMS",id:863},{name:"Bhubaneswar Team",id:1539}]}
 }]
    // var data={
       const convertSoundFile=this.state.audioPath;
      const stdAndDeptDetails=[{
        "standard":standardListData,
        "department":departmentListData
      }]
    //
    //    }
    data=new FormData();
    data.append('convertSoundFile',convertSoundFile)
    data.append('stdAndDeptDetails',stdAndDeptDetails)
      fetch('http://be.ssdiary.com/VoicePanel/voicepanel/sendVoiceCall?duration=00:26&schoolId=9&userAccoundId=8960&schoolRegCode=0009&creditCount=2&testNos=9633902484', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
         'Accept': 'application/json',
             // "Content-Type": "application/json"
        // 'Content-Type': 'multipart/form-data',
         'boundary' : '------WebKitFormBoundary7MA4YWxkTrZu0gW'
        }
      })
        .then(response => {
          return response.json();
        })
        .then(value => {
          alert(value.message);
          this.setState({value:''})
        })
  }

  render() {
    backgroundColor= !this.props.startRecord? '#54a0ff' : '#ff6b6b' ;
    return (
      <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'white'}}>

      {!this.state.isRecorded && <TouchableOpacity onPress={!this.props.startRecord? ()=>this.handleStart() : ()=>this.handleStop()}>
        <View style={[{height:screenHeight*7,width:screenHeight*7,borderRadius:screenHeight*3.5,backgroundColor:backgroundColor,
          alignItems:'center',justifyContent:'center'}]}>
        { !this.props.startRecord && <View style={{alignItems:'center',justifyContent:'center'}}>
          <Text style={[{color:'white',fontSize:14,fontWeight:'600',marginBottom:screenHeight*0.3}]}>Record</Text>
           <Text style={{color:'white',fontSize:14,fontWeight:'600'}}>Start</Text>
        </View>}
          {this.props.startRecord && <Text style={[{color:'white',fontSize:14,fontWeight:'600'}]}> Stop</Text>}
        </View>
      </TouchableOpacity>}
      {this.props.startRecord && <View style={{}}>
        <Text style={{fontSize:14,color:'black'}}>Recording...</Text>
      </View>}

    {this.props.isRecord && <View style={{flexDirection:'row',position:'absolute',top:'75%',}}>
      <Icons name={!this.state.isPlaying ?'play':'pause'} type='MaterialCommunityIcons' backgroundColor='#824FD2'
        onPress={!this.state.isPlaying ? this._play:this.handllePause} />
      <Icons name='upload' type='MaterialCommunityIcons' backgroundColor='#CCBF56' onPress={this.handleSend}/>
      <Icons name='delete' type='MaterialCommunityIcons' backgroundColor='#e74c3c' onPress={this.handleDelete}/>
    </View>}

    {this.props.isRecord &&
      <DropMenuVoice />}
      </View>
    );
  }
}
Icons=(props)=>{
  return (
    <TouchableOpacity onPress={props.onPress} disabled={props.disabled}
      style={[{height:screenHeight*2,width:screenHeight*2,borderRadius:screenHeight*1,alignItems:'center',justifyContent:'center',
      backgroundColor:props.backgroundColor,marginHorizontal:screenWidth}]}>
      <Icon name={props.name} type={props.type} style={{color:'white'}}/>
    </TouchableOpacity>
  );
}
mapStateToProps=(state)=>({
  isRecord:state.voice.isRecord,startRecord:state.voice.startRecord
})
mapDispatchToProps={
recording:recording,recorded:recorded,recordeStart:recordeStart,recordeStop:recordeStop
}
export default connect(mapStateToProps,mapDispatchToProps)(VoiceContainer)
