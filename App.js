import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./screens/homeScreen";
import AboutScreen from "./screens/aboutScreen";
import ProductDetailScreen from "./screens/productDetailScreen";
import ProductScreen from "./screens/productScreen";
import ProfileScreen from "./screens/profileScreen";

const RootStack = createNativeStackNavigator();
const ProductStack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const HomeDrawer = () => (
  <Drawer.Navigator initialRouteName="Root" useLegacyImplementation={true}>
    <Drawer.Screen
      name="Root"
      component={HomeScreen}
      options={{ title: "Home" }}
    />
    <Drawer.Screen name="Profile" component={ProfileScreen} />
  </Drawer.Navigator>
);

const RootStackScreen = () => (
  <RootStack.Navigator>
    <RootStack.Screen
      name="Home"
      component={HomeDrawer}
      options={{ headerShown: false }}
    />
    <RootStack.Screen name="About" component={AboutScreen} />
  </RootStack.Navigator>
);

const ProductStackScreen = () => (
  <ProductStack.Navigator>
    <ProductStack.Screen
      name="Products"
      component={ProductScreen}
      options={{ headerShown: false }}
    />
    <ProductStack.Screen name="Detail" component={ProductDetailScreen} />
  </ProductStack.Navigator>
);

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
      component={RootStackScreen}
      options={{ headerShown: false, title: "Home" }}
    />
    <Tabs.Screen name="Products" component={ProductStackScreen} />
  </Tabs.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Tab />
    </NavigationContainer>
  );
}
