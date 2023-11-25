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
  const [searchText, setSearchText] = useState("");
  const [recentItems, setRecentItems] = useState([
    { id: "1", name: "John Doe", icon: require("../../assets/contact.png") },
    { id: "2", name: "Jane Smith", icon: require("../../assets/contact.png") },
    { id: "3", name: "Bob Johnson", icon: require("../../assets/contact.png") },
    {
      id: "4",
      name: "Alice Williams",
      icon: require("../../assets/contact.png"),
    },
    { id: "5", name: "David Brown", icon: require("../../assets/contact.png") },
    { id: "6", name: "Sarah Davis", icon: require("../../assets/contact.png") },
    { id: "7", name: "Michael Lee", icon: require("../../assets/contact.png") },
    {
      id: "8",
      name: "Emily Wilson",
      icon: require("../../assets/contact.png"),
    },
    { id: "9", name: "Robert Chen", icon: require("../../assets/contact.png") },
    {
      id: "10",
      name: "Olivia Davis",
      icon: require("../../assets/contact.png"),
    },
    {
      id: "11",
      name: "William Brown",
      icon: require("../../assets/contact.png"),
    },
    {
      id: "12",
      name: "Sophia Wilson",
      icon: require("../../assets/contact.png"),
    },
    {
      id: "13",
      name: "James Johnson",
      icon: require("../../assets/contact.png"),
    },
    {
      id: "14",
      name: "Emma Williams",
      icon: require("../../assets/image.png"),
    },
    { id: "15", name: "Daniel Lee", icon: require("../../assets/image.png") },
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
        <Text style={styles.headerTitle}>Recent</Text>
        <Image
          style={{ width: 22, height: 22 }}
          source={require("../../assets/help.png")}
        />
      </View>
      <TextInput
        placeholderTextColor="white"
        style={styles.searchBar}
        placeholder="Search..."
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
      <FlatList
        data={searchText ? filteredRecentItems : recentItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.recentItem}>
            <Image
              source={item.icon}
              style={{ width: 30, height: 30, marginRight: 15 }}
            />
            <Text style={{ color: "white", fontSize: 16 }}>{item.name}</Text>
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
});

export default TopUp;
