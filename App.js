import React, { Component } from 'react';
import {
  View,TouchableWithoutFeedback,TouchableOpacity,AsyncStorage,
  StyleSheet,TextInput ,Text,Dimensions,ActivityIndicator,ScrollView
} from 'react-native';
import { Body, Content,Card,Item,Input, Icon,Button,Radio} from 'native-base';
import PopupDialog,{slideAnimation} from 'react-native-popup-dialog';
import DropMenu from './dropMenu.js';
import Hr from "react-native-hr-component";
import {schoolCode} from './../../../schoolCode.js'
import CheckBox from 'react-native-check-box'
const widthScreen1= Dimensions.get('window').width/18;
const heightScreen1= Dimensions.get('window').height/26;
import {connect} from 'react-redux';

class MessageContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      // arrayStdDiv:[],
      waiting:false,userAcoountId:'',arrayDept:this.props.messageDeptData,
      arrayStdDiv:this.props.messageStdDivData,
        // {standard:'lkg',divisions:[{division:'a',id:'00'},{division:'b',id:'01'},{division:'c',id:'02'}]},
        // {standard:'lkg1',divisions:[{division:'a',id:'00'},{division:'b',id:'01'},{division:'c',id:'02'}]},
        // {standard:'lkg2',divisions:[{division:'a',id:'00'},{division:'b',id:'01'},{division:'c',id:'02'}]},
        // {standard:'lkg3',divisions:[{division:'a',id:'00'},{division:'b',id:'01'},{division:'c',id:'02'}]}],
      // divisions:[],departments:[],standards:[],
      arrayFromStore:this.props.messageStdDivData,
      dropMenu:false,
      value:'',
      isSmsApp:false,isApp:true,isAll:false,
      checkedDept:false,selectDept:true,
      checkedStud:false,selectStud:false,
      checkedBus:false,
      // arrayStdDiv2:[
      //   {"name":"1","id":120,"divisionList":[{"name":"A","id":49},{"name":"B","id":50},{"name":"C","id":581},{"name":"D","id":825},{"name":"E","id":1249},{"name":"F","id":2201} ]},
      //   {"name":"2","id":254,"divisionList":[{"name":"A","id":49},{"name":"B","id":50},{"name":"C","id":581},{"name":"D","id":825},{"name":"E","id":1249},{"name":"F","id":2201}]}]
    }
    }

handleTextChange=(value)=>{this.setState({value})}
handleDropMenu=()=>{this.setState({dropMenu:!this.state.dropMenu});}

handleClickDept=()=>{this.setState({ checkedDept:!this.state.checkedDept,  })}
handleClickStud=()=>{this.setState({checkedStud:!this.state.checkedStud,})}
handleClickBus=()=>{this.setState({checkedBus:!this.state.checkedBus})}
handleSelectDept=()=>{this.setState({selectDept:!this.state.selectDept,selectStud:false})}
handleSelectStud=()=>{this.setState({selectStud:!this.state.selectStud,selectDept:false})}

getUserId = async () => {
 let userId = '';
 try {
   userId = await AsyncStorage.getItem('userAcoountId');
   this.setState({userAcoountId:userId});
 } catch (error) {
   console.warn(error.message);
 }
}

  handlePopUP=()=>{ this.popupDialog.show();}
  handleSmsApp=()=>{this.setState({isSmsApp:!this.state.isSmsApp,isApp:false})}
  handleApp=()=>{this.setState({isApp:!this.state.isApp,isSmsApp:false})}
  selectAll=()=>{this.setState({isAll:!this.state.isAll})}


loadStandardsDivisionsDepartments=()=>{
   this.setState({waiting:true})
   var data = { "schoolId":schoolCode };
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
       // value.map((x,index)=>{ this.setState({[x.id]:false}) }
     }).then(()=>{
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
           var divisions=value;
           this.state.standards.map((x,index)=>{
             value.map((y,index2)=>{
                 divisions[index2]={division:y.division,id:y.id}
                })
            arrayStdDiv[index]={standard:x.standard,divisions:divisions}
         })
         this.setState({arrayStdDiv})
         }).then(()=>{
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
                 arrayDept[index]={department:x.department,id:x.id,state:false}
                })
                this.setState({arrayDept})

             }).then(()=>{
               // let arr = this.state.arrayStdDiv2;
               let arrayStdDiv=this.state.arrayStdDiv;
               arrayStdDiv[0].standard='ow'
               // arrayStdDiv[0].divisions[0].id = '01';
               arrayStdDiv[0].divisions[0].division = '01';
               // arr[0].divisionList[0].id = 01;
               console.warn(arrayStdDiv);
               // console.warn(arr);
               // var divisionListData=[];
               // this.state.divisions.map((x,index)=>{
               // divisionListData[index]={name:x.division , id:x.id}
               // })
               // var standardListData=[];
               // this.state.standards.map((x,index)=>{
               // standardListData[index]={name:x.standard , id:x.id , divisionList:divisionListData}
               // });
               // this.setState({standardListData:standardListData})

             }).then(()=>{this.setState({waiting:false});}).catch((err)=>{alert(err)})

         }).catch((err)=>{alert(err)})
     }).catch((err)=>{alert(err)})
   }
componentDidMount() {
   this.loadStandardsDivisionsDepartments();
   this.getUserId();
console.warn(this.state.arrayStdDiv);
    }
handleSendSmsApp=()=>{
      this.setState({waiting:true})
      this.handleSendApp();
      var data={
        	"schoolId" :schoolCode,
        	"userAccountId" : this.state.userAcoountId,
        	"mobNumbers" :"8907518767,8606250616",
        	"messageLanguageCode" :"en",
        	"message" :this.state.value
        }
        fetch('http://test.ssdiary.com/ssdiary/adminapp/sendTestMessage.html', {
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
            this.setState({value:''})
            this.setState({waiting:false})
          })
    }
handleSendApp=()=>{
      this.setState({waiting:true})
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
       var data={
        "schoolId": schoolCode,
	       "userAccountId" : this.state.userAcoountId,
         "message" : this.state.value,
         "messageLanguageCode": "en",
         "checkList":
           [{
          	"standard":standardListData,
          	"department":departmentListData
          }]
        }
      this.popupDialog.dismiss();
      fetch('http://test.ssdiary.com/ssdiary/adminapp/sendSMS.html', {
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
        this.setState({value:''})
        this.setState({waiting:false})
        });
     }
handleCheckDept=(val,index)=>{
  let arrayDept = this.state.arrayDept
  arrayDept[index].state=!val.state
  this.setState({arrayDept});}

handleCheckStd=(val,index)=>{
  let arrayStdDiv=this.state.arrayStdDiv;
  let divisions=[];
  val.divisions.map((x,index2)=>{
    x.divState=!val.stdState;
    })
  arrayStdDiv[index]={standard:val.standard,stdState:!val.stdState,divisions:val.divisions}
  this.setState({arrayStdDiv})
}
handleCheckDiv=(val1,index1,val2,index2)=>{
let arrayStdDiv=this.props.messageStdDivData;
arrayStdDiv[index1].divisions[index2].divState = !val2.divState
this.setState({arrayStdDiv});
console.warn(arrayStdDiv);
}


render() {
    const  heightScreen= Dimensions.get('window').height;
    disable=this.state.value.trim().length == 0

    const data = this.state.arrayStdDiv.map((x,index)=>{
     return (
       <View key={index}>
        <CheckBox checkBoxColor='#1B9CFC' key={index}
       style={[{height:heightScreen1*2,alignItems:'center'}, index%2==0 ? {backgroundColor:'#ecf0f1'}:{backgroundColor:'white'},{justifyContent:'center'}]}
       isChecked={this.state.arrayStdDiv[index].stdState}
       leftText={x.standard} leftTextStyle={{marginLeft:20}}
       onClick={()=>{this.handleCheckStd(x,index)}}/>
       {x.divisions.map((y,index2)=>{
         return (
           <View key={y.division}>
           <CheckBox checkBoxColor='#1B9CFC' key={y.division}
          style={[{height:heightScreen1*2,alignItems:'center'}, index%2==0 ? {backgroundColor:'#ecf0f1'}:{backgroundColor:'white'},{justifyContent:'center'}]}
          isChecked={y.divState}
          leftText={y.division} leftTextStyle={{marginLeft:20}}
          onClick={()=>{this.handleCheckDiv(x,index,y,index2)}}/>
        </View>
         );
       }) }

     </View>
        );
      })

    return (
      <View style={{backgroundColor:'#d2dae2',flex:1,}}>


        <PopupDialog
            ref={(popupDialog) => { this.popupDialog = popupDialog; }}
           dialogAnimation={slideAnimation}
           height={0.4} width={0.6} containerStyle={{paddingBottom:'40%'}} dialogStyle={{}} >
           <View style={{flex:1,borderRadius:7}}>
             <MessagePopUp isSmsApp={this.state.isSmsApp} isApp={this.state.isApp} selectSmsApp={this.handleSmsApp}
               selectApp={this.handleApp} handleSend={this.state.isApp ? this.handleSendApp : this.handleSendSmsApp}/>
           </View>
        </PopupDialog>


        <View style={{flex:0.75}}>
          <Item style={{backgroundColor:'#a5b1c2'}}>
            <Radio style={{margin:'3%'}} color={"#ecf0f1"} selectedColor={"black"} selected={this.state.isAll} onPress={this.selectAll}/>
            <View style={{height:'60%',width:'95%',flexDirection:'row'}}>
              <Item style={{backgroundColor:'#d2dae2',width:'65%'}}>
                <Input disabled placeholder='To All'/>
              </Item>

              <Button iconRight
                onPress={this.handleDropMenu}
                 style={{width:'25%',height:'100%',backgroundColor:'#f7b731'}} >
                <Text style={{fontSize:14,fontWeight:'bold',marginBottom:3,paddingLeft:10,color:'black'}}>Type</Text>
                <Icon name={this.state.dropMenu==false ?'arrow-dropdown':'arrow-dropup'} style={{color:'black',paddingLeft:3}} />
              </Button>
            </View>
          </Item>
        </View>

        <View style={{flex:10,}}>
          <View style={{height:'60%',marginLeft:20,marginRight:20,marginTop:50,borderRadius:5,backgroundColor:'white'}}>
            <TextInput placeholder='Type your message' maxLength={148} value={this.state.value}
              onChangeText={this.handleTextChange}
              multiline={true} style={{fontSize:18}} editable={!this.state.dropMenu}/>
          </View>

          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
            <Text style={{marginTop:'5%'}}>Message Character {148-this.state.value.length}/SMS 001</Text>
            <TouchableOpacity onPress={this.handlePopUP}
              disabled={this.state.dropMenu||disable} style={{marginTop:'5%'}}>
             <View style={[{alignItems:'center',justifyContent:'space-around',flexDirection:'row',backgroundColor:'#3498db'},
               {height:heightScreen*(1.5/26),width:heightScreen*(3.5/26),borderRadius:heightScreen*(1.5/52)}]}>
               <Text style={{fontSize:14,color:'white'}}>send</Text>
               <Icon name='send' style={{color:'white',fontSize:16}}/>
             </View>
           </TouchableOpacity>
          </View>
        </View>
        {this.state.dropMenu &&
          // <DropMenu isAll={this.state.isAll}/>

          <View style={{height:'70%',width:'85%',position:'absolute',
             backgroundColor:'white',flex:1,borderRadius:5
            ,marginLeft:'10.3%',marginTop:'10%',borderBottomWidth:1,}}>
           <View style={{flexDirection:'row',flex:1,}}>

             <View style={[{flex:1.3,flexDirection:'row',alignItems:'center', justifyContent:'center'},
               this.state.selectDept?{backgroundColor:'#45aaf2'}:null]}>
               <TouchableWithoutFeedback onPress={this.handleSelectDept}>
                 <Text style={[{padding:3},this.state.selectDept?{color:'white'}:{color:'black'}]}>Department</Text>
               </TouchableWithoutFeedback>
               <CheckBox   checkBoxColor='blue'
                   isChecked={this.state.checkedDept}
                  onClick={this.handleClickDept}/>
             </View>
             <View style={[{flex:1.1,flexDirection:'row',alignItems:'center', justifyContent:'center'},
               this.state.selectStud?{backgroundColor:'#45aaf2'}:null]}>
               <TouchableWithoutFeedback onPress={this.handleSelectStud}>
                 <Text style={[{padding:3},this.state.selectStud?{color:'white'}:{color:'black'}]}>Students</Text>
               </TouchableWithoutFeedback>
               <CheckBox   checkBoxColor='blue'
                   isChecked={this.state.checkedStud}
                  onClick={this.handleClickStud}/>
             </View>
             <View style={[{flex:1,flexDirection:'row',alignItems:'center', justifyContent:'center'}]}>
               <TouchableWithoutFeedback onPress={this.handleClickBus}>
                 <Text style={[{padding:3},{color:'black'}]}>Bus</Text>
               </TouchableWithoutFeedback>
               <CheckBox   checkBoxColor='blue'
                   isChecked={this.state.checkedBus}
                  onClick={this.handleClickBus}/>
             </View>


            </View>
           <View style={{flex:4}}>
             <ScrollView>
               {this.state.selectDept &&
                  this.state.arrayDept.map((x,index)=>{
                   return (   <CheckBox checkBoxColor='#1B9CFC'
                     // disabled={!this.state.checkedDept}
                     style={[{height:heightScreen1*2,alignItems:'center'}, index%2==0 ? {backgroundColor:'#ecf0f1'}:{backgroundColor:'white'},{justifyContent:'center'}]}
                     isChecked={this.state.arrayDept[index].state}
                     leftText={this.state.arrayDept[index].department} leftTextStyle={{marginLeft:20}}
                     onClick={()=>{this.handleCheckDept(x,index)}}/>
                      );
                    })   }


                      {this.state.selectStud?data:null
                            }

              </ScrollView>
            </View>
          </View>

        }
        {this.state.waiting && <View style={{height:heightScreen,width:'100%',position:'absolute',opacity:0.7,
          backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>}

      </View>
    );
  }
}

const MessagePopUp=(props)=>{
  return(
    <View style={{flex:1}}>
      <View style={{flex:1,backgroundColor:'#ecf0f1',alignItems:'center',justifyContent:'center',borderRadius:5}}>
        <Text>MESSAGE SERVICE</Text>
      </View>

      <View style={{flex:2.5,backgroundColor:'white'}}>
        <View style={{flex:1,flexDirection:'row',alignItems:'center',}}>
          <Radio style={{marginLeft:'12%'}} color={"#ecf0f1"} selectedColor={"#95a5a6"} selected={props.isSmsApp} onPress={props.selectSmsApp}/>
          <TouchableWithoutFeedback onPress={props.selectSmsApp}>
            <View style={{marginLeft:'5%'}}><Text>SMS & App</Text></View>
          </TouchableWithoutFeedback>
        </View>
        <Hr lineColor="#eee" textPadding={0.001} hrStyles={{width:'88%',marginHorizontal:'6%'}}/>
        <View style={{flex:1,flexDirection:'row',alignItems:'center',}}>
          <Radio style={{marginLeft:'12%'}} color={"#ecf0f1"} selectedColor={"#95a5a6"} selected={props.isApp} onPress={props.selectApp}/>
          <TouchableWithoutFeedback onPress={props.selectApp}>
            <View style={{marginLeft:'5%'}}><Text>App Only</Text></View>
          </TouchableWithoutFeedback>
        </View>
      </View>

      <View style={{flex:1,backgroundColor:'#f1c40f',borderRadius:5,alignItems:'center',justifyContent:'center'}}>
        <TouchableOpacity onPress={props.handleSend} disabled={!props.isApp&&!props.isSmsApp}>
          <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text style={[{fontWeight:'bold'},props.isApp||props.isSmsApp?{color:'black'}:{color:'grey'}]}>DONE</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  ) ;
}

mapStateToProps=(state)=>({
  messageStdDivData:state.session.messageStdDivData,
  messageDeptData:state.session.messageDeptData
})

export default connect(mapStateToProps)(MessageContainer)
