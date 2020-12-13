import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { ScreenStackHeaderCenterView } from "react-native-screens";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREEMENT = 20;

const SquareScreen = () => {
  const [red, setRed] = useState(150);
  const [green, setGreen] = useState(150);
  const [blue, setBlue] = useState(150);

  const setColor = (color, change) => {
    // color === 'red', 'green', blue
    // change === +20 or -20

    switch (color) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;
      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;
      default:
        return;
    }
  };

  const setDefaultColor = () => {
    setRed(150);
    setGreen(150);
    setBlue(150);
  };

  return (
    <View>
      <ColorCounter
        onIncrease={() => setColor("red", COLOR_INCREEMENT)}
        onDecrease={() => setColor("red", -1 * COLOR_INCREEMENT)}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => setColor("green", COLOR_INCREEMENT)}
        onDecrease={() => setColor("green", -1 * COLOR_INCREEMENT)}
        color="Green"
      />
      <ColorCounter
        onIncrease={() => setColor("blue", COLOR_INCREEMENT)}
        onDecrease={() => setColor("blue", -1 * COLOR_INCREEMENT)}
        color="Blue"
      />
      <View
        style={{
          height: 200,
          width: 200,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
          marginBottom: 10,
        }}
      />
      <Button title="Reset color" onPress={() => setDefaultColor()} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
