import * as React from "react";

import * as ReactNative from "react-native";
import { Text, Button, View, Colors, HighlighterOverlayView } from "react-native-ui-lib/src";

interface InterfaceProps {}

interface InterfaceState {
  fteHighlightViewTag: undefined | number;
  showFTE: boolean;
}

export default class HighlightOverlayViewScreen extends React.PureComponent<
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

    this.onRefUpdated = this.onRefUpdated.bind(this);

    this.state = {
      fteHighlightViewTag: undefined,
      showFTE: false,
    };
  }

  public componentDidMount() {
    this.setState({ showFTE: true });
  }

  private onRefUpdated(ref) {
    if (ref) {
      // @ts-ignore
      this.setState({ fteHighlightViewTag: ReactNative.findNodeHandle(ref) });
    }
  }

  private renderHighlighterOverlay = () => {
    return (
      <HighlighterOverlayView
        visible={this.state.showFTE}
        overlayColor={"rgba(242, 242, 242, 0.93)"}
        strokeColor={Colors.blue30}
        strokeWidth={1}
        highlightViewTag={this.state.fteHighlightViewTag}
      >
        <View marginT-125 paddingH-14 right>
          <Text text50 black style={{ textAlign: "right" }}>
            {"Check out this new amazing feature, just tap here!"}
          </Text>
          <Button
            marginT-15
            link
            blue30
            text50M
            label="Got it"
            onPress={() => this.setState({ showFTE: false })}
          />
        </View>
      </HighlighterOverlayView>
    );
  };

  public render() {
    return (
      <View flex center>
        <View collapsable={false} ref={this.onRefUpdated}>
          <Text>{"Highlight Me"}</Text>
        </View>
        {this.renderHighlighterOverlay()}
      </View>
    );
  }
}
