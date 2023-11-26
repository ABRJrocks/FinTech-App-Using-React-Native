import { Button, StatusBar, Touchable, TouchableOpacity } from "react-native";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import Home from "./src/screens/Home";
import Settings from "./src/screens/settings";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Recent from "./src/screens/Recent";
import Scan from "./src/screens/scan";
import History from "./src/screens/History";
import Add from "./src/screens/Add";
import Wallet from "./src/screens/Wallet";
import Card from "./src/screens/Card";
import Conatacts from "./src/screens/Contacts";
import TopUP from "./src/screens/TopUp";
import MyQR from "./src/screens/MyQR";

export default function App(props) {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Settings"
            component={Settings}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Recent"
            component={Recent}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Scan"
            component={Scan}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="History"
            component={History}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Add"
            component={Add}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Wallet"
            component={Wallet}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Card"
            component={Card}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Contacts"
            component={Conatacts}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TopUp"
            component={TopUP}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MyQR"
            component={MyQR}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B1B1B",
    marginTop: StatusBar.currentHeight,
  },
});
