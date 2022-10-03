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

const HomeStack = createNativeStackNavigator();
const ProductStack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={HomeScreen} />
    <HomeStack.Screen name="About" component={AboutScreen} />
  </HomeStack.Navigator>
);

const ProductStackScreen = () => (
  <ProductStack.Navigator>
    <ProductStack.Screen name="Products" component={ProductScreen} />
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
      name="Home"
      component={HomeStackScreen}
      options={{ headerShown: false }}
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
