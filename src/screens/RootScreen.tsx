import * as React from "react";

import Welcome from "./Welcome";
import AppNavigator from "./AppNavigator";

interface InterfaceProps {}
interface InterfaceState {
  initApp: boolean;
  second: number;
}

import { observer } from "mobx-react/native";

@observer
export default class RootScreen extends React.Component<InterfaceProps, InterfaceState> {
  timer;

  constructor(props) {
    super(props);
    this.state = {
      initApp: true,
      second: 5,
    };
  }

  public componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        second: this.state.second - 1,
      });
    }, 1000);
    setTimeout(() => {
      this.setState({
        initApp: false,
      });
      clearInterval(this.timer);
    }, 5000);
  }
  public render() {
    if (this.state.initApp) {
      return <Welcome second={this.state.second} />;
    }
    return <AppNavigator />;
  }
}
