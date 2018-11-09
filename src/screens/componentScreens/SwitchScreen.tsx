import * as React from "react";

import { Colors, View, Text, Switch } from "react-native-ui-lib/src";

interface InterfaceProps {}

interface InterfaceState {
  value1: boolean;
  value2: boolean;
  value3: boolean;
  value4: boolean;
}

export default class SwitchScreen extends React.Component<InterfaceProps, InterfaceState> {
  constructor(props) {
    super(props);

    this.state = {
      value1: true,
      value2: false,
      value3: true,
      value4: false,
    };
  }

  public render() {
    return (
      <View flex bottom padding-20>
        <View flex center>
          <Switch
            value={this.state.value1}
            onValueChange={(value1) => this.setState({ value1 })}
            style={{ marginBottom: 20 }}
          />
          <Switch
            onColor={Colors.purple30}
            offColor={Colors.purple60}
            value={this.state.value2}
            onValueChange={(value2) => this.setState({ value2 })}
            style={{ marginBottom: 20 }}
          />

          <Switch
            width={80}
            height={38}
            thumbSize={34}
            value={this.state.value3}
            onValueChange={(value3) => this.setState({ value3 })}
            style={{ marginBottom: 20 }}
          />

          <Switch
            width={30}
            height={4}
            thumbSize={12}
            onColor={Colors.dark20}
            offColor={Colors.dark60}
            thumbColor={Colors.dark10}
            value={this.state.value4}
            onValueChange={(value4) => this.setState({ value4 })}
            style={{ marginBottom: 20 }}
          />
        </View>
        <Text text40 dark10>
          Switch
        </Text>
      </View>
    );
  }
}
