import React from "react";
import { TouchableOpacity } from "react-native";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  console.log(navigation);
  return (
    <View>
      <Text style={styles.text}>Ishwor kumal</Text>
      <Button
        onPress={() => {
          navigation.navigate("Components");
        }}
        title="Go to Components Demo"
      />
      <Button
        onPress={() => {
          navigation.navigate("List");
        }}
        title="Go to List Demo"
      />
       <Button
        onPress={() => {
          navigation.navigate("ImageScreen");
        }}
        title="Go to ImageScreen"
      />
      {/* <TouchableOpacity onPress={() => navigation.navigate("List")}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: "red",
  },
});

export default HomeScreen;
