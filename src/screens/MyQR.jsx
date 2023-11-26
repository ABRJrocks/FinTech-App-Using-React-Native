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

const MyQR = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
          <Image
            style={{ width: 22, height: 22 }}
            source={require("../../assets/x.png")}
          />
        </TouchableOpacity>
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
            source={require("../../assets/help.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.qrSection}>
        <Image source={require("../../assets/qr2.png")} style={styles.qr} />
        <Text
          style={{
            color: "white",
            fontSize: 16,
            marginTop: 20,
            textAlign: "center",
            marginLeft: 20,
            marginRight: 20,
            padding: 10,
            width: "80%",
          }}
        >
          Let someone scan your code to start a payment
        </Text>
      </View>
      <View style={styles.section3}>
        <TouchableOpacity
          style={styles.homeBtns}
          onPress={() => props.navigation.navigate("Scan")}
        >
          <Text
            style={{
              color: "white",
              marginRight: 10,
              fontSize: 16,
            }}
          >
            Scan
          </Text>
          <Image
            source={require("../../assets/scan.png")}
            style={{ width: 22, height: 22, resizeMode: "contain" }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.homeBtns}
          onPress={() => props.navigation.navigate("MyQR")}
        >
          <Text
            style={{
              color: "white",
              marginRight: 10,
              fontSize: 16,
            }}
          >
            My QR
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Image
          source={require("../../assets/share.png")}
          style={styles.shareIcon}
        />
      </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5BB1E0",
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
  section3: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    position: "absolute",
    bottom: 50,
    left: 0,
    right: 0,
  },
  homeBtns: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#00A9EC",
    width: 160,
    height: 55,
    textAlign: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginHorizontal: 10,
  },
  qr: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  qrSection: {
    height: "60%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  shareIcon: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    position: "absolute",
    bottom: 10,
    left: 20,
    top: 0,
  },
});

export default MyQR;
