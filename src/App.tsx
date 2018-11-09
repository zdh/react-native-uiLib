/**
 * Copyright (c) 2018-present, ZDH
 * All rights reserved.
 *
 * FileName: App.tsx
 */

import { UIManager } from "react-native";

import RootScreen from "./screens/RootScreen";

import * as Animatable from "react-native-animatable";

// for OS === 'android', iOS设备默认打开
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

Animatable.initializeRegistryWithDefinitions({
  basicListEntrance: {
    from: { opacity: 0, translateY: 20 },
    to: { opacity: 1, translateY: 0 },
  },
});

export default RootScreen;
