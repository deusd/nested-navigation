import { StackNavigator } from "react-navigation"
import QuizScreen from "../screens/QuizScreen"
import HomeScreen from "../screens/HomeScreen"

export default StackNavigator(
  {
    Quiz: {
      screen: QuizScreen,
    },
  },
  {
    initialRouteName: "Quiz",
    navigationOptions: () => ({
      headerTitleStyle: {
        fontWeight: "normal",
      },
    }),
    headerMode: "none",
  }
)
