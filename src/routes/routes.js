import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";
import Details from "../screens/details";

const Stack = createNativeStackNavigator()
const optionsDefault = {
    headerStyle: {
        backgroundColor: "rgb(25,26,93)",
    },
    headerTitleColor: {color: "blue", alignment : "center"},
    headerTitleAlign: "center",
}

export default Router = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={optionsDefault}/>
          <Stack.Screen name="Detalles" component={Details} options={optionsDefault}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  };