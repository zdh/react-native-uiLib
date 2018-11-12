import * as React from "react";

import { View, Text, WheelPickerDialog } from "react-native-ui-lib/src";

interface InterfaceItem {
  value: number;
  label: string;
}

interface InterfaceProps {}

interface InterfaceState {
  selectedValue: number;
  title: string;
  items: InterfaceItem[];
}

export default class WheelPickerDialogScreen extends React.Component<
  InterfaceProps,
  InterfaceState
> {
  static navigationOptions = ({ navigation }) => {
    const { state } = navigation;
    return {
      title: `${state.params.title}`,
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedValue: 1,
      title: "Set time",
      items: [
        { value: 0, label: "0 hr" },
        { value: 1, label: "1 hr" },
        { value: 3, label: "3 hr" },
        { value: 5, label: "5 hr" },
        { value: 10, label: "10 hr" },
        { value: 24, label: "24 hr" },
        { value: 48, label: "48 hr" },
        { value: 72, label: "72 hr" },
      ],
    };
  }

  private onSelect = (itemValue) => {
    this.setState({ selectedValue: itemValue });
  };

  private onCancel = () => {};

  public render() {
    return (
      <View flex center>
        <WheelPickerDialog
          selectedValue={this.state.selectedValue}
          items={this.state.items}
          title={this.state.title}
          onSelect={this.onSelect}
          onCancel={this.onCancel}
        />
        <Text test60 style={{ width: 280 }}>
          {`The result value is ${
            this.state.selectedValue
          }. Roll the picker and press OK to change it`}
        </Text>
      </View>
    );
  }
}
