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

const RecentScreen = (props) => {
  const [searchText, setSearchText] = useState("");
  const [recentItems, setRecentItems] = useState([
    {
      id: "1",
      payment: "-200$",
      name: "John Doe",
      icon: require("../../assets/contact.png"),
    },
    {
      id: "2",
      payment: "-200$",
      name: "Jane Smith",
      icon: require("../../assets/contact.png"),
    },
    {
      id: "3",
      payment: "-200$",
      name: "Bob Johnson",
      icon: require("../../assets/contact.png"),
    },
    {
      id: "4",
      payment: "-200$",
      name: "Alice Williams",
      icon: require("../../assets/contact.png"),
    },
    {
      id: "5",
      payment: "-200$",
      name: "David Brown",
      icon: require("../../assets/contact.png"),
    },
    {
      id: "6",
      payment: "-200$",
      name: "Sarah Davis",
      icon: require("../../assets/contact.png"),
    },
    {
      id: "7",
      payment: "-200$",
      name: "Michael Lee",
      icon: require("../../assets/contact.png"),
    },
    {
      id: "8",
      name: "Emily Wilson",
      payment: "-200$",
      icon: require("../../assets/contact.png"),
    },
    {
      id: "9",
      payment: "-200$",
      name: "Robert Chen",
      icon: require("../../assets/contact.png"),
    },
    {
      id: "10",
      payment: "-200$",
      name: "Olivia Davis",
      icon: require("../../assets/contact.png"),
    },
    {
      id: "11",
      payment: "-200$",
      name: "William Brown",
      icon: require("../../assets/contact.png"),
    },
    {
      id: "12",
      payment: "-200$",
      name: "Sophia Wilson",
      icon: require("../../assets/contact.png"),
    },
    {
      id: "13",
      payment: "-200$",
      name: "James Johnson",
      icon: require("../../assets/contact.png"),
    },
    {
      id: "14",
      payment: "-200$",
      name: "Emma Williams",
      icon: require("../../assets/contact.png"),
    },
    {
      id: "15",
      payment: "-200$",
      name: "Daniel Lee",
      icon: require("../../assets/contact.png"),
    },
  ]);

  const filteredRecentItems = recentItems.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
          <Image
            style={{ width: 22, height: 22 }}
            source={require("../../assets/x.png")}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>History</Text>
        <Image
          style={{ width: 22, height: 22 }}
          source={require("../../assets/help.png")}
        />
      </View>

      {/*Tab Menu  */}

      <View style={styles.tabMenu}>
        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => props.navigation.navigate("Home")}
        >
          <Text style={styles.tabButtonText}>Recent</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => props.navigation.navigate("History")}
        >
          <Text style={styles.tabButtonText}>Sent</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => props.navigation.navigate("Settings")}
        >
          <Text style={styles.tabButtonText}>Received</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => props.navigation.navigate("Settings")}
        >
          <Text style={styles.tabButtonText}>All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={searchText ? filteredRecentItems : recentItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.recentItem}>
            <Image
              source={item.icon}
              style={{ width: 30, height: 30, marginRight: 15 }}
            />
            <Text
              style={{
                color: "white",
                fontSize: 20,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                flex: 1,
              }}
            >
              {item.name}
            </Text>
            <Text style={{ color: "white", fontSize: 20 }}>{item.payment}</Text>
          </View>
        )}
      />
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
  searchBar: {
    borderBottomWidth: 1,
    fontSize: 30,
    borderBottomColor: "#3B3D38",
    borderRadius: 5,
    padding: 10,
    marginBottom: 30,
    paddingHorizontal: 20,
    color: "#999999",
  },
  recentItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#3B3D38",
    marginBottom: 10,
    paddingHorizontal: 20,
    borderColor: "#999999",
  },
  tabMenu: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
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
});

export default RecentScreen;
