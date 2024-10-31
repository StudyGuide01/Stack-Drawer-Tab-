import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Iconicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Icon from "@expo/vector-icons/Entypo";
import User from "react-native-vector-icons/AntDesign";

// Screens Import
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import UserScreen from "./screens/UserScreen";
import SettingScreens from "./screens/SettingScreens";
import DetailsScreens from "./screens/DetailsScreen";
import UpdateProfileScreens from "./screens/UpdateProfileScreen";
import LoginUserScreens from "./screens/LoginUserScreen";
import RegisterPage from "./screens/RegisterPage";
import AdminStackScreens from "./screens/AdminStackScreens";
// import DrawerContent from "./DrawerContent";
import DrawerContent from './DrawerContetn';


// Define Stack, Drawer, and Tab Navigators
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// Stack Navigator for Home, Profile, User, UpdateProfile, and Login
const StackNav = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "orange" },
      headerTintColor: "white",
      headerTitleAlign: "center",
    }}
  >
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Profile" component={ProfileScreen} />
    <Stack.Screen name="User" component={UserScreen} />
    <Stack.Screen name="Update" component={UpdateProfileScreens} options={{ headerShown: false }} />
    {/* <Stack.Screen name="LoginUser" component={LoginNav} /> */}
    
  </Stack.Navigator>
);

// Drawer Navigator for main navigation with Home as the entry point
const DrawerNav = () => (
  <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />} screenOptions={{ headerShown: false }}>
    <Drawer.Screen name="Home" component={TabNav} />
  </Drawer.Navigator>
);

// Login Stack for Login and Registration
const LoginNav = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={LoginUserScreens} />
    <Stack.Screen name="Register" component={RegisterPage} />
    <Stack.Screen name="Home" component={DrawerNav} />
    <Stack.Screen name="AdminScreen" component={AdminStack} />
  </Stack.Navigator>
);

// Admin Stack
const AdminStack = () => (
  <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: "blue" }, headerTintColor: "#fff", headerTitleAlign: "center" }}>
    <Stack.Screen name="AdminScreen" component={AdminStackScreens} />
    <Stack.Screen name="Login" component={LoginNav} options={{ headerShown: false }} />
  </Stack.Navigator>
);

// Tab Navigator with Bottom Tab icons and configuration
const TabNav = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === "Home") {
          iconName = focused ? "home" : "home-outline";
        } else if (route.name === "User") {
          iconName = focused ? "account-multiple" : "account-multiple-outline";
        }
        return <Icon name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: "blue",
      tabBarInactiveTintColor: "gray",
      tabBarStyle: { height: 60, backgroundColor: "blue" },
    })}
  >
    <Tab.Screen name="Home" component={StackNav} />
    <Tab.Screen name="User" component={UserScreen} />
  </Tab.Navigator>
);

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState("User");

  useEffect(() => {
    // Load user data here
  }, []);

  return (
    <NavigationContainer>
      {isLoggedIn && userType === "Admin" ? <AdminStack /> : isLoggedIn ? <DrawerNav /> : <LoginNav />}
    </NavigationContainer>
  );
}
