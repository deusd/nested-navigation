import React from "react"
import { View, StyleSheet, Text, Button } from "react-native"
import { ExpoLinksView } from "@expo/samples"

export default class ContentScreen extends React.Component {
  static navigationOptions = { title: "Content Page" }
  state = {}

  nextButton(nextContent, maxContent) {
    return (
      <Button
        color="#1189f5"
        key={"nextButton"}
        title="Click to go to next screen"
        onPress={() => {
          this.setState({forceContent: false})
          this.props.navigation.navigate("Content", {
            maxContent,
            currentContent: nextContent,
          })
        }}
      />
    )
  }

  quizButton() {
    return (
      <Button
        color="#1189f5"
        title="Click to go to quiz screen"
        key={"quizButton"}
        onPress={() => {
          this.setState({forceContent: false})
          this.props.navigation.navigate("Quiz", {
            maxContent: 5,
            currentContent: 1,
            onGoBack: this.onGoBack
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

  onGoBack = (currentContent) => {
    this.setState({stateContent: currentContent, forceContent: true})
  }

  render() {
    const { goBack, navigate } = this.props.navigation
    const { stateContent, forceContent } = this.state
    const { maxContent, currentContent } = this.props.navigation.state.params
    let finalContent = currentContent
    
    if(stateContent && forceContent) {
      finalContent = stateContent
    }
    
    const hasNext = finalContent < maxContent
    const nextContent = finalContent + 1

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Welcome to the Content Page {finalContent}!
        </Text>
        <Text style={styles.subtitle}>
          {finalContent} of {maxContent}
        </Text>
        <Button
          color="#841584"
          title="Click to go to previous screen"
          onPress={() => this.props.navigation.pop()}
        />
        {hasNext ? [this.quizButton(), this.nextButton(nextContent, maxContent)] : this.doneButton()}
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
