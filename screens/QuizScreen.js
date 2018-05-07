import React from "react"
import { View, StyleSheet, Text, Button } from "react-native"
import { ExpoLinksView } from "@expo/samples"

export default class QuizScreen extends React.Component {
  static navigationOptions = { title: "Quiz Page" }

  nextButton(nextContent, maxContent) {
    return (
      <Button
        color="#1189f5"
        title="Click to go to next screen"
        key={"nextButton"}
        onPress={() => {
          this.props.navigation.navigate("Quiz", {
            maxContent,
            currentContent: nextContent,
            onGoBack: this.props.navigation.state.params.onGoBack
          })
        }}
      />
    )
  }

  contentButton(nextContent, maxContent) {
    return (
      <Button
        color="#1189f5"
        key={"contentButton"}
        title="Click to go back to the content screen page 3"
        onPress={() => {
          // set the current screen when we go back
          this.props.navigation.state.params.onGoBack(3)

          // pop the stack navigator
          this.props.navigation.goBack(null)
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
          this.props.navigation.goBack()
        }}
      />
    )
  }

  render() {
    const { goBack, navigate, state = {} } = this.props.navigation
    const { maxContent = 5, currentContent = 1 } = (state.params || {})
    const hasNext = currentContent < maxContent
    const nextContent = currentContent + 1

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Welcome to the Quiz Page {currentContent}!
        </Text>
        <Text style={styles.subtitle}>
          {currentContent} of {maxContent}
        </Text>
        <Button
          color="#841584"
          title="Click to go to previous screen"
          onPress={() => this.props.navigation.pop()}
        />

        {hasNext ? [this.nextButton(nextContent, maxContent), this.contentButton()] : this.doneButton()}
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
