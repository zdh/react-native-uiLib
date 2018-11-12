import * as _ from "lodash";
import * as React from "react";

import { StyleSheet, FlatList, Alert, ViewStyle, ImageStyle } from "react-native";
import { Colors, ThemeManager, ListItem, Text, BorderRadiuses } from "react-native-ui-lib/src";

import * as Animatable from "react-native-animatable";

const ListItemPart = ListItem.Part;

import { BasicListStore, InterfaceItem } from "./BasicListStore";

interface InterfaceProps {}

interface InterfaceState {
  data: InterfaceItem[];
  onEdit: boolean;
  updating: boolean;
}

interface InterfaceStyle {
  image: ImageStyle;
  border?: ViewStyle;
}

export default class BasicListScreen extends React.Component<InterfaceProps, InterfaceState> {
  static navigationOptions = ({ navigation }) => {
    const { state } = navigation;
    return {
      title: `${state.params.title}`,
    };
  };

  constructor(props) {
    super(props);

    const store: BasicListStore = new BasicListStore();

    this.state = {
      data: store.orders,
      onEdit: false,
      updating: false,
    };
  }

  private keyExtractor = (item) => item.name;

  private onItemPressed = (id) => {
    Alert.alert(`pressed on contact # ${id}`);
  };

  private renderRow = (row, id) => {
    const statusColor = row.inventory.status === "Paid" ? Colors.green30 : Colors.red30;
    return (
      <ListItem
        activeBackgroundColor={Colors.dark60}
        activeOpacity={0.3}
        height={77.5}
        onPress={() => this.onItemPressed(id)}
        animation="fadeIn"
        easing="ease-out-expo"
        duration={1000}
        useNativeDriver
      >
        <ListItemPart left>
          <Animatable.Image
            source={{ uri: row.mediaUrl }}
            style={styles.image}
            animation="fadeInLeft"
            easing="ease-out-expo"
            duration={600}
            delay={_.sample([20, 120, 220])}
            useNativeDriver
          />
        </ListItemPart>
        <ListItemPart middle column containerStyle={[styles.border, { paddingRight: 17 }]}>
          <ListItemPart containerStyle={{ marginBottom: 3 }}>
            <Text dark10 text70 style={{ flex: 1, marginRight: 10 }} numberOfLines={1}>
              {row.name}
            </Text>
            <Text dark10 text70 style={{ marginTop: 2 }}>
              {row.formattedPrice}
            </Text>
          </ListItemPart>
          <ListItemPart>
            <Text style={{ flex: 1, marginRight: 10 }} text90 dark40 numberOfLines={1}>{`${
              row.inventory.quantity
            } item`}</Text>
            <Text text90 color={statusColor} numberOfLines={1}>
              {row.inventory.status}
            </Text>
          </ListItemPart>
        </ListItemPart>
      </ListItem>
    );
  };

  public render() {
    return (
      <FlatList
        data={this.state.data}
        renderItem={({ item, index }) => this.renderRow(item, index)}
        keyExtractor={this.keyExtractor}
      />
    );
  }
}

const styles = StyleSheet.create<InterfaceStyle>({
  image: {
    width: 54,
    height: 54,
    borderRadius: BorderRadiuses.br20,
    marginHorizontal: 14,
  },
  border: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: ThemeManager.dividerColor,
  },
});
