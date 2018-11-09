import * as React from "react";

import { StyleSheet, ViewStyle } from "react-native";
import { Colors, View, Card, Button, Text, AnimatedScanner } from "react-native-ui-lib/src";

import { CardScannerStore } from "./CardScannerStore";

const CardImage = Card.Image;

const CardSection = Card.Section;

const CardItem = Card.Item;

interface InterfaceProps {}

interface InterfaceState {
  progress: number;
  started: boolean;
  reset: boolean;
  isDone: boolean;
}

interface InterfaceStyle {
  container?: ViewStyle;
}

export default class CardScannerScreen extends React.Component<InterfaceProps, InterfaceState> {
  store: CardScannerStore = new CardScannerStore();

  constructor(props) {
    super(props);

    this.state = {
      progress: 0,
      started: false,
      reset: false,
      isDone: false,
    };
  }

  private onBreak = ({ isDone }) => {
    if (!isDone) {
      this.start();
    } else {
      this.setState({
        isDone,
      });
    }
  };

  private start = () => {
    const { progress } = this.state;
    this.setState({
      started: true,
      reset: false,
      progress: progress + 25,
    });
  };

  private reset = () => {
    this.setState({
      started: false,
      progress: 0,
      reset: true,
      isDone: false,
    });
  };

  public render() {
    const { reset } = this.state;
    const post = this.store.posts[0];
    const statusColor = post.status === "Published" ? Colors.green30 : Colors.orange30;
    return (
      <View style={styles.container} useSafeArea>
        <View flex>
          <View paddingL-40 height={6} width={"100%"} bg-violet50 marginB-20>
            <AnimatedScanner backgroundColor={Colors.purple30} progress={98} duration={1600} />
          </View>

          <Card
            containerStyle={{ marginBottom: 15 }}
            onPress={() => console.log("press on a card")}
          >
            <CardImage height={115} imageSource={post.coverImage} />
            <CardSection body>
              <CardSection>
                <Text text40 color={Colors.dark10}>
                  {post.title}
                </Text>
              </CardSection>
              <CardSection>
                <CardItem>
                  <Text text90 color={statusColor}>
                    {post.status}
                  </Text>
                  <Text text90> | {post.timestamp}</Text>
                </CardItem>
              </CardSection>
              <CardSection>
                <Text text70 color={Colors.dark10}>
                  {post.description}
                </Text>
              </CardSection>
              <CardSection footer>
                <Text text90 color={Colors.dark50}>
                  {post.likes} Likes
                </Text>
                <CardItem>
                  <Button
                    style={{ marginRight: 10 }}
                    text90
                    link
                    iconSource={this.store.featureIcon}
                    label="Feature"
                  />
                  <Button text90 link iconSource={this.store.shareIcon} label="Share" />
                </CardItem>
              </CardSection>
            </CardSection>
            <AnimatedScanner
              opacity={0.7}
              progress={this.state.progress}
              duration={reset ? 0 : 1500}
              onBreakpoint={this.onBreak}
            />
          </Card>

          {this.state.started &&
            !this.state.isDone && (
              <Text text70 dark10 style={{ alignSelf: "center", marginTop: 20 }}>
                Publishing Post...
              </Text>
            )}

          {this.state.isDone && (
            <Text text70 dark10 style={{ alignSelf: "center", marginTop: 20 }}>
              Done!
            </Text>
          )}
        </View>

        <View row center>
          <Button size="medium" label="Reset" onPress={this.reset} disabled={!this.state.isDone} />
          <Button
            marginL-10
            size="medium"
            label="Publish"
            onPress={this.start}
            disabled={this.state.started}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create<InterfaceStyle>({
  container: {
    padding: 15,
    backgroundColor: Colors.dark80,
    flex: 1,
  },
});
