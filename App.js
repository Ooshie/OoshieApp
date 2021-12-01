import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";

const navigator = createStackNavigator({
  Home : WelcomeScreen,
  SignIn : SignInScreen,
  SignUp : SignUpScreen
  
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "I want to die"
    }
  });

export default createAppContainer(navigator);

