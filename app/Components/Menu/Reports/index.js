import React, { Component } from 'react';
import { StackNavigator, } from 'react-navigation';
import {
  View,
  StyleSheet,
} from 'react-native';
import { Body, Content,Card,Item,Input, Icon,Button} from 'native-base';
import Menu from './../index.js';
import ReportList from './ReportList';
import AccountReport from './AccountReport';
import MessageReport from './MessageReport';
import AbsentReport from './AbsentReport';
import StaffLeaveReport from './StaffLeaveReport';
import LibraryReport from './LibraryReport';
import AcademicReport from './AcademicReport';
import InventoryReport from './InventoryReport';


const ReportStack = StackNavigator(
  {
    ReportList: ReportList,
    AccountReport:AccountReport,
    MessageReport:MessageReport,
    AbsentReport:AbsentReport,
    StaffLeaveReport:StaffLeaveReport,
    LibraryReport:LibraryReport,
    AcademicReport:AcademicReport,
    InventoryReport:InventoryReport
    },
  {
    initialRouteName: 'ReportList',

  }
);
export default class Reports extends React.Component {
  static navigationOptions={
    header:null
  }
  static router = ReportStack.router;

  render() {
    return <ReportStack navigation={this.props.navigation}/>;
  }
}
