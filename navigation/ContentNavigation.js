import React from 'react'
import { StackNavigator } from "react-navigation"
import ContentScreen from "../screens/ContentScreen"
import HomeScreen from "../screens/HomeScreen"
import QuizNavigation from "../navigation/QuizNavigation"

export default StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Content: {
      screen: ContentScreen,
    },
    Quiz: {
     screen:  ({ navigation, screenProps }) => <QuizNavigation screenProps={{parentNavigation: navigation, ...screenProps}}/>,
    }
  },
  {
    initialRouteName: "Home",
    navigationOptions: () => ({
      headerTitleStyle: {
        fontWeight: "normal",
      },
    }),
    headerMode: "none",
  }
)
