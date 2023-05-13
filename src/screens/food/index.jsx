import React from "react";
import { Button, Text, View } from "react-native";

import { styles } from "./styles";
import { theme } from "../../constants";

const Food = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Food</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Product"
          color={theme.colors.primary}
          onPress={() => navigation.navigate("Product")}
        />
      </View>
    </View>
  );
};

export default Food;
