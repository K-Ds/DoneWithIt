import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ProfileScreen = () => (
  <View style={styles.profile}>
    <View style={styles.profilePicture}></View>
    <Text style={styles.profileText}>Profile</Text>
  </View>
);

const styles = StyleSheet.create({
  profile: {
    width: "75%",
    backgroundColor: "lightgray",
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: "50",
  },
});

export default ProfileScreen;
