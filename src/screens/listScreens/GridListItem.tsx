import * as React from "react";

import { Colors, View, Card, Constants, Text, SelectableComponent } from "react-native-ui-lib/src";

interface InterfaceProps {}

interface InterfaceState {}

export class ProductItem extends SelectableComponent<InterfaceProps, InterfaceState> {
  renderSelectableIndicator: any;
  onSelect: any;

  constructor(public props) {
    super(props);
  }

  static itemsPerRow = 2;

  private renderSelectableContainer = () => {
    return (
      <View style={{ position: "absolute", top: 15, right: 15 }}>
        {this.renderSelectableIndicator()}
      </View>
    );
  };

  public render() {
    const index = Number(this.props.id);
    const addRightMargin = index % 2 === 0;
    return (
      <Card
        height={210}
        containerStyle={[
          { margin: 15, marginBottom: 0, flex: 1 },
          addRightMargin && { marginRight: 0 },
        ]}
        onPress={this.onSelect}
      >
        <Card.Image
          top
          imageSource={this.props.imageSource}
          height={183}
          style={{ position: "absolute", top: 0, left: 0, right: 0 }}
        />
        <Card.Section
          body
          enableBlur={Constants.isIOS}
          blurOptions={{ blurType: "xlight" }}
          style={{
            position: "absolute",
            paddingVertical: 12,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: Constants.isIOS ? "transparent" : Colors.white,
          }}
        >
          <Card.Section footer style={{ justifyContent: "center" }}>
            <Card.Item column style={{ alignItems: "center" }}>
              <Text text70 dark10 style={[{ fontWeight: "400", marginBottom: 4 }]}>
                {this.props.title}
              </Text>
              <Text text70 dark10 style={[{ marginBottom: 4 }]}>
                {this.props.secondaryTitle}
              </Text>
              <Text text90 dark50>
                {this.props.subtitle}
              </Text>
            </Card.Item>
          </Card.Section>
        </Card.Section>
        {this.renderSelectableContainer()}
      </Card>
    );
  }
}

export const SimpleItem = () => {
  return (
    <View style={{ height: 70, width: 100, backgroundColor: Colors.violet70, margin: 10, marginBottom: 0 }} />
  );
};
SimpleItem.itemsPerRow = 3;
