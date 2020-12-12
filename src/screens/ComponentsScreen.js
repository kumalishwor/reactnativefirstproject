import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ComponentsScreen = () => {
  const name = "Ishwor kumal";
  return (
    <View>
      <Text style={styles.textStyle}>Getting started with react native.</Text>
      <Text style={styles.nameSize}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  nameSize: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
