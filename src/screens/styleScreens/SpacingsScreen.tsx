import * as _ from "lodash";
import * as React from "react";

import { ScrollView } from "react-native";
import { Colors, Spacings, View, Text } from "react-native-ui-lib/src";

interface InterfaceProps {}

interface InterfaceState {}

export default class SpacingsScreen extends React.Component<InterfaceProps, InterfaceState> {
  constructor(props) {
    super(props);
  }

  public render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View padding-18>
          <Text text30 dark10 marginB-20>
            Spacings
          </Text>
          <View>
            {_.map(Spacings, (value, key) => {
              return (
                <View key={key} marginB-12>
                  <View row spread bottom>
                    <Text text60 dark10>
                      {key}
                    </Text>
                    <Text dark30 text90>
                      {value}
                    </Text>
                  </View>
                  <View height={value} bg-red80 right />
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    );
  }
}
