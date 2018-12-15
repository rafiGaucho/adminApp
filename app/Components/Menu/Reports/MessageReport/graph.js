

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ART,
  LayoutAnimation,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';

const {
  Surface,
  Group,
  Rectangle,
  Shape,
} = ART;

import * as scale from 'd3-scale';
import * as shape from 'd3-shape';
import * as d3Array from 'd3-array';
import AnimShape from './art/AnimShape';

const d3 = {
  scale,
  shape,
};

import {
    scaleBand,
    scaleLinear
} from 'd3-scale';

type Props = {
  height: number,
  width: number,
  pieWidth: number,
  pieHeight: number,
  colors: any,
  onItemSelected: any
};

type State = {
  highlightedIndex: number,
};

class Pie extends React.Component {

  // state: State;

  constructor(props: Props) {
    super(props);
    this._createPieChart = this._createPieChart.bind(this);
    this._value = this._value.bind(this);
    this._color = this._color.bind(this);
    this.colors= [
        "#bdc3c7",
        "#4cd137",
        "#fbc531",
        "#e84118", ],
   this.data= [
    {"number":  30, },
    {"number": 300, },
    {"number": 95,},
    {"number": 50},

  ]
  }


  _value(item) { return item.number; }

  _color(index) { return this.colors[index]; }

  _createPieChart(index) {

    var arcs = d3.shape.pie()
        .value(this._value)
        (this.data);


    var arc = d3.shape.arc()
      .outerRadius(40)
      .padAngle(0)
      .innerRadius(32);

    var path= arc(arcs[index]);

     return {
       path,
       color: this._color(index),
     };
  }


  render() {

    return (
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <View style={{position:'absolute',top:'35%',left:'35%',right:'35%',bottom:'35%',
          alignItems:'center',justifyContent:'center'}}>
          <Text style={{fontSize:8}}>Message</Text>
          <Text style={{fontSize:8}}>Details </Text>
          <Text style={{fontSize:8}}>Graph</Text>
        </View>
        <Surface width={100} height={100} >
           <Group x={51} y={51}>
           {
              this.data.map((item, index) =>
              (<AnimShape
                 key={'pie_shape_' + index}
                 color={this._color(index)}
                 d={ () => this._createPieChart(index)}
              />)
              )
            }

           </Group>
        </Surface>
      </View>
    );
  }
}

export default Pie;
