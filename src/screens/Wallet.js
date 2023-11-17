import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Wallet = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
          <Image
            style={{ width: 22, height: 22 }}
            source={require("../../assets/x.png")}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Balance</Text>
        <Image
          style={{ width: 22, height: 22 }}
          source={require("../../assets/help.png")}
        />
      </View>

      {/* Balance */}
      <View style={styles.balance}>
        <Text style={styles.Currency}>$</Text>
        <Text style={styles.Amt}>57</Text>
        <Text style={styles.subAmt}>70</Text>
      </View>

      {/* Holder Name */}

      <View style={styles.HolderName}>
        <Text style={styles.FirstName}>Alice</Text>
        <Text style={styles.LastName}> Didrikson</Text>
      </View>

      {/* Card */}
      <Image style={styles.card} source={require("../../assets/card.png")} />

      {/* Bottom Menu */}
      <View style={styles.navigationBar}>
        <TouchableOpacity
          style={styles.navBtn}
          onPress={() => props.navigation.navigate("Wallet")}
        >
          <Image
            style={styles.navIcon}
            source={require("../../assets/wallet.png")}
          />
          <Text style={styles.navText}>Wallet</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navBtn}
          onPress={() => console.log("pressed")}
        >
          <Image
            style={styles.navIcon}
            source={require("../../assets/contact.png")}
          />
          <Text style={styles.navText}>Contacts</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navBtn}
          onPress={() => props.navigation.navigate("History")}
        >
          <Image
            style={styles.navIcon}
            source={require("../../assets/history.png")}
          />
          <Text style={styles.navText}>History</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B1B1B",
    marginTop: StatusBar.currentHeight,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 25,
    marginBottom: 20,
  },
  headerTitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  balance: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 50,
  },
  Currency: {
    color: "white",
    fontSize: 40,
    textAlignVertical: "top",
    marginTop: 24,
    marginRight: 5,
    fontWeight: "bold",
  },
  Amt: {
    color: "white",
    fontSize: 90,
  },
  subAmt: {
    color: "white",
    fontSize: 38,
    marginTop: 18,
    marginLeft: 5,
    fontWeight: "bold",
  },
  HolderName: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 130,
  },
  FirstName: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  LastName: {
    color: "white",
    fontSize: 20,
    fontWeight: "300",
  },
  card: {
    width: 360,
    height: 212,
    alignSelf: "center",
    marginTop: 20,
    borderRadius: 30,
  },
  navigationBar: {
    height: "12%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  navText: {
    color: "#919191",
    fontSize: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  navIcon: {
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 3,
  },
  navBtn: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Wallet;
