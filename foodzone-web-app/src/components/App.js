import { StatusBar } from "expo-status-bar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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

import Front from "./FrontPage";
import RestList from "./RestaurantList";
import RestProf from "./RestaurantProfile";
import NavBar from "./nav/NavBar";
import Landing from "./landing/Landing";

function App() {
  /**
   * <Front /> for first page
   * <RestList /> for restaurant list
   * <RestProf /> for restaurant profile
   */
  return <RestList />;
  /*
  return (
    <SafeAreaView style={styles.container}>
      <div className="App">
        <NavBar />
        <Landing />
      </div>
    </SafeAreaView>
  );
  */
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

export default App;

//UIView
/*
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        //Background image on homepage
        style={styles.logo}
        //source={require('./assets/foodzone_logo.png')}
        resizeMode="contain"
      >
        <Text style={styles.text}>FOODZONE</Text>

        <TouchableOpacity
          //Order Button on homepage
          style={styles.button}
          onPress={onPressHandler}
        >
          <Text style={styles.text}>ORDER</Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
};
//for button press
const onPressHandler = () => {};
const separator = () => {
  <View style={styles.container}></View>;
};
//For design of texts,button, etc.
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

export default App;
*/
