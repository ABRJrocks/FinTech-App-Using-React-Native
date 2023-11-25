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

const TopUp = (props) => {
  const [selectedAmount, setSelectedAmount] = useState("10 $");
  const handleAmountSelection = (amount) => {
    setSelectedAmount(amount);
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
        <Image
          style={{ width: 22, height: 22 }}
          source={require("../../assets/help.png")}
        />
      </View>
      <View>
        <Text style={styles.headerTitle}>Auto top-up</Text>
        <Text style={styles.subTitle}>
          Your account will be top-up through your bank card.
        </Text>
      </View>
      <View>
        <Text style={styles.ammountText}>
          When the balance is below{" "}
          <Text style={{ fontWeight: "bold" }}>{selectedAmount}</Text>
        </Text>
        <View style={styles.optionsContainer}>
          <TouchableOpacity
            style={[
              styles.option,
              selectedAmount === "10 $" && styles.selectedOption,
            ]}
            onPress={() => handleAmountSelection("10 $")}
          >
            <Text style={styles.optionText}>10 $</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.option,
              selectedAmount === "20 $" && styles.selectedOption,
            ]}
            onPress={() => handleAmountSelection("20 $")}
          >
            <Text style={styles.optionText}>20 $</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.option,
              selectedAmount === "50 $" && styles.selectedOption,
            ]}
            onPress={() => handleAmountSelection("50 $")}
          >
            <Text style={styles.optionText}>50 $</Text>
          </TouchableOpacity>
        </View>
        {/* Select Bank */}
        <View style={styles.bankContainer}>
          <Text
            style={{
              color: "white",
              marginLeft: 20,
              marginTop: 20,
              fontSize: 20,
            }}
          >
            Using:
          </Text>
          <TouchableOpacity>
            <View style={styles.bankChoice}>
              <Image
                style={{ width: 26, height: 26 }}
                source={require("../../assets/bank.png")}
              />
              <Text style={styles.bankName}>Danske Bank</Text>
              <Image
                style={{
                  width: 20,
                  height: 20,
                  position: "absolute",
                  right: 0,
                  top: 10,
                  resizeMode: "contain",
                }}
                source={require("../../assets/arrow.png")}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.feeContainer}>
            <Image
              style={{ width: 22, height: 22 }}
              source={require("../../assets/info.png")}
            />
            <Text style={styles.feeText}>Fee: 0.10 $</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Confirm</Text>
      </TouchableOpacity>
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
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 20,
  },
  subTitle: {
    color: "#A3A3A3",
    fontSize: 16,
    marginLeft: 20,
    marginTop: 20,
    paddingRight: 20,
    width: 320,
  },
  ammountText: {
    color: "white",
    fontSize: 20,
    marginLeft: 20,
    marginTop: 50,
    paddingRight: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#A3A3A3",
    marginRight: 20,
    paddingBottom: 5,
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 60,
  },
  option: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomColor: "white",
    borderBottomWidth: 1,
  },
  optionText: {
    color: "white",
    fontSize: 20,
  },
  selectedOption: {
    borderBottomColor: "#5BB1E0",
    borderBottomWidth: 2,
  },
  bankContainer: {
    marginTop: 60,
  },
  bankChoice: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    borderBottomColor: "#A3A3A3",
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  bankName: {
    color: "white",
    fontSize: 24,
    marginLeft: 25,
  },
  feeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
  },
  feeText: {
    color: "white",
    fontSize: 12,
    marginLeft: 10,
  },
  button: {
    backgroundColor: "#5BB1E0",
    borderRadius: 10,
    position: "absolute",
    bottom: 40,
    left: 20,
    right: 20,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});

export default TopUp;
