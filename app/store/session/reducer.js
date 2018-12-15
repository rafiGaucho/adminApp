export * from './actions'

const initialState={
  loading:false,
  logged:false,
  messageStdDivData:[],messageDeptData:[],
  userId:null,authSelector:1,busRouteDetails:[],schoolId:null
}


 const session=(state=initialState,action)=>{
switch (action.type) {
 case 'loadingEnable':return {...state, loading:true}
 break;
 case 'loadingDisable':return {...state, loading:false}
 break;
 case 'loggingEnable':return { ...state,logged:true,}
 break;
 case 'loggingDisable':return {...state, logged:false}
 break;
 case 'messageLoaded':return {...state, initialWindow:'456'}
 break;
 case 'logoutUser':return initialState
 break;
 case 'toForgotPassword':return {...state, authSelector:2}
 break;
 case 'toChangePassword':return {...state, authSelector:3}
 break;
 case 'toAuth':return {...state, authSelector:1}
 break;
 case 'saveUser':return {...state, user:true}
 break;
 case 'saveMessageData':return {...state, messageStdDivData:action.payload2,messageDeptData:action.payload1}
 break;
 case 'getUserId' :return {...state , userId:action.payload,schoolId:action.payload2}
 break;
 case 'loadBusRouteDetails' :return{...state ,busRouteDetails:action.payload}
 break;
 default: return state;

}
}

export default session
