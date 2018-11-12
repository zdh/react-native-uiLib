import * as _ from "lodash";
import * as React from "react";

import { ScrollView, View, StyleSheet, ViewStyle } from "react-native";
import { Typography, Colors, Text } from "react-native-ui-lib/src";

interface InterfaceProps {}

interface InterfaceState {}

interface InterfaceStyle {
  container: ViewStyle;
  typographyEntry: ViewStyle;
}

export default class TypographyScreen extends React.Component<InterfaceProps, InterfaceState> {
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
      <ScrollView style={styles.container}>
        {_.map(Typography, (value, key) => {
          return (
            <View key={key} style={styles.typographyEntry}>
              <Text dark10 style={value}>
                {key}
              </Text>
              <Text dark10 style={[{ fontSize: 12, color: Colors.dark50, marginTop: -1 }]}>
                font size of {value.fontSize}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create<InterfaceStyle>({
  container: {},
  typographyEntry: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderColor: Colors.dark70,
    borderBottomWidth: 1,
  },
});
