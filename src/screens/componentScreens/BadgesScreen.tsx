import * as React from "react";

import { ScrollView, StyleSheet, ViewStyle } from "react-native";
import { Colors, View, Badge, Button, Text } from "react-native-ui-lib/src";

const BadgesSpace = 30;
const plusIcon = require("../../assets/icons/chevronUp.png");
const minusIcon = require("../../assets/icons/chevronDown.png");

interface InterfaceProps {}

interface InterfaceState {
  value: number;
}

interface InterfaceStyle {
  container: ViewStyle;
}

export default class BadgesScreen extends React.Component<InterfaceProps, InterfaceState> {
  static navigationOptions = ({ navigation }) => {
    const { state } = navigation;
    return {
      title: `${state.params.title}`,
    };
  };

  constructor(props) {
    super(props);

    this.state = {
      value: 10,
    };
  }

  private changeLabelValue = (value) => {
    const currValue = this.state.value;
    const newValue = currValue + value;
    if (newValue >= 1) {
      this.setState({ value: newValue });
    }
  };

  public render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View row center>
          <View center marginR-20>
            <Badge
              label={"1"}
              containerStyle={{ marginTop: BadgesSpace }}
              backgroundColor={Colors.blue30}
            />
            <Badge
              label={"1"}
              containerStyle={{ marginTop: BadgesSpace }}
              backgroundColor={Colors.blue30}
              borderWidth={3}
              borderColor={Colors.blue50}
            />
            <Badge
              size="small"
              label={"1"}
              containerStyle={{ marginTop: BadgesSpace }}
              backgroundColor={Colors.blue30}
            />
          </View>

          <View center marginR-20>
            <Badge
              label={this.state.value.toString()}
              containerStyle={{ marginTop: BadgesSpace }}
              backgroundColor={Colors.red30}
            />
            <Badge
              label={this.state.value.toString()}
              containerStyle={{ marginTop: BadgesSpace }}
              backgroundColor={Colors.red30}
              borderWidth={1}
            />
            <Badge
              size="small"
              label={this.state.value.toString()}
              containerStyle={{ marginTop: BadgesSpace }}
              backgroundColor={Colors.red30}
            />
          </View>

          <View center marginR-20>
            <Badge label={"99+"} containerStyle={{ marginTop: BadgesSpace }} />
            <Badge
              label={"99+"}
              containerStyle={{ marginTop: BadgesSpace }}
              borderWidth={2}
              borderColor={Colors.white}
            />
            <Badge size="small" label={"99+"} containerStyle={{ marginTop: BadgesSpace }} />
          </View>
        </View>

        <View row marginT-50 marginB-15>
          <Button
            bg-dark60
            style={{ width: 40, height: 40, borderWidth: 1, marginRight: 15 }}
            iconSource={minusIcon}
            avoidMinWidth
            onPress={() => this.changeLabelValue(-1)}
            onLongPress={() => this.changeLabelValue(-10)}
          />
          <Button
            bg-dark60
            style={{ width: 40, height: 40, borderWidth: 1 }}
            iconSource={plusIcon}
            avoidMinWidth
            onPress={() => this.changeLabelValue(1)}
            onLongPress={() => this.changeLabelValue(10)}
          />
        </View>
        <Text center>
          Press buttons to change red badge value by 1. Long press to change it by 10.
        </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create<InterfaceStyle>({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
    backgroundColor: Colors.dark70,
  },
});
