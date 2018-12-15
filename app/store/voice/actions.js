// import firebase from 'firebase'
import {View,StyleSheet,Alert,TouchableOpacity,TextInput,Text} from 'react-native';


//
// export const userSignup=(email,password)=>{
//   return (dispatch)=>{
//     dispatch({type:'loadingEnable'})
//   firebase.auth().createUserWithEmailAndPassword(email,password)
//   .catch(error=>{Alert.alert(error.message)})
//   dispatch({type:'loadingDisable'})
// }
// }
//
//
//
export const recording=()=>{
return (dispatch)=>{
      dispatch({type:'recording'})
    }
  }
  export const recorded=()=>{
  return (dispatch)=>{
        dispatch({type:'recorded'})
      }
    }
    export const recordeStart=()=>{
      // alert('jj')
    return (dispatch)=>{
          dispatch({type:'recordeStart'})
        }
      }
  export const recordeStop=()=>{
    return (dispatch)=>{
        dispatch({type:'recordeStop'})
      }
      }

//
//
export const logoutUser = () => {
  return (dispatch) => {
        dispatch({type:'logoutUser'})
}}
//
//
//
// export const sendMessage=(textMessage)=>{
//   return (dispatch)=>{
//     let currentUser=firebase.auth().currentUser
//     let text=textMessage
//     let createdAt=new Date().getTime()
//     let chatMessage={
//        text:text,
//       createdAt:createdAt,
//     userName:currentUser.uid,
//       email:currentUser.email
//     }
//     firebase.database().ref('finalmessages').push().set(chatMessage)
//   }
// }
//
//
// export const loadMessages=()=>{
//   return (dispatch)=>{
//     firebase.database().ref('finalmessages').on('value',(snap)=>{
//    var data=snap.val();
//    dispatch({type:"messageLoaded",messages:data})
//  })
// }
// }
