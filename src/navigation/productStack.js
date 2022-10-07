import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetailScreen from "../screens/productDetailScreen";
import ProductScreen from "../screens/productScreen";

const ProductStack = createNativeStackNavigator();

const ProductStackScreen = () => (
  <ProductStack.Navigator>
    <ProductStack.Screen
      name="List"
      component={ProductScreen}
      options={{ title: "Products" }}
    />
    <ProductStack.Screen name="Detail" component={ProductDetailScreen} />
  </ProductStack.Navigator>
);

export default ProductStackScreen;
