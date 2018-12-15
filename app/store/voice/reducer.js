export * from './actions'

const initialState={
  drawerLock:'',
  tabLock:true,
  isRecord:false,startRecord:false
}


 const voice=(state=initialState,action)=>{
switch (action.type) {
  case 'recording':return {...state,isRecord:true}
  break;
  case 'recorded':return {...state,isRecord:false}
  break;
  case 'recordeStart':return {...state,startRecord:true,tabLock:false,drawerLock:'locked-closed'}
  break;
  case 'recordeStop':return {...state,startRecord:false,tabLock:true,drawerLock:''}
  break;
  default: return state;

}
}

export default voice
