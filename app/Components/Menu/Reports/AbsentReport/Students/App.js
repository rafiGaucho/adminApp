
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  View,Dimensions
} from 'react-native';

import { VictoryArea,VictoryGroup,VictoryScatter,VictoryStack,VictoryChart} from "victory-native";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.heightScreen= Dimensions.get('window').height;
    this.widthScreen= Dimensions.get('window').width;
}

  render() {
    const size=this.widthScreen*0.5;
  const  heightScreen= Dimensions.get('window').height/26;
         return (
         <View style={{alignItems:'center'}}>
              <View style={[{width:this.widthScreen+size-15,alignItems:'center'}]}>
                <VictoryGroup  width={this.widthScreen+size-15}
                  height={heightScreen*10}
                  colorScale={"qualitative"}>
                 <VictoryScatter
                   height={heightScreen*10}
                    width={this.widthScreen+size-15}
                      style={{ data: { fill: "white",stroke:'white',strokeWidth:7 ,strokeOpacity:0.5} }}
                      size={5} data={[ { x: 4, y:53 }]} />
                 <VictoryArea
                    width={this.widthScreen+size-15}
                    // height={heightScreen*10}
                   interpolation="natural"
                  style={{ data: { fill: 'white' ,fillOpacity: 0.2, stroke: "white", strokeWidth: 1.1} }}
                  data={[
                     { x: '-', y: 60,  },
                     { x: 'Mon', y: 50,  },
                     { x: 'Tue', y: 33,  },
                     { x: 'Wed', y: 53,  },
                     { x: 'Thu', y: 56,  },
                     { x: 'Fri', y: 37,  },
                     { x: 'Sat', y: 51,  },
                     { x: '--', y: 12,  }  ]}    />
                   </VictoryGroup>
              </View>

               <View style={[{position:'absolute',width:this.widthScreen+size-15,alignItems:'center'}]}>
                <VictoryGroup  width={this.widthScreen+size-15}
                  height={heightScreen*10}
                  colorScale={"qualitative"}>
                    <VictoryScatter
                      height={heightScreen*10}
                       width={this.widthScreen+size-15}
                      style={{ data: { fill: "white",stroke:'white',strokeWidth:7 ,strokeOpacity:0.5} }}
                      size={5} data={[{ x: 4, y: 7 }]}  />
                    <VictoryArea interpolation="natural"
                      // height={heightScreen*10}
                       width={this.widthScreen+size-15}
                       style={{ data: { fill: 'white' ,fillOpacity: 0.3, stroke: "white", strokeWidth: 1.1} }}
                       data={[
                         { x: '-', y: 60,  },
                         { x: 'Mon', y:5,  },
                         { x: 'Tue', y:17,  },
                         { x: 'Wed', y: 7,  },
                         { x: 'Thu', y: 4,  },
                         { x: 'Fri', y: 13,  },
                         { x: 'Sat', y: 9,  },
                         { x: '--', y: 12,  }   ]}   />
                       </VictoryGroup>
                </View>
            </View>
         )
     }
 }
