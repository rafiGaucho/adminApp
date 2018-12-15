// import firebase from 'firebase'
import {View,StyleSheet,Alert,TouchableOpacity,TextInput,Text,AsyncStorage} from 'react-native';


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


export const userLogin=()=>{
return (dispatch)=>{
      dispatch({type:'loggingEnable'})
    }
  }

export const saveUser = (data) => {
  return (dispatch) => {
    AsyncStorage.setItem('userData', JSON.stringify(data.success));
    AsyncStorage.setItem('schoolId', JSON.stringify(data.schoolId));
    AsyncStorage.setItem('userAcoountId', JSON.stringify(data.userAcoountId));
      dispatch({type:'saveUser'})
          // alert(data.message)
  }}

export const logoutUser = () => {
  return (dispatch) => {
      removeUserData();
        dispatch({type:'logoutUser'})
}}
removeUserData = async () => {
  try {
    const value = await AsyncStorage.removeItem('userData');
    const value2 = await AsyncStorage.removeItem('schoolId');
    const value3 = await AsyncStorage.removeItem('userAcoountId');
   } catch (error) {
     console.warn(error);// Error retrieving data
   }
}
///////////////////////////////////////////

// export const toForgotPassword=()=>{
// return (dispatch)=>{
//       dispatch({type:'toForgotPassword'});
//     }
//   }
export const toChangePassword=()=>{
  return (dispatch)=>{
        dispatch({type:'toChangePassword'});
      }
    }
    export const toAuth=()=>{
      return (dispatch)=>{
            dispatch({type:'toAuth'});
          }
        }
export const messageDataSaver=(dept,stdDiv)=>{
  return (dispatch)=>{
  dispatch({type:"saveMessageData",payload1:dept,payload2:stdDiv})
  };
  }

export const getUserId=(userId,schoolId)=>{
 return (dispatch)=>{
 dispatch({type:"getUserId",payload:userId,payload2:schoolId})
  }
  }
export const loadBusRouteDetails=(value)=>{
  return (dispatch)=>{
    dispatch({type:'loadBusRouteDetails',payload:value})
  };
  }
