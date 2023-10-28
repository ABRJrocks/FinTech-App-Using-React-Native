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
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Home")}
          style={styles.button}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>Go back</Text>
        </TouchableOpacity>
      </BarCodeScanner>
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
});
