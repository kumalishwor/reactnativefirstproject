import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text
        style={{
          color: color.toLowerCase(),
          fontSize: 40,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        {color}
      </Text>
      <Button title={`Increase ${color}`} onPress={() => onIncrease()}  />
      <Text></Text>
      <Button title={`Decrease ${color}`} onPress={() => onDecrease()} />
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
//   textStyle: {
//     color: "red",
//     fontSize: 50,
//   },
});

export default ColorCounter;
