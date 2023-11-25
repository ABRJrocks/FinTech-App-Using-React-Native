import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Touchable,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Settings = (props) => {
  const navigation = useNavigation();
  const menuItems = [
    { label: "Auto Topup", icon: require("../../assets/topup.png") },
    {
      label: "Friendly Reminder",
      icon: require("../../assets/friendlyreminder.png"),
    },
    { label: "Favorite", icon: require("../../assets/star.png") },
    {
      label: "Push Notifications",
      icon: require("../../assets/notification.png"),
    },
    { label: "News", icon: require("../../assets/news.png") },
    { label: "In-app Sounds", icon: require("../../assets/sound.png") },
    { label: "Language", icon: require("../../assets/lang.png") },
    { label: "Info", icon: require("../../assets/info.png") },
    { label: "Log Out", icon: require("../../assets/logout.png") },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
          <Image
            onPress={() => props.navigation.navigate("Settings")}
            style={{ width: 22, height: 22 }}
            source={require("../../assets/x.png")}
          />
        </TouchableOpacity>
        <Image
          style={{ width: 22, height: 22 }}
          source={require("../../assets/info.png")}
        />
      </View>
      <Text
        style={{
          color: "white",
          fontSize: 30,
          fontWeight: "bold",
          marginLeft: 20,
          marginTop: 50,
        }}
      >
        Settings
      </Text>
      <View style={styles.menu}>
        {menuItems.map((menuItem, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={() => handleMenuItemPress(menuItem.label)}
          >
            <Image source={menuItem.icon} style={styles.menuItemIcon} />
            <Text style={styles.menuItemText}>{menuItem.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
  function handleMenuItemPress(label) {
    console.log(`Selected: ${label}`);
    switch (label) {
      case "Auto Topup":
        navigation.navigate("TopUp");
        break;
      case "Friendly Reminder":
        navigation.navigate("ReminderScreen");
        break;
      case "Favorite":
        navigation.navigate("FavoriteScreen");
        break;
      // Add more cases for other menu items here
      default:
        console.log(`Navigate to screen related to ${label}`);
        break;
    }
  }
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
  },
  menu: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    padding: 10,
  },
  menuItemIcon: {
    width: 25,
    height: 25,
    marginRight: 15,
  },
  menuItemText: {
    fontSize: 18,
    color: "white",
  },
});

export default Settings;
