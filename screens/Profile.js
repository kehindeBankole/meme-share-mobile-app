import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text>profile</Text>
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
});
