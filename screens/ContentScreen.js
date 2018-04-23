import React from "react"
import { View, StyleSheet, Text, Button } from "react-native"
import { ExpoLinksView } from "@expo/samples"

export default class LinksScreen extends React.Component {
  static navigationOptions = { title: "Content Page" }

  nextButton(nextContent, maxContent) {
    return (
      <Button
        color="#1189f5"
        title="Click to go to next screen"
        onPress={() => {
          this.props.navigation.navigate("Content", {
            maxContent,
            currentContent: nextContent,
          })
        }}
      />
    )
  }

  doneButton() {
    return (
      <Button
        color="#1189f5"
        title="You made it to the end!!!"
        onPress={() => {
          this.props.navigation.popToTop()
        }}
      />
    )
  }

  render() {
    const { goBack, navigate } = this.props.navigation
    const { maxContent, currentContent } = this.props.navigation.state.params
    console.log({ maxContent, currentContent })
    const hasNext = currentContent < maxContent
    const nextContent = currentContent + 1

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Welcome to the Content Page {currentContent}!
        </Text>
        <Text style={styles.subtitle}>
          {currentContent} of {maxContent}
        </Text>
        <Button
          color="#841584"
          title="Click to go to previous screen"
          onPress={() => this.props.navigation.pop()}
        />

        {hasNext ? this.nextButton(nextContent, maxContent) : this.doneButton()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    opacity: 0.75,
  },
})
