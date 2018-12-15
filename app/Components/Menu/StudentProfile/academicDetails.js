import React, {PropTypes} from 'react';
import {
  View,
  StyleSheet,Text,Dimensions
} from 'react-native';

const widthScreen= Dimensions.get('window').width/18;
const heightScreen= Dimensions.get('window').height/26;

export default class AcademicDetails extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {

    return (
      <View style={{flex:1,backgroundColor:'#ecf0f1',width:'90%',marginHorizontal:'5%',borderTopWidth:0.3,borderTopColor:'#bdc3c7'}}>


        <View style={{height:heightScreen,justifyContent:'space-around',flexDirection:'row',alignItems:'center'}}>
          <Text style={{fontSize:10,fontWeight:'600'}}>Attendence:   {96-this.props.data.absent}/96</Text>
          <Text style={{fontSize:10,fontWeight:'600'}}>absent:  {this.props.data.absent}</Text>
        </View>


        <View style={{height:heightScreen*2,backgroundColor:'#3498db',flexDirection:'row'}}>
          <View style={{flex:1,alignItems:'center',justifyContent:'center',borderRightWidth:0.3,}}><Text style={{color:'white',fontSize:12}}>Subject</Text></View>
          <View style={{flex:1,alignItems:'center',justifyContent:'center',borderRightWidth:0.3}}><Text style={{color:'white',fontSize:12}}>Marks</Text></View>
          <View style={{flex:1,alignItems:'center',justifyContent:'center',borderRightWidth:0.3}}><Text style={{color:'white',fontSize:12}}>Grade</Text></View>
          <View style={{flex:1,alignItems:'center',justifyContent:'center',borderRightWidth:0.3}}><Text style={{color:'white',fontSize:12}}>Class Avg</Text></View>
          <View style={{flex:1,alignItems:'center',justifyContent:'center'}}><Text style={{color:'white',fontSize:12}}>School Avg</Text></View>
        </View>


          {
            this.props.data.studentExamDetails.markDetailsList.map((x,index)=>{
              return (
            <View style={{height:heightScreen*2}}>
              <View style={{flex:1,flexDirection:'row'}}>
                <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#f5f6fa',borderRightWidth:0.3}}><Text>{x.subject}</Text></View>
                <View style={{flex:1,alignItems:'center',justifyContent:'center',borderRightWidth:0.3}}><Text>{x.mark}</Text></View>
                <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#f5f6fa',borderRightWidth:0.3}}><Text>{x.grade}</Text></View>
                <View style={{flex:1,alignItems:'center',justifyContent:'center',borderRightWidth:0.3}}><Text>{x.classAvg}</Text></View>
                <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#f5f6fa',borderRightWidth:0.3}}><Text>{x.schoolAvg}</Text></View>
              </View>
            </View> );
            })
          }

          {/* <View style={{flex:1,}}>
            <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#f5f6fa',borderRightWidth:0.3}}><Text>77</Text></View>
            <View style={{flex:1,alignItems:'center',justifyContent:'center',borderRightWidth:0.3}}><Text>76</Text></View>
            <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#f5f6fa',borderRightWidth:0.3}}><Text>77</Text></View>
            <View style={{flex:1,alignItems:'center',justifyContent:'center',borderRightWidth:0.3}}><Text>78</Text></View>
            <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#f5f6fa',borderRightWidth:0.3}}><Text>79</Text></View>
          </View>
          <View style={{flex:1,}}>
            <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#f5f6fa',borderRightWidth:0.3}}><Text>77</Text></View>
            <View style={{flex:1,alignItems:'center',justifyContent:'center',borderRightWidth:0.3}}><Text>76</Text></View>
            <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#f5f6fa',borderRightWidth:0.3}}><Text>77</Text></View>
            <View style={{flex:1,alignItems:'center',justifyContent:'center',borderRightWidth:0.3}}><Text>78</Text></View>
            <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#f5f6fa',borderRightWidth:0.3}}><Text>79</Text></View>
          </View>
          <View style={{flex:1,}}>
            <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#f5f6fa'}}><Text>77</Text></View>
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}><Text>76</Text></View>
            <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#f5f6fa'}}><Text>77</Text></View>
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}><Text>78</Text></View>
            <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#f5f6fa'}}><Text>79</Text></View>
          </View> */}



      </View>
    );
  }
}
