import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Anish", id: "1", age: 23 },
    { name: "Sushant", id: "2", age: 22 },
    { name: "Amish", id: "3", age: 24 },
    { name: "Ashish", id: "4", age: 23 },
    { name: "Sundar", id: "5", age: 24 },
    { name: "Saramsa", id: "6", age: 23 },
    { name: "Dambar", id: "7", age: 23 },
    { name: "Prakash", id: "8", age: 24 },
  ];

  return (
    <View>
      <Text style={{ color: "red", fontSize: 25 }}>Friends Name List:</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        data={friends}
        renderItem={({ item }) => {
          // element === {item: {name: 'Anish'}, index: 0}
          return <Text style={styles.textStyle}>{item.name} - Age: {item.age}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    // marginVertical: 50,
    borderWidth: 1,
    // paddingVertical: 50,
    padding: 20
  },
});

export default ListScreen;
