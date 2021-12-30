import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  StatusBar,
} from "react-native";
import { Input, Stack, Button, Center } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function Login({ navigation }) {
  const [text, setText] = useState("");
  const storeData = async () => {
    try {
      await AsyncStorage.setItem("name", `${text}`);
      if (AsyncStorage.getItem("name") !== null) {
        navigation.navigate("Root");
      }
    } catch (error) {
      // Error saving data
      console.log(error);
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("name");
      console.log(value);
      if (value !== null) {
        // value previously stored
        console.log(value);
      }
    } catch (e) {
      // error reading value
      console.log("no value");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>YouMeme</Text>
      <View style={styles.details}>
        <Text style={styles.version}>v1.0</Text>
        <Text style={styles.welcome}>Welcome to YouMeme</Text>
        <Text style={styles.desc}>
          A Social Network for People who enjoy Creating, Browsing and Sharing
          Memes. Login or Register now :)
        </Text>
        <Stack
          space={4}
          w={{
            base: "100%",
            md: "25%",
          }}
          mt="5"
        >
          <Input
            variant="outline"
            placeholder="youreemail@email.com"
            style={styles.input}
            pl="5"
            onChangeText={(text) => setText(text)}
          />
          <Button mt="4" borderRadius="5" onPress={() => getData()}>
            <Text style={styles.buttonText}> Sign in</Text>
          </Button>
          <Center>
            <Text style={styles.version}>OR</Text>
          </Center>
          <Button borderRadius="5" onPress={() => storeData()}>
            <Text style={styles.buttonText}> Register Account</Text>
          </Button>
        </Stack>
      </View>
      {/* <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Root")}
      >
        <Text style={styles.clickText}>log in page</Text>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0C0E13",
    paddingTop: StatusBar.currentHeight + 100,
    paddingHorizontal: 34,
  },
  title: {
    fontFamily: "Inter_400Regular",
    color: "white",
    fontSize: 28,
  },
  details: {
    marginTop: 50,
  },
  version: {
    color: "#35a6eb",
    fontFamily: "Inter_500Medium",
  },
  welcome: {
    color: "white",
    fontFamily: "Inter_700Bold",
    fontSize: 38,
    marginTop: 20,
    lineHeight: 50,
  },
  desc: {
    color: "#808893",
    fontFamily: "Inter_500Medium",
    marginTop: 12,
    lineHeight: 25,
  },
  input: {
    borderRadius: 5,
    borderColor: "#99a4b2",
    height: 42,
    color: "white",
  },
  buttonText: {
    fontFamily: "Inter_700Bold",
    color: "white",
  },
});
