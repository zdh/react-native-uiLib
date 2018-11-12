import * as React from "react";

import { StyleSheet, FlatList, Alert, ViewStyle } from "react-native";
import {
  Avatar,
  AvatarHelper,
  Badge,
  Colors,
  ListItem,
  Text,
  ThemeManager,
} from "react-native-ui-lib/src";

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

export default class ConversationListScreen extends React.Component<
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
      duration: 400,
      delay: 10 + (Number(id) % 12) * 40,
      easing: "ease-out-quart",
    };

    return (
      <ListItem height={75.8} onPress={() => this.onItemPressed(id)} {...animationProps}>
        <ListItemPart left>
          <Avatar
            size={54}
            imageSource={row.thumbnail ? { uri: row.thumbnail } : null}
            label={initials}
            isOnline={Number(id) < 3}
            containerStyle={{ marginHorizontal: 18 }}
          />
        </ListItemPart>
        <ListItemPart middle column containerStyle={[styles.border, { paddingRight: 17 }]}>
          <ListItemPart containerStyle={{ marginBottom: 3 }}>
            <Text
              style={{ flex: 1, marginRight: 10 }}
              text70
              color={Colors.dark10}
              numberOfLines={1}
            >
              {row.name}
            </Text>
            <Text style={{ marginTop: 2 }} text90 color={Colors.dark50}>
              {row.timestamp}
            </Text>
          </ListItemPart>
          <ListItemPart>
            <Text
              style={{ flex: 1, marginRight: 10 }}
              text80
              color={Colors.dark40}
              numberOfLines={1}
            >
              {row.text}
            </Text>
            {row.count > 0 && <Badge label={row.count} animation="fadeIn" duration={400} />}
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
  border: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: ThemeManager.dividerColor,
  },
});
