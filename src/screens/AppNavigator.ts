/**
 * Copyright (c) 2018-present, ZDH
 * All rights reserved.
 *
 * FileName: screens/index.ts
 */

import * as _ from "lodash";

import { presetNavigator } from "./styleScreens";
import { wrapperNavigator } from "./wrapperScreens";
import { componentNavigator } from "./componentScreens";
import { nativeComponentNavigator } from "./nativeComponentScreens";
import { screenNavigator } from "./componentScreenScreens";
import { listNavigator } from "./listScreens";
import { animationNavigator } from "./animationScreens";
import { exampleNavigator } from "./realExamples";
import MainScreen from "./MainScreen";

import { StackNavigator } from "react-navigation";

const AppNavigator = StackNavigator(
  _.assign(
    {
      "unicorn.MainScreen": {
        screen: MainScreen,
        navigationOptions: {
          title: "UILib",
        },
      },
    },
    presetNavigator,
    wrapperNavigator,
    componentNavigator,
    nativeComponentNavigator,
    screenNavigator,
    listNavigator,
    animationNavigator,
    exampleNavigator,
  ),
  {
    initialRouteName: "unicorn.MainScreen",
  },
);

export default AppNavigator;
