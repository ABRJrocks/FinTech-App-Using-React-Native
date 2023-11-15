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
  Button,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { color } from "react-native-elements/dist/helpers";

const Add = (props) => {
  const handleSendPayment = () => {
    Alert.alert("Payment Sent", "Payment sent successfully", [
      {
        text: "OK",
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
          <Image
            style={{ width: 22, height: 22, marginRight: 90 }}
            source={require("../../assets/x.png")}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Scan</Text>
        <TouchableOpacity>
          <Image
            style={{ width: 22, height: 22 }}
            source={require("../../assets/add_img_2.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{ width: 22, height: 22 }}
            source={require("../../assets/help.png")}
          />
        </TouchableOpacity>
      </View>
      <View>
        <Image source={require("../../assets/qr.png")} style={styles.qr} />
      </View>

      {/*Tab Menu  */}

      <View style={styles.tabMenu}>
        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => props.navigation.navigate("Home")}
        >
          <Text style={styles.tabButtonText}>Send</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => props.navigation.navigate("History")}
        >
          <Text style={styles.tabButtonText}>Bank</Text>
        </TouchableOpacity>
      </View>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <View style={styles.amtInput}>
          <TextInput
            style={styles.input}
            placeholderTextColor={"#A3A3A3"}
            placeholder="Recipient"
          />
          <TouchableOpacity>
            <Image
              source={require("../../assets/addBtn.png")}
              style={{ width: 20, height: 20 }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.names}>
          <TouchableOpacity style={styles.nameBorder}>
            <Text
              style={{
                color: "#5BB1E0",
                fontSize: 14,
              }}
            >
              Katty Louise
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nameBorder}>
            <Text
              style={{
                color: "#5BB1E0",
                fontSize: 14,
              }}
            >
              Sofia Gomez
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nameBorder}>
            <Text
              style={{
                color: "#5BB1E0",
                fontSize: 14,
              }}
            >
              Katherine Acker
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.amtInput}>
          <TextInput
            style={styles.input}
            placeholderTextColor={"#A3A3A3"}
            placeholder="Amount"
          />
          <TouchableOpacity>
            <Text style={{ color: "#5BB1E0", fontSize: 15 }}>EUR</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.amtInput}>
          <TextInput
            style={styles.input}
            placeholderTextColor={"#A3A3A3"}
            placeholder="Message"
          />
        </View>
      </View>

      <TouchableOpacity style={styles.cardSection}>
        <Image
          source={require("../../assets/mail.png")}
          style={{ width: 20, height: 20, marginRight: 15 }}
        />
        <Text
          style={{
            color: "#5BB1E0",
            fontSize: 16,
          }}
        >
          Include a card
        </Text>
      </TouchableOpacity>

      {/* Bottom Buttons */}

      <View style={styles.section3}>
        <TouchableOpacity style={styles.Btns}>
          <Text
            style={{
              color: "#5BB1E0",

              fontSize: 18,
            }}
          >
            Request
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Btns}
          onPress={() => handleSendPayment()}
        >
          <Text
            style={{
              color: "white",
              fontSize: 18,
            }}
          >
            Send
          </Text>
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
    paddingHorizontal: 10,
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
    marginRight: 40,
    fontWeight: "bold",
  },
  tabMenu: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 60,
    marginBottom: 20,
    marginTop: 20,
    borderBottomWidth: 1,
    borderBlockColor: "#D9D9D9",
    paddingBottom: 10,
  },
  tabButton: {
    width: 70,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  tabButtonText: {
    color: "white",
    fontSize: 16,
  },
  qr: {
    width: 24,
    height: 24,
    alignSelf: "center",
  },
  input: {
    marginBottom: 10,
    fontSize: 26,
    borderRadius: 5,
    marginTop: 20,
    color: "white",
  },
  inputContainer: {
    marginTop: 10,
  },
  section3: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    marginBottom: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  Btns: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#24292C",
    width: 160,
    height: 55,
    textAlign: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginHorizontal: 10,
  },
  amtInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "#3B3D38",
    borderBottomWidth: 1,
    marginHorizontal: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  names: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  nameBorder: {
    borderWidth: 1,
    padding: 8,
    borderColor: "#5BB1E0",
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  cardSection: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 20,
  },
});

export default Add;
