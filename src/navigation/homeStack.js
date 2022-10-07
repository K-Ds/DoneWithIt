import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/homeScreen";
import AboutScreen from "../screens/aboutScreen";

const RootStack = createNativeStackNavigator();

const HomeStackScreen = () => (
  <RootStack.Navigator>
    <RootStack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <RootStack.Screen name="About" component={AboutScreen} />
  </RootStack.Navigator>
);

export default HomeStackScreen;
