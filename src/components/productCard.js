import React from "react";
import { View, Text, Image, Pressable, Button, StyleSheet } from "react-native";

const ProductCard = (props) => {
  const params = props.data;
  console.log(props);
  return (
    <Pressable style={styles.productCard} onPress={props.onPress}>
      <Image style={styles.image} source={params.image} />
      <View style={styles.container}>
        <Text style={styles.title}>{params.name}</Text>
        <Text style={styles.text}>{params.description}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  productCard: {
    padding: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "space-between",
    width: "95%",
    backgroundColor: "#709bbe",
    borderRadius: "5px",
    marginBottom: 25,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: "5px",
  },
  title: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  container: {
    marginLeft: 10,
    paddingRight: 10,
    flex: 1,
  },
  text: {
    fontSize: 15,
  },
});

export default ProductCard;
