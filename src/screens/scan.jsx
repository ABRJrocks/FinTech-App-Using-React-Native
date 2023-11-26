import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { BarCodeScanner } from "expo-barcode-scanner";

const Scan = (props) => {
  const [hasPermission, setHasPermission] = React.useState(false);
  const [scanned, setScanned] = React.useState(false);
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text>No access to camera</Text>
      </View>
    );
  }

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    console.log(`Scanned: ${data}`);
    alert(`Scanned: ${data}`);
    props.navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
          <Image
            style={{ width: 22, height: 22 }}
            source={require("../../assets/x.png")}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Scan</Text>
        <Image
          style={{ width: 22, height: 22 }}
          source={require("../../assets/help.png")}
        />
      </View>

      <View style={styles.scanScreen}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        >
          {scanned && (
            <Button
              title={"Tap to Scan Again"}
              onPress={() => setScanned(false)}
            />
          )}
          {/* <TouchableOpacity
            onPress={() => props.navigation.navigate("Home")}
            style={styles.button}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>Go back</Text>
          </TouchableOpacity> */}
        </BarCodeScanner>
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
    </SafeAreaView>
  );
};

export default Scan;

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
  headerTitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  button: {
    marginTop: 500,
    backgroundColor: "#24292C",
    borderRadius: 10,
    width: 160,
    height: 55,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 115,
  },
  scanScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "50%",
    width: "100%",
    marginTop: 20,
    marginBottom: 20,
    borderColor: "#D9D9D9",
    color: "#999999",
    position: "absolute",
    top: 100,
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
    backgroundColor: "#5BB1E0",
    width: 160,
    height: 55,
    textAlign: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginHorizontal: 10,
  },
});

//   content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}"],
