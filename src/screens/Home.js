import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";

const Home = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text
          style={{
            color: "white",
            fontSize: 26,
            fontWeight: "bold",
            flex: 1,
            textAlign: "center",
            marginLeft: 20,
          }}
        >
          Home
        </Text>
        <TouchableOpacity onPress={() => props.navigation.navigate("Settings")}>
          <Image
            style={{ width: 25, height: 25 }}
            source={require("../../assets/image.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.addButton}>
        <Image
          style={{
            width: 150,
            height: 150,
            zIndex: 0,
          }}
          source={require("../../assets/lb.png")}
        />
        <Image
          style={{ width: 115, height: 115, zIndex: 1, top: -131 }}
          source={require("../../assets/lm.png")}
        />
        <Image
          style={{ width: 60, height: 60, zIndex: 2, top: -220 }}
          source={require("../../assets/lt.png")}
        />
      </View>
      <View style={styles.section3}>
        <TouchableOpacity style={styles.homeBtns}>
          <Text
            style={{
              color: "#5BB1E0",
              marginRight: 10,
              fontSize: 16,
            }}
          >
            Scan
          </Text>
          <Image
            source={require("../../assets/qr.png")}
            style={{ width: 25, height: 25 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.homeBtns}
          onPress={() => props.navigation.navigate("Recent")}
        >
          <Text
            style={{
              color: "#5BB1E0",
              marginRight: 10,
              fontSize: 16,
            }}
          >
            Recent
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.navigationBar}>
        <TouchableOpacity
          style={styles.navBtn}
          onPress={() => console.log("pressed")}
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
          onPress={() => console.log("pressed")}
        >
          <Image
            style={styles.navIcon}
            source={require("../../assets/history.png")}
          />
          <Text style={styles.navText}>History</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
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
    height: "10%",
    marginTop: 30,
    marginBottom: 20,
    textAlign: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  addButton: {
    height: "60%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 150,
  },
  section3: {
    height: "12%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  homeBtns: {
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
  navigationBar: {
    height: "12%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 30,
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

export default Home;
