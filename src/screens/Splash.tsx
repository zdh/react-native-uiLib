import * as React from "react";

import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Colors, View, Text } from "react-native-ui-lib/src";

interface InterfaceProps {
  navigation?: any;
}

interface InterfaceState {}

interface InterfaceStyle {
  container: ViewStyle;
  title: TextStyle;
  powered: ViewStyle;
}

export default class Splash extends React.Component<InterfaceProps, InterfaceState> {
  constructor(props) {
    super(props);
  }

  public render() {
    return (
      <View flex center style={styles.container}>
        <Text text30 style={styles.title}>
          UILib
        </Text>
        <Text text70 marginT-10 style={styles.title}>
          Base on react-native-ui-lib
        </Text>
        <Text text70 style={styles.powered}>
          Powered by React Native
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create<InterfaceStyle>({
  container: {
    flex: 1,
  },
  title: {
    fontWeight:  "500",
  },
  powered: {
    position: "absolute",
    bottom: 30,
  }
});
