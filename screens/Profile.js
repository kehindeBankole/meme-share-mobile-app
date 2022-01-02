import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ImageBackground,
  Image,
  Dimensions,
} from "react-native";
import {
  Stack,
  Center,
  Box,
  Flex,
  Heading,
  ScrollView,
  VStack,
  Divider,
  NativeBaseProvider,
} from "native-base";
export default function Profile() {
  return (
    <View style={styles.container}>
      <Stack>
        <Image
          source={{
            uri: "https://youmeme.herokuapp.com/api/image/background/993f6baf-0250-453c-af24-f6ed80a70c4b.jpeg",
          }}
          style={{
            width: Dimensions.get("window").screen,
            height: 150,
          }}
        />
        <Center>
          <Image
            source={{
              uri: "https://youmeme.herokuapp.com/api/image/avatar/5c179ffb-97db-461f-a06d-8d068aa8716c.jpeg",
            }}
            style={styles.profilepicture}
          />
          <Box mt="3">
            <Text style={styles.username}>kehinde</Text>
            <Text style={styles.displayname}>@kehinde</Text>
          </Box>
        </Center>
        <Flex direction="row" justifyContent="space-between" px="5" mt="4">
          <Box>
            <Text style={{ ...styles.username, fontSize: 16 }}>1263</Text>
            <Text
              style={{ ...styles.displayname, fontFamily: "Inter_600SemiBold" }}
            >
              following
            </Text>
          </Box>
          <Box borderRightWidth="1" borderRightColor="#424953"></Box>
          <Box>
            <Text style={{ ...styles.username, fontSize: 16 }}>450.k</Text>
            <Text
              style={{ ...styles.displayname, fontFamily: "Inter_600SemiBold" }}
            >
              follower
            </Text>
          </Box>
          <Box borderRightWidth="1" borderRightColor="#424953"></Box>
          <Box>
            <Text style={{ ...styles.username, fontSize: 16 }}>21.3</Text>
            <Text
              style={{ ...styles.displayname, fontFamily: "Inter_600SemiBold" }}
            >
              posts
            </Text>
          </Box>
        </Flex>
      </Stack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0C0E13",
    //paddingHorizontal: 34,
  },
  profilepicture: {
    width: 90,
    height: 90,
    borderRadius: 40,
    borderWidth: 8,
    borderColor: "#13171C",
    marginTop: -45,
  },
  username: {
    fontFamily: "Inter_800ExtraBold",
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  displayname: {
    fontFamily: "Inter_500Medium",
    color: "#ADB3C0",
    fontSize: 12,
    textAlign: "center",
  },
});
