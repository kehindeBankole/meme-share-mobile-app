import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Home from "../screens/Home";
import Discover from "../screens/Discover";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Notifications!</Text>
    </View>
  );
}

export function Navigation() {
  return (
    <Tab.Navigator
      // initialRouteName="Test"
      screenOptions={{
        tabBarActiveTintColor: "#246BFD",
        tabBarInactiveTintColor: "#65656B",
        title: false,
        tabBarStyle: {
          backgroundColor: "#1A1C22",
          borderTopColor: "#1A1C22",
          height: 63,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: "center" }}>
              <Entypo name="home" size={24} color="white" />
            </View>
          ),
          tabBarVisible: false,
          tabBarShowLabel: false,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="discover"
        component={Discover}
        options={{
          tabBarLabel: "Explore",
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: "center" }}>
              <FontAwesome5 name="wpexplorer" size={24} color="white" />
            </View>
          ),
          tabBarVisible: false,
          tabBarShowLabel: false,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Stand"
        component={Notifications}
        options={{
          tabBarLabel: "Standings",
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: "center" }}>
              <AntDesign name="pluscircle" size={24} color="#35a6eb" />
            </View>
          ),
          tabBarShowLabel: false,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Standings"
        component={Notifications}
        options={{
          tabBarLabel: "Standings",
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: "center" }}>
              <MaterialCommunityIcons
                name="view-dashboard"
                size={24}
                color="white"
              />
            </View>
          ),
          tabBarShowLabel: false,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarLabel: "Standings",
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: "center" }}>
              <Image
                source={require("../assets/zero.jpeg")}
                style={{ width: 26, height: 26, borderRadius: 100 }}
              />
            </View>
          ),
          tabBarShowLabel: false,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
