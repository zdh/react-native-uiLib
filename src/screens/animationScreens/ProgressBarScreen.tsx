import * as _ from "lodash";
import * as React from "react";

import { ScrollView } from "react-native";
import { Colors, View, Text, ProgressBar } from "react-native-ui-lib/src";

interface InterfaceProps {}

interface InterfaceState {
  progresses: number[];
}

export default class ProgressBarScreen extends React.Component<InterfaceProps, InterfaceState> {
  elements: any[] = new Array(4);

  constructor(props) {
    super(props);
    this.state = {
      progresses: [0, 0, 0, 0],
    };
  }

  public componentDidMount() {
    this.startProgress(0, 45);
    this.startProgress(1, 25);
    this.startProgress(2, 70);
    this.startProgress(3, 15);
  }

  private startProgress = (index, stepSize) => {
    const { progresses } = this.state;
    progresses[index] = Math.min(progresses[index] + stepSize, 100);
    this.setState({
      progresses,
    });

    if (progresses[index] < 100) {
      setTimeout(() => {
        this.startProgress(index, stepSize);
      }, 800);
    }
  };

  public render() {
    const { progresses } = this.state;

    return (
      <ScrollView>
        <View flex bg-dark80 spread paddingV-18>
          <View paddingL-18 marginB-18>
            <Text text40 dark10>
              ProgressBar
            </Text>
          </View>
          {_.map(progresses, (value, index) => {
            return (
              <View key={index}>
                <ProgressBar
                  ref={(element) => (this.elements[index] = element)}
                  progress={value}
                  height={[10, 15, 22, 30][index]}
                  backgroundColor={
                    [Colors.red70, Colors.purple70, Colors.blue70, Colors.green70][index]
                  }
                  progressBackgroundColor={
                    [Colors.red40, Colors.purple40, Colors.blue30, Colors.green40][index]
                  }
                />

                <View bg-dark10 padding-12>
                  <Text white>{this.elements[index] && this.elements[index].getSnippet()}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    );
  }
}
