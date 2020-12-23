import React, { useState, useReducer } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { ScreenStackHeaderCenterView } from "react-native-screens";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREEMENT = 20;

const reducer = (state, action) => {
  // state === {red: number, green: number, blue: number}
  // action === colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15

  switch (action.type) {
    case "change_red":
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    // return ;
    case "change_green":
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case "change_blue":
      return state.blue + action.payload > 255 || state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
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
          dispatch({ type: "change_red", payload: COLOR_INCREEMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_red", payload: -1 * COLOR_INCREEMENT })
        }
        color="Red"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: "change_green", payload: COLOR_INCREEMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_green", payload: -1 * COLOR_INCREEMENT })
        }
        color="Green"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: "change_blue", payload: COLOR_INCREEMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_blue", payload: -1 * COLOR_INCREEMENT })
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
      <Button title="Reset color" onPress={() => dispatch({ type: "reset"}) } />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
