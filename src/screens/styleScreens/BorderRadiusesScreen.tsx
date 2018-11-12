import * as _ from "lodash";
import * as React from "react";

import { ScrollView, StyleSheet, ViewStyle } from "react-native";
import { Colors, BorderRadiuses, View, Text } from "react-native-ui-lib/src";

interface InterfaceProps {}

interface InterfaceState {}

interface InterfaceStyle {
  container: ViewStyle;
  labelContainer?: ViewStyle;
}

export default class ColorsScreen extends React.Component<InterfaceProps, InterfaceState> {
  static navigationOptions = ({ navigation }) => {
    const { state } = navigation;
    return {
      title: `${state.params.title}`,
    };
  };

  constructor(props) {
    super(props);
  }

  public render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text text30 dark10 marginB-20>
          Border Radius
        </Text>
        <View>
          {_.map(BorderRadiuses, (value, key) => {
            return (
              <View center key={key} height={150} width={150}>
                <View style={styles.labelContainer}>
                  <Text dark30 text50>
                    {key}
                  </Text>
                  <Text dark30 text70>
                    ({value})
                  </Text>
                </View>
                <View style={{ borderRadius: value }} bg-yellow30 width="40%" height="40%" />
              </View>
            );
          })}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create<InterfaceStyle>({
  container: {
    paddingVertical: 25,
    alignItems: "center",
    backgroundColor: Colors.dark80,
  },
  labelContainer: {
    position: "absolute",
    top: 5,
    left: 5,
  },
});
