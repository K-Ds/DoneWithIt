import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import ProductCard from "../components/productCard";
import data from "../data.js";

const ProductScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.card}>
        <ProductCard
          data={data[0]}
          onPress={() => navigation.push("Detail", data[0])}
        />
        <ProductCard
          data={data[1]}
          onPress={() => navigation.push("Detail", data[1])}
        />
        <ProductCard
          data={data[2]}
          onPress={() => navigation.push("Detail", data[2])}
        />
        <ProductCard
          data={data[3]}
          onPress={() => navigation.push("Detail", data[3])}
        />
        <ProductCard
          data={data[4]}
          onPress={() => navigation.push("Detail", data[4])}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  scrollView: {
    flex: 1,
    width: "100%",
  },
  card: {
    alignItems: "center",
  },
});

export default ProductScreen;
