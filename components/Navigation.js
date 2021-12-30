import "react-native-gesture-handler";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Home from "../screens/Home";
import Discover from "../screens/Discover";
import Profile from "../screens/Profile";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Button, Stack, Box } from "native-base";
const Tab = createBottomTabNavigator();

function Notifications({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Notifications!</Text>
    </View>
  );
}

function Article() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Article Screen</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

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
function Feed() {
  return (
    <View style={{ flex: 1 }}>
      <Navigation />
    </View>
  );
}
function CustomDrawerContent({ navigation }) {
  return (
    // <Button
    //   style={{ marginTop: 50, paddingHorizontal: 50 }}
    //   onPress={() => {
    //     // Navigate using the `navigation` prop that you received
    //     navigation.navigate("profile");
    //   }}
    // >
    //   click
    // </Button>
    <View>
      <Stack>
        <Image
          source={{
            uri: `https://youmeme.herokuapp.com/api/image/background/993f6baf-0250-453c-af24-f6ed80a70c4b.jpeg`,
          }}
          style={{
            width: "auto",
            height: 150,
          }}
        />
        <View
          style={{
            backgroundColor: "#252A32",
            height: 100,
            paddingHorizontal: 10,
          }}
        >
          <Image
            source={require("../assets/zero.jpeg")}
            style={{ width: 60, height: 60, borderRadius: 25, marginTop: -20 }}
          />
          <Box mt="1">
            <Text style={styles.username}>kehinde</Text>
            <Text style={styles.atname}>kenny@yopmail.com</Text>
          </Box>
        </View>
      </Stack>
    </View>
  );
}
export function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        options={{
          headerShown: false,
          drawerLabel: false,
          drawerStyle: {
            backgroundColor: "#0C0E13",
            width: 240,
            borderWidth: 1,
            borderRightColor: "#21282D",
          },
        }}
        name="Art"
        component={Navigation}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "#FFFFFF",
    fontSize: 26,
    fontFamily: "Inter_800ExtraBold",
    marginBottom: 25,
    paddingHorizontal: 15,
  },
  username: {
    color: "#DFE1E6",
    fontSize: 14,
    fontFamily: "Inter_900Black",
  },
  atname: {
    color: "#ADB3C0",
    fontSize: 11,
    fontFamily: "Inter_500Medium",
  },
  memeTitle: {
    color: "#E2E4E9",
    fontSize: 17,
    fontFamily: "Inter_800ExtraBold",
  },
  tags: {
    backgroundColor: "#363E4A",
    height: 20,
  },
  tagname: {
    color: "white",
    fontSize: 10,
    fontFamily: "Inter_700Bold",
  },
});
