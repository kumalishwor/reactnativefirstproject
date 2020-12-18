import React, { useState, useReducer } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { ScreenStackHeaderCenterView } from "react-native-screens";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREEMENT = 20;

const reducer = (state, action) => {
  // state === {red: number, green: number, blue: number}
  // action === colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15

  switch (action.colorToChange) {
    case "red":
      return state.red + action.amount > 255 || state.red + action.amount < 0
        ? state
        : { ...state, red: state.red + action.amount };
    // return ;
    case "green":
      return state.green + action.amount > 255 ||
        state.green + action.amount < 0
        ? state
        : { ...state, green: state.green + action.amount };
    case "blue":
      return state.blue + action.amount > 255 || state.blue + action.amount < 0
        ? state
        : { ...state, blue: state.blue + action.amount };
    case "reset":
      return {state, red: 0, green: 0, blue: 0};
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

  const { red, green, blue } = state;

  return (
    <View>
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: "red", amount: COLOR_INCREEMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "red", amount: -1 * COLOR_INCREEMENT })
        }
        color="Red"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: "green", amount: COLOR_INCREEMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "green", amount: -1 * COLOR_INCREEMENT })
        }
        color="Green"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: "blue", amount: COLOR_INCREEMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "blue", amount: -1 * COLOR_INCREEMENT })
        }
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
      <Button title="Reset color" onPress={() => dispatch({ colorToChange: "reset"}) } />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
