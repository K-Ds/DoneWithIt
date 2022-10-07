import React from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";

const AboutScreen = ({ Navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.brand}>
        <Image
          style={styles.logo}
          source={require("../../assets/logo-red.png")}
        />
        <Text style={{ color: "red" }}>DoneWithIt</Text>
      </View>
      <Text style={styles.title}>About Us</Text>
      <Text style={styles.text}>
        This is an app that helps you give away items you do not need anymore to
        others who need them either for free or a reasonable price.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  brand: {
    position: "absolute",
    top: 75,
  },
  logo: {
    width: 75,
    height: 75,
  },
  text: {
    color: "black",
    fontSize: "20",
  },
  title: {
    color: "red",
    fontSize: "40",
    marginBottom: 75,
  },
});

export default AboutScreen;
