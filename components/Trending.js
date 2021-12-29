import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import { Flex, Box, Stack, Badge, Center } from "native-base";
import { SimpleLineIcons } from "@expo/vector-icons";
export default function Trending() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Trending Categories</Text>

      <FlatList
        data={[1, 2, 3, 45]}
        renderItem={() => (
          <View style={{ paddingHorizontal: 15, marginTop: 25 }}>
            <Flex direction="row" justifyContent="space-between">
              <Box>
                <Flex direction="row">
                  <Image
                    source={require("../assets/zero.jpeg")}
                    style={{ width: 40, height: 40, borderRadius: 17 }}
                  />
                  <Box ml="2">
                    <Text style={styles.username}>kehinde</Text>
                    <Text style={styles.atname}>@grandmaster</Text>
                  </Box>
                </Flex>
              </Box>
              <Box>
                <SimpleLineIcons name="options" size={24} color="#ADB3C0" />
              </Box>
            </Flex>
            <Stack style={{ marginTop: 15 }}>
              <Text style={styles.memeTitle}>Tokyo revenger meme</Text>
              <Image
                source={require("../assets/meme1.png")}
                style={{
                  width: "auto",
                  height: 200,
                  borderRadius: 7,
                  marginTop: 10,
                }}
              />
              <Flex direction="row" mt="3">
                <Badge borderRadius="5" style={styles.tags}>
                  <Center>
                    <Text style={styles.tagname}> anime</Text>
                  </Center>
                </Badge>
                <Badge borderRadius="5" style={styles.tags}>
                  <Text style={styles.tagname}>toman</Text>
                </Badge>
                <Badge borderRadius="5" style={styles.tags}>
                  <Text style={styles.tagname}>draken</Text>
                </Badge>
                <Badge borderRadius="5" style={styles.tags}>
                  <Text style={styles.tagname}> anime</Text>
                </Badge>
              </Flex>
            </Stack>
          </View>
        )}
        style={{ marginBottom: 40 }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    height: Dimensions.get("window").height,
    flex: 1,
  },
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
