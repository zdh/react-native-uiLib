import * as _ from "lodash";
import * as React from "react";

import { StyleSheet, SectionList, TextStyle, ViewStyle } from "react-native";

import {
  Colors,
  Typography,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native-ui-lib/src";

import { store, InterfaceItem } from "./MainStore";

interface InterfaceProps {
  children?: JSX.Element;
  navigation?: any;
}

interface InterfaceState {
  sections: any[];
  filterText?: string;
}

interface InterfaceStyle {
  row?: ViewStyle;
  separator?: ViewStyle;
  sectionContainer?: ViewStyle;
  sectionText?: TextStyle;
  textInput?: TextStyle;
}

// @observer
export default class UiLibExplorerMenu extends React.Component<InterfaceProps, InterfaceState> {
  constructor(props) {
    super(props);
    this.state = {
      sections: store.navigationData,
    };
  }

  public componentDidMount() {
    // this.openScreen({screen: 'unicorn.PlaygroundScreen', title: 'Playground'});
    // this.openScreen({screen: 'unicorn.components.CardsScreen', title: 'Testing'});
  }

  private openScreen = (row: InterfaceItem) => {
    const { navigation } = this.props;

    navigation.navigate(row.screen, { ...this.props.navigation.state, ...row });

    this.filterExplorerScreens("");
  };

  private filterExplorerScreens = (filterText) => {
    let filteredNavigationData: any[] = [];
    const { navigationData } = store;

    if (!filterText) {
      filteredNavigationData = navigationData;
    } else {
      _.each(navigationData, (menuSection) => {
        const filteredMenuSectionData = _.filter(menuSection.data, (menuItem) => {
          // @ts-ignore
          const { title, description, tags } = menuItem;

          return (
            _.includes(_.lowerCase(title), _.toLower(filterText)) ||
            _.includes(_.toLower(description), _.toLower(filterText)) ||
            _.includes(_.toLower(tags), _.toLower(filterText))
          );
        });

        if (!_.isEmpty(filteredMenuSectionData)) {
          const filteredMenuSection = _.cloneDeep(menuSection);

          filteredMenuSection.data = filteredMenuSectionData;

          filteredNavigationData.push(filteredMenuSection);
        }
      });
    }

    this.setState({
      filterText,
      sections: filteredNavigationData,
    });
  };

  private renderSectionHeader = ({ section }) => {
    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionText}>{section.title}</Text>
      </View>
    );
  };

  private renderSeparator = (sId, id) => {
    return <View style={styles.separator} key={`s${sId}_${id}`} />;
  };

  private renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        key={index}
        style={{
          justifyContent: "center",
          paddingVertical: 20,
          paddingHorizontal: 25,
          backgroundColor: Colors.white,
        }}
        onPress={() => this.openScreen(item)}
      >
        <Text text70>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  public render() {
    return (
      <View flex>
        <View style={{ marginLeft: 20, marginTop: 20 }}>
          <TextInput
            style={styles.textInput}
            value={this.state.filterText}
            hideUnderline
            text80
            placeholder="Search your component.."
            onChangeText={this.filterExplorerScreens}
            autoCorrect={false}
          />
        </View>
        <SectionList
          sections={this.state.sections}
          renderItem={this.renderItem}
          ItemSeparatorComponent={this.renderSeparator}
          renderSectionHeader={this.renderSectionHeader}
          keyExtractor={(item, index) => `${item.title}-${index}`}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create<InterfaceStyle>({
  row: {
    height: 56,
    justifyContent: "center",
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.dark70,
  },
  sectionContainer: {
    backgroundColor: Colors.violet30,
    paddingVertical: 8,
    paddingLeft: 20,
  },
  sectionText: {
    ...Typography.text70,
    color: Colors.white,
    fontWeight: "bold",
  },
  textInput: {
    textAlign: "left",
    fontSize: 15,
  },
});
