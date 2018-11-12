import * as React from "react";

import { Colors, View, Text, LoaderScreen } from "react-native-ui-lib/src";

interface InterfaceProps {}

interface InterfaceState {
  loading: boolean;
  animationConfig?: {
    animation: string;
    onAnimationEnd(): void;
  };
}

export default class LoadingScreen extends React.Component<InterfaceProps, InterfaceState> {
  static navigationOptions = ({ navigation }) => {
    const { state } = navigation;
    return {
      title: `${state.params.title}`,
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  public componentDidMount() {
    setTimeout(() => {
      this.setState({
        animationConfig: {
          animation: "fadeOut",
          onAnimationEnd: () => this.setState({ loading: false }),
        },
      });
    }, 2500);
  }

  public render() {
    const { loading, animationConfig } = this.state;
    return (
      <View flex bg-orange70 center>
        <Text text10>Content Content Content</Text>
        {loading && (
          <LoaderScreen
            color={Colors.blue60}
            message="Loading..."
            overlay
            // backgroundColor={Colors.rgba(Colors.dark80, 0.85)}
            {...animationConfig}
          />
        )}
      </View>
    );
  }
}
