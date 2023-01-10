import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Button,
  Alert
} from "react-native";

import React from "react";
import { ImageBackground, TouchableOpacity } from "react-native-web";

import NavBar from "./nav/NavBar";
import Landing from "./landing/Landing";

function FrontPage() {
  return (
    <SafeAreaView style={styles.container}>
      <div className="App">
        <NavBar />
        <Landing />
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
  }
});

export default FrontPage;
