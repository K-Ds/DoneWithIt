import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { connect, useDispatch } from "react-redux";
import ProductCard from "../components/productCard";

const ProductScreen = ({ navigation, productList }) => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.card}>
        {productList.map((product) => (
          <ProductCard
            key={product.id}
            data={product}
            onPress={() => navigation.push("Detail", product)}
          />
        ))}
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

function mapStateToProps(state) {
  return { productList: state.products };
}

export default connect(mapStateToProps)(ProductScreen);
