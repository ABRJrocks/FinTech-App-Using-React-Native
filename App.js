import { Button, StatusBar, Touchable, TouchableOpacity } from "react-native";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import Home from "./src/screens/Home";
import Settings from "./src/screens/settings";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Recent from "./src/screens/Recent";
import Scan from "./src/screens/scan";

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
