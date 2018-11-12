import * as _ from "lodash";
import * as React from "react";

import { ScrollView, StyleSheet, ActivityIndicator, ViewStyle } from "react-native";
import { Colors, AnimatedImage } from "react-native-ui-lib/src";

const SampleImages = [
  "https://static.pexels.com/photos/50721/pencils-crayons-colourful-rainbow-50721.jpeg",
  "https://static.pexels.com/photos/60628/flower-garden-blue-sky-hokkaido-japan-60628.jpeg",
];

interface InterfaceProps {}

interface InterfaceState {}

interface InterfaceStyle {
  container: ViewStyle;
}

export default class AnimatedImageScreen extends React.Component<InterfaceProps, InterfaceState> {
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
        {_.map(SampleImages, (image, index) => (
          <AnimatedImage
            containerStyle={{ backgroundColor: Colors.blue50, marginBottom: 10 }}
            imageStyle={{ resizeMode: "cover", height: 250 }}
            imageSource={{ uri: image }}
            loader={<ActivityIndicator />}
            key={index}
            animationDuration={index === 0 ? 300 : 800}
          />
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create<InterfaceStyle>({
  container: {
    flex: 1,
  },
});
