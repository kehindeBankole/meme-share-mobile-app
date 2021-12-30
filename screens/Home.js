import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  Animated,
  Pressable,
  Text,
} from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import { Box, Center } from "native-base";
import World from "../components/World";
import Trending from "../components/Trending";
import Following from "../components/Following";

const initialLayout = { width: Dimensions.get("window").width };

export default function Home({ navigation }) {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "world" },
    { key: "second", title: "Trending" },
    { key: "third", title: "Following" },
  ]);
  const renderScene = SceneMap({
    first: () => <World nav={() => navigation.navigate("profile")} />,
    second: Trending,
    third: Following,
  });
  const renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    return (
      <Box flexDirection="row">
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) =>
              inputIndex === i ? 1 : 0.5
            ),
          });
          const color = index === i ? "white" : "#ADB3C0";
          const borderColor = index === i ? "#35A6EB" : "#0C0E13";

          return (
            <Box
              borderBottomWidth="3"
              borderColor={borderColor}
              flex={1}
              alignItems="center"
              p="3"
            >
              <Pressable
                onPress={() => {
                  setIndex(i);
                }}
              >
                <Animated.Text
                  style={{
                    color,
                    fontFamily: "Inter_700Bold",
                    textTransform: "capitalize",
                  }}
                >
                  {route.title}
                </Animated.Text>
              </Pressable>
            </Box>
          );
        })}
      </Box>
    );
  };

  return (
    <View style={styles.container}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        style={{ marginTop: StatusBar.currentHeight }}
        indicatorStyle={{ backgroundColor: "white" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0C0E13",
    paddingTop: StatusBar.currentHeight + 0,
    // paddingHorizontal: 34,
  },
});

// const getData = async () => {
//     try {
//       const value = await AsyncStorage.getItem("name");
//       if (value !== null) {
//         // value previously stored
//         console.log(value);
//       }
//     } catch (e) {
//       // error reading value
//       console.log("no value");
//     }
//   };

//   useEffect(() => {
//     getData();
//   }, []);
