import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeStackScreen from "./homeStack";
import ProductStackScreen from "./productStack";

import ProfileScreen from "../screens/profileScreen";

const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Tab = () => (
  <Tabs.Navigator
    screenOptions={{
      headerTitleStyle: {
        fontWeight: "bold",
      },
      headerStyle: {
        backgroundColor: "red",
      },
    }}
  >
    <Tabs.Screen
      name="Root"
      component={HomeStackScreen}
      options={{ headerShown: false, title: "Home" }}
    />
    <Tabs.Screen
      name="Products"
      component={ProductStackScreen}
      options={{ headerShown: false }}
    />
  </Tabs.Navigator>
);

const RootDrawer = () => (
  <Drawer.Navigator initialRouteName="Root" useLegacyImplementation={true}>
    <Drawer.Screen
      name="Tab"
      component={Tab}
      options={{ title: "DoneWithIt" }}
    />
    <Drawer.Screen name="Profile" component={ProfileScreen} />
  </Drawer.Navigator>
);

export default RootDrawer;
