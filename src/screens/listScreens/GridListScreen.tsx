import * as React from "react";

import GridList from "react-native-ui-lib/src/lists/gridList";

import { ProductItem } from "./GridListItem";

import { GridListStore, InterfaceItem } from "./GridListStore";

const store: GridListStore = new GridListStore();

interface InterfaceProps {}

interface InterfaceState {
  data: InterfaceItem[];
  onEdit: boolean;
  updating: boolean;
}

export default class GridListScreen extends React.Component<InterfaceProps, InterfaceState> {
  static navigationOptions = ({ navigation }) => {
    const { state } = navigation;
    return {
      title: `${state.params.title}`,
    };
  };

  constructor(props) {
    super(props);

    this.state = {
      data: store.products.concat(store.products),
      onEdit: false,
      updating: false,
    };

    this.renderItem = this.renderItem.bind(this);
  }

  protected renderItem = (row, id) => {
    const props = {
      id,
      imageSource: row.mediaUrl ? { uri: row.mediaUrl } : null,
      title: row.name,
      secondaryTitle: row.formattedPrice,
      subtitle: row.inventory.status,
      // onPress: () => alert(`pressed on row id: ${id}`),
      animation: "gridListEntrance",
      duration: 600,
      delay: (Number(id) % 6) * 40,
      easing: "ease-in-expo",
      // duration: _.sample([200, 400, 600, 700]),
      // duration: (Number(id) % 6) * 200,
      // animationDelay: _.sample([100, 200]),
      // disabled: true,
      selectableIndicatorType: "clean",
    };

    // @ts-ignore
    return <ProductItem key={id} {...props} selectable selectableIndicatorSize={36} />;

    // Enable it to see another example, also set the appropriate itemsInRow in GridList
    // return <SimpleItem key={id} />;
  };

  public render() {
    return (
      <GridList
        renderItem={this.renderItem}
        items={store.products.concat(store.products)}
        itemsInRow={ProductItem.itemsPerRow}
      />
    );
  }
}
