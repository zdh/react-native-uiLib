import * as React from "react";

import { View, Text, TouchableOpacity } from "react-native-ui-lib/src";

interface InterfaceProps {}

interface InterfaceState {
  count: number;
  snippet?: any;
}

export default class TouchableOpacityScreen extends React.Component<
  InterfaceProps,
  InterfaceState
> {
  private example?: any;

  static navigationOptions = ({ navigation }) => {
    const { state } = navigation;
    return {
      title: `${state.params.title}`,
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  public componentDidMount() {
    const snippet = this.example.getSnippet();
    this.setState({
      snippet,
    });
  }

  private count = (num?: number) => {
    this.setState({
      count: this.state.count + (num || 1),
    });
  };

  public render() {
    return (
      <View flex bg-dark70 useSafeArea>
        <View flex center>
          <View marginB-20>
            <Text center>TouchableOpacity with support for throttling.</Text>
            <Text center>In this example, throttleTime is set to 1200</Text>
          </View>
          <TouchableOpacity
            throttleTime={1200}
            onPress={() => this.count()}
            ref={(element) => (this.example = element)}
          >
            <Text text40>Click Me!</Text>
          </TouchableOpacity>
          <View center marginT-20>
            <Text text20>{this.state.count}</Text>
          </View>
        </View>
        <View bg-dark10 margin-10 padding-10>
          <Text white>{this.state.snippet}</Text>
        </View>
      </View>
    );
  }
}
