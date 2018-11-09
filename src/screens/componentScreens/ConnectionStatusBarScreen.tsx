import * as React from "react";

import { StyleSheet, ViewStyle } from "react-native";
import { ConnectionStatusBar, Typography, Colors, View, Text } from "react-native-ui-lib/src";

ConnectionStatusBar.registerGlobalOnConnectionLost(() => {
  // console.warn('what what?!? connection has been lost');
});

interface InterfaceProps {}

interface InterfaceState {
  isConnected: boolean;
}

interface InterfaceStyle {
  container?: ViewStyle;
}

export default class ConnectionStatusBarScreen extends React.Component<
  InterfaceProps,
  InterfaceState
> {
  constructor(props) {
    super(props);
    this.state = {
      isConnected: true,
    };
  }

  public render() {
    return (
      <View style={styles.container}>
        <ConnectionStatusBar onConnectionChange={(isConnected) => this.setState({ isConnected })} />
        <Text
          style={{
            textAlign: "center",
            marginBottom: 10,
            ...Typography.text60,
            color: Colors.dark40,
          }}
        >
          Turn your wifi on/off to see the component in action
        </Text>
        <Text style={{ ...Typography.text40 }}>
          {this.state.isConnected ? "Connected! :)" : "No connection :("}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create<InterfaceStyle>({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 25,
  },
});
