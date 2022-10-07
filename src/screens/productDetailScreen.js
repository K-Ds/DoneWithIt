import React from "react";
import { View, Image, Text, Pressable, StyleSheet } from "react-native";
import { deleteProduct } from "../redux/actions/productsAction";
import { useDispatch } from "react-redux";
const handleDelete = ({ id, navigation, dispatch }) => {
  dispatch(deleteProduct(id));
  navigation.goBack();
};

const ProductDetailScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{route.params.name}</Text>
      <Image style={styles.image} source={route.params.image} />
      <Text style={styles.title}>Description</Text>
      <Text style={styles.text}>{route.params.description}</Text>
      <Pressable
        style={styles.button}
        onPress={() =>
          handleDelete({ id: route.params.id, navigation, dispatch: dispatch })
        }
      >
        <Text style={styles.btn_text}>Delete</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  image: {
    height: 300,
    width: "75%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  button: {
    backgroundColor: "red",
    padding: 20,
    borderRadius: 10,
  },
  btn_text: {
    color: "white",
  },
});

export default ProductDetailScreen;
