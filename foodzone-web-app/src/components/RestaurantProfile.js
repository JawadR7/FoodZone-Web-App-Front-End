import React, { Component } from "react";
import UserProfile from "react-user-profile";
import NavBar from "./nav/NavBar";
import Profile from "./profile/Profile";

import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Button,
  Alert
} from "react-native";

function RestaurantProfile() {
  return (
    <SafeAreaView style={styles.container}>
      <div className="App">
        <NavBar />
        <Profile />
      </div>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    color: "green",
    fontSize: 25,
    //lineHeight: 74,
    fontStyle: "italic",
    fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: -558
  },
  logo: {
    flex: 1,
    justifyContent: "center"
  },
  button: {
    backgroundColor: "yellow",
    width: 100,
    height: 50,
    alignItems: "center"
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  title: {
    textAlign: "center",
    marginVertical: 8
  },
  map: {
    width: 100
  }
});

export default RestaurantProfile;
