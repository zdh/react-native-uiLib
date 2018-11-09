import * as React from "react";

import { StyleSheet, ViewStyle } from "react-native";
import { Constants, View, Text, Carousel } from "react-native-ui-lib/src";

interface InterfaceProps {}

interface InterfaceState {
  currentPage: number;
}

interface InterfaceStyle {
  page?: ViewStyle;
}

export default class CarouselScreen extends React.Component<InterfaceProps, InterfaceState> {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 1,
    };
  }

  private onChangePage = (index) => {
    this.setState({ currentPage: index + 1 });
  };

  public render() {
    return (
      <View flex>
        <Carousel loop onChangePage={(index) => this.onChangePage(index)}>
          <Page bg-red50>
            <Text>PAGE 1</Text>
          </Page>
          <Page bg-purple50>
            <Text>PAGE 2</Text>
          </Page>
          <Page bg-green50>
            <Text>PAGE 3</Text>
          </Page>
          <Page bg-yellow20>
            <Text>PAGE 4</Text>
          </Page>
          <Page bg-purple20>
            <Text>PAGE 5</Text>
          </Page>
          <Page bg-blue10>
            <Text>PAGE 6</Text>
          </Page>
        </Carousel>
        <View center style={{ ...StyleSheet.absoluteFillObject }} pointerEvents="none">
          <Text text10>{this.state.currentPage}</Text>
        </View>
      </View>
    );
  }
}

const Page = ({ children, ...others }) => {
  return (
    <View {...others} style={styles.page}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create<InterfaceStyle>({
  page: {
    width: Constants.screenWidth,
  },
});
