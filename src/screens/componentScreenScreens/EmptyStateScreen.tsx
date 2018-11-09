import * as React from "react";

import { StyleSheet, ScrollView, ViewStyle } from "react-native";
import { StateScreen, Constants, PageControl, View } from "react-native-ui-lib/src";

const localImageSource = require("../../assets/images/empty-state.jpg");
const remoteImageSource = {
  uri: "https://ws2.sinaimg.cn/large/006tNbRwly1fwyq0n8nwpj30f00a0q3l.jpg",
};

interface InterfaceProps {}

interface InterfaceState {
  currentPage: number;
}

interface InterfaceStyle {
  container: ViewStyle;
  pageView: ViewStyle;
}

export default class EmptyStateScreen extends React.Component<InterfaceProps, InterfaceState> {
  constructor(props) {
    super(props);
    this.state = { currentPage: 0 };
  }

  private setCurrentPage = (offsetX) => {
    if (offsetX >= 0) {
      this.setState({
        currentPage: Math.floor(offsetX / Constants.screenWidth),
      });
    }
  };

  public render() {
    return (
      <View>
        <ScrollView
          style={styles.pageView}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onScroll={(event) => {
            this.setCurrentPage(event.nativeEvent.contentOffset.x);
          }}
          scrollEventThrottle={200}
        >
          <View style={styles.pageView}>
            <StateScreen
              title="Oppsie (with local image)"
              subtitle="Nothing to see here.."
              ctaLabel="OK"
              imageSource={localImageSource}
            />
          </View>
          <View style={styles.pageView}>
            <StateScreen
              title="Oppsie (with remote image)"
              subtitle="Nothing to see here.."
              ctaLabel="OK"
              imageSource={remoteImageSource}
            />
          </View>
        </ScrollView>
        <PageControl
          containerStyle={{
            position: "absolute",
            bottom: 10,
            left: 0,
            width: Constants.screenWidth,
          }}
          numOfPages={2}
          currentPage={this.state.currentPage}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create<InterfaceStyle>({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  pageView: {
    width: Constants.screenWidth,
    height: Constants.screenHeight,
  },
});
