import { Flex, Box, Stack } from "native-base";
import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from "react-native";

export default function Notifications() {
  return (
    <View style={styles.container}>
      <FlatList
        data={Array.from({ length: 50 }, (v, i) => i)}
        renderItem={({ item }) => (
          <Stack mb="8">
            <Flex direction="row">
              <Box alignSelf={"center"}>
                <Image
                  source={{
                    uri: "https://youmeme.herokuapp.com/api/image/avatar/5c179ffb-97db-461f-a06d-8d068aa8716c.jpeg",
                  }}
                  style={styles.profilepicture}
                />
              </Box>
              <Box
                ml="4"
                alignSelf={"center"}
                style={{ width: Dimensions.get("window").width - 100 }}
              >
                <Text style={styles.main}>
                  {" "}
                  <Text style={{ fontFamily: "Inter_900Black" }}>
                    Jordan Michaels
                  </Text>{" "}
                  Liked your meme
                </Text>
                <Text style={styles.cont}>
                  How do you know this is busted at the end it ...
                </Text>
                <Text style={styles.time}>8 mins ago</Text>
              </Box>
            </Flex>
          </Stack>
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 10 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#0C0E13",
    paddingHorizontal: 15,
  },
  profilepicture: {
    width: 49,
    height: 49,
    borderRadius: 19,
  },
  main: {
    fontSize: 14,
    color: "#DFE1E6",
    fontFamily: "Inter_400Regular",
    textAlign: "left",
  },
  cont: {
    fontSize: 13,
    fontStyle: "italic",
    color: "#B5BCC8",
    fontFamily: "Inter_400Regular",
  },
  time: {
    color: "#7F8594",
    fontSize: 12,
    fontFamily: "Inter_400Regular",
  },
});
