import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ProductDetailScreen = ({ route }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{route.params.name}</Text>
      <Image style={styles.image} source={route.params.image} />
      <Text style={styles.title}>Description</Text>
      <Text style={styles.text}>{route.params.description}</Text>
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
});

export default ProductDetailScreen;
