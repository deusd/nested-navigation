import { StackNavigator } from "react-navigation"
import ContentScreen from "../screens/ContentScreen"
import HomeScreen from "../screens/HomeScreen"

export default StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Content: {
      screen: ContentScreen,
    },
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
