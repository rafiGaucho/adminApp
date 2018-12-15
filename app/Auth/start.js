import React, { Component } from 'react';
import {
  View,
  StyleSheet,Text
} from 'react-native';
import {connect} from 'react-redux';
import Auth from './index.js'
// import PasswordForgot from './Password'
import ChangePassword from './ChangePassword'

class PreAuth extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.authSelector === 1){return <Auth />;}
    // if(this.props.authSelector === 2){return <PasswordForgot />;}
    if(this.props.authSelector === 3){return <ChangePassword />;}
  }
}
mapStateToProps=(state)=>({
  authSelector:state.session.authSelector
})
export default connect(mapStateToProps)(PreAuth)
