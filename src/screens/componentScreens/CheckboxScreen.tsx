import * as React from "react";

import { Colors, View, Checkbox, Assets, Text } from "react-native-ui-lib/src";

interface InterfaceProps {}

interface InterfaceState {
  value1: boolean;
  value2: boolean;
  value3: boolean;
}

export default class CheckboxScreen extends React.Component<InterfaceProps, InterfaceState> {
  static navigationOptions = ({ navigation }) => {
    const { state } = navigation;
    return {
      title: `${state.params.title}`,
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      value1: false,
      value2: true,
      value3: false,
    };
  }

  public render() {
    return (
      <View useSafeArea flex>
        <View flex padding-20>
          <View flex center row>
            <Checkbox
              value={this.state.value1}
              onValueChange={(value1) => this.setState({ value1 })}
              style={{ marginRight: 10 }}
            />

            <Checkbox
              value={this.state.value2}
              onValueChange={(value2) => this.setState({ value2 })}
              borderRadius={2}
              size={30}
              color={Colors.purple30}
              selectedIcon={Assets.icons.x}
              style={{ marginRight: 10 }}
            />

            <Checkbox
              value={this.state.value3}
              onValueChange={(value3) => this.setState({ value3 })}
              borderRadius={5}
              size={18}
              color={Colors.dark10}
              iconColor={Colors.green10}
            />
          </View>
          <Text text40 dark10>
            Checkbox
          </Text>
        </View>
      </View>
    );
  }
}
