import React from "react";
import { Button, Text, View } from "react-native";

import { styles } from "./styles";
import { theme } from "../../constants";

const Categories = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>VET-OK!</Text>
      <Text style={styles.title}>Categories</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Food"
          color={theme.colors.primary}
          onPress={() => navigation.navigate("Food")}
        />
        <Button
          title="Go to Accessories"
          color={theme.colors.primary}
          onPress={() => navigation.navigate("Accessories")}
        />
      </View>
    </View>
  );
};

export default Categories;
