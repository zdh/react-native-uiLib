import * as React from "react";

import { StyleSheet, FlatList, Alert, ViewStyle } from "react-native";
import { ThemeManager, ListItem, Text, Avatar, AvatarHelper } from "react-native-ui-lib/src";

import { ContactsListStore, InterfaceItem } from "./ContactsListStore";

const ListItemPart = ListItem.Part;

interface InterfaceProps {}

interface InterfaceState {
  data: InterfaceItem[];
  onEdit: boolean;
  updating: boolean;
}

interface InterfaceStyle {
  border?: ViewStyle;
}

export default class ContactsListScreen extends React.Component<InterfaceProps, InterfaceState> {
  constructor(props) {
    super(props);

    const store: ContactsListStore = new ContactsListStore();

    this.state = {
      data: store.conversations,
      onEdit: false,
      updating: false,
    };
  }

  private onItemPressed = (id) => {
    Alert.alert(`pressed on contact # ${id}`);
  };

  private keyExtractor = (item) => item.name;

  private renderRow = (row, id) => {
    const initials = AvatarHelper.getInitials(row.name);
    const animationProps = {
      animation: "basicListEntrance",
      duration: 600,
      delay: 10 + (Number(id) % 12) * 40,
      easing: "ease-out-quint",
    };
    return (
      <ListItem onPress={() => this.onItemPressed(id)} {...animationProps}>
        <ListItemPart left>
          <Avatar
            imageSource={row.thumbnail ? { uri: row.thumbnail } : null}
            label={initials}
            isOnline={Number(id) % 3 === 0}
            containerStyle={{ marginHorizontal: 18 }}
          />
        </ListItemPart>
        <ListItemPart middle containerStyle={styles.border}>
          <Text text70>{row.name}</Text>
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
  border: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: ThemeManager.dividerColor,
  },
});
