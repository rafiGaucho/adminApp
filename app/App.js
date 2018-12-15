import React, { Component } from 'react';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import Home from './Components/Home/container.js'
import Login from './Auth'
import Start from './start.js'
import reducer from './reducer.js'
import {
  View,
  StyleSheet,AsyncStorage,BackHandler,PermissionsAndroid
} from 'react-native';

const middleware = [thunk]
export const store=createStore(reducer,applyMiddleware(...middleware))


export default class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount=()=>{
    this.requestLocalPermission();

}

async  requestLocalPermission() {
  try {
    const granted = await PermissionsAndroid.requestMultiple(
      [PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE],

    )
    const x=Object.keys(granted)

    if (granted[x[0]] === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      BackHandler.exitApp();
    } else if((granted[x[0]] === PermissionsAndroid.RESULTS.DENIED)) {
      this.requestLocalPermission();
    }
  } catch (err) {
    console.warn(err)
  }


  }


  render() {
    return (
     <Provider store={store}>
       {/* <Home /> */}
       <Start />
     </Provider>

    );
  }
}
