import React, {useState, useReducer} from "react";
import { View, Text, StyleSheet, Button } from 'react-native'

const reducer = (state, action) => {
    switch(action.type) {
        case '+':
            return {...state, counter: state.counter + action.payload}
        case '-':
            return {...state, counter: state.counter - action.payload}
        default:
            return state;
    }
}

const CounterScreen = () => {
    // const [counter, setCounter] = useState(0);

    const [state, dispatch] = useReducer(reducer, {counter: 0})
    // const {counter} = state;

    return <View>
        <Button title="Increase" onPress={() => dispatch({type: '+', payload: 1})} />
        <Button title="Decrease" onPress={() => dispatch({type: '-', payload: 1})} />
        <Text>Current Count: {state.counter} </Text>
    </View>
}

const styles = StyleSheet.create({

})

export default CounterScreen
