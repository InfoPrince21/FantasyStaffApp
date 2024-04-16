import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import UsersScreen from "./screens/UsersScreen"; // Ensure this import is correct

// Create the stack and drawer navigators
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// Component for the Home Screen
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="Open Drawer" onPress={() => navigation.toggleDrawer()} />
      <StatusBar style="auto" />
    </View>
  );
}

// Component for a placeholder screen in the drawer
function NotificationsScreen() {
  return (
    <View style={styles.container}>
      <Text>This is another page!</Text>
    </View>
  );
}

// Stack Navigator containing the Home Screen
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeStack" component={HomeScreen} />
    </Stack.Navigator>
  );
}

// Drawer Navigator using the stack
function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomeDrawer" component={MyStack} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      <Drawer.Screen name="Users" component={UsersScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
