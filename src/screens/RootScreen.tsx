import * as React from "react";

import Splash from "./Splash";
import AppNavigator from "./AppNavigator";

interface InterfaceProps {}
interface InterfaceState {
  initApp: boolean;
}

import {observer} from 'mobx-react/native';

@observer
export default class RootScreen extends React.Component<InterfaceProps, InterfaceState> {
  constructor(props) {
    super(props);
    this.state = {
      initApp: true,
    }
  }

  public componentDidMount() {
    setTimeout(() => {
      this.setState({
        initApp: false,
      })
    }, 2000);
  }
  public render() {
    if (this.state.initApp) {
      return <Splash />;
    }
    return <AppNavigator />;
  }
}
