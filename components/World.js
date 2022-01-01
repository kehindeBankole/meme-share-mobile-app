import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
  Dimensions,
  SafeAreaView,
} from "react-native";
import {
  Flex,
  Box,
  Stack,
  Badge,
  Center,
  Button,
  Spinner,
  HStack,
  Heading,
} from "native-base";
import { SimpleLineIcons } from "@expo/vector-icons";
import { useFetch } from "../hooks/useFetch";
export default function World({ nav }) {
  const [limit, setLimit] = useState(20);
  const [loading, setLoading] = useState(false);
  const [s, data] = useFetch(
    `https://youmeme-demo.herokuapp.com/api/post?limit=${limit}`
  );
  const loadMore = () => {
    setLimit(limit + 20);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Trending Categories</Text>
      <FlatList
        data={[
          { uri: "/category/47f24e1f-e0d9-45a2-9625-5f0ef8c5f2f6.png" },
          { uri: "/category/00b15405-420c-4d23-9e4f-ff0a8469c4a0.png" },
          { uri: "/category/8c38e6cc-f653-4030-9441-a6a2e020b156.png" },
          { uri: "/category/d6dcc93f-c61e-4877-8be5-f2cdeb8700d6.png" },
          { uri: "/category/e39adebb-2cf0-4b9b-8a01-9adcc15b0660.png" },
        ]}
        renderItem={({ item }) => (
          <View style={{ marginLeft: 7 }}>
            <Image
              source={{
                uri: `https://youmeme.herokuapp.com/api/image${item.uri}`,
              }}
              style={{ width: 100, height: 150, borderRadius: 7 }}
            />
          </View>
        )}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ paddingLeft: 15, flex: 2 }}
      />

      <View style={{ flex: 4, marginTop: 20 }}>
        {data && (
          <FlatList
            removeClippedSubviews={true}
            onEndReached={loadMore}
            onEndReachedThreshold={0}
            scrollEnabled={true}
            ListFooterComponent={
              <Center flex={1} px="3" mt="5">
                <HStack space={2} alignItems="center">
                  <Spinner accessibilityLabel="Loading posts" size="lg" />
                </HStack>
              </Center>
            }
            data={data.data}
            renderItem={({ item }) => (
              <View style={{ paddingHorizontal: 15, marginTop: 25 }}>
                <Flex direction="row" justifyContent="space-between">
                  <Box>
                    <Flex direction="row">
                      <Image
                        source={{
                          uri: item.user.avatar
                            ? `https://youmeme.herokuapp.com/api/image${item.user.avatar.urlImage}`
                            : "https://youmeme.netlify.app/profile.png",
                        }}
                        style={{ width: 40, height: 40, borderRadius: 17 }}
                      />
                      <Box ml="2">
                        <Text style={styles.username}>
                          {item.user.username}
                        </Text>
                        <Text style={styles.atname}>
                          @{item.user.displayName}
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
                  <Box>
                    <Button
                      onPress={() => nav()}
                      style={{ backgroundColor: "transparent" }}
                    >
                      <SimpleLineIcons
                        name="options"
                        size={18}
                        color="#ADB3C0"
                      />
                    </Button>
                  </Box>
                </Flex>
                <Stack style={{ marginTop: 15 }}>
                  <Text style={styles.memeTitle}>{item.title}</Text>
                  <Image
                    source={{
                      uri: `https://youmeme.herokuapp.com/api/image${item.meme.renderedImage.urlImage}`,
                    }}
                    style={{
                      width: "auto",
                      height: 300,
                      borderRadius: 7,
                      marginTop: 10,
                      resizeMode: "contain",
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
            style={{ flex: 1 }}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    height: Dimensions.get("window").height,
    flex: 1,
    flexDirection: "column",
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
