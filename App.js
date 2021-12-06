import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import HomeScreen from "./src/screens/HomeScreen";
import TheDeck from "./src/screens/TheDeck";
import TheCove from "./src/screens/TheCove";
import ChickfilA from "./src/screens/ChickfilA";
import Item from "./src/screens/Item";
import ItemReuslts from "./src/screens/ItemResults";

const navigator = createStackNavigator({
  Home : HomeScreen,
  SignIn : SignInScreen,
  SignUp : SignUpScreen,
  Deck: TheDeck,
  Cove: TheCove,
  Chick: ChickfilA,
  Item: Item,
  ItemReuslts: ItemReuslts,
  
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Ooshie"
    }
  });

export default createAppContainer(navigator);

