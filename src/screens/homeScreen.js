import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  ImageBackground,
  StyleSheet,
} from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.container}
      source={require("../../assets/background.jpg")}
    >
      <View style={styles.brand}>
        <Image
          style={styles.logo}
          source={require("../../assets/logo-red.png")}
        />
        <Text style={{ color: "red" }}>DoneWithIt</Text>
      </View>
      <Text style={styles.text}>
        Welcome to <Text style={styles.brand_text}>DoneWithIt</Text>
      </Text>
      <Button
        style={styles.button}
        title="About Us"
        onPress={() => navigation.push("About")}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  brand: {
    position: "absolute",
    top: 75,
    alignItems: "center",
    marginBottom: 75,
  },
  logo: {
    width: 75,
    height: 75,
  },
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: "50",
    marginBottom: 50,
    textAlign: "center",
  },
  brand_text: {
    color: "red",
    fontSize: "30",
  },
  button: {
    padding: 10,
  },
});

export default HomeScreen;
