import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Child 1</Text>
      <Text style={styles.textTwoStyle}>Child 2</Text>
      <Text style={styles.textThreeStyle}>Child 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    // flexDirection: "row",
    height: 200,
    // alignItems: 'center',
    // justifyContent: 'space-evenly'
  },
  textOneStyle: {
    borderWidth: 2,
    borderColor: "red",
    flex: 1,
    marginVertical: 10
    // alignSelf: 'flex-start'
  },
  textTwoStyle: {
    borderWidth: 2,
    borderColor: "red",
    flex: 1,
    marginVertical: 10
    // alignSelf: 'center',
    // position: 'absolute'

  },
  textThreeStyle: {
    borderWidth: 2,
    borderColor: "red",
    flex: 1,
    marginVertical: 10
    // alignSelf: 'flex-end'
  },
});

export default BoxScreen;
