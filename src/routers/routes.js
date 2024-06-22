import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";
import Details from "../screens/details";

export default Router = () => {
  const Stack = createNativeStackNavigator();

  const optionsDefault = {
    title: "Inicio",
    headerStyle: { BackgroundColor: "rgb(7,26,93)" },
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ title: "Inicio", ...optionsDefault }}/>
        <Stack.Screen name="Detalles" component={Details} options={{ title: "Imagen del dia", ...optionsDefault }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
