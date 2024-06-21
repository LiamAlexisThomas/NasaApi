import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import home from "../screens/home";
import Details from "../screens/details";
import { ImageBackground } from "react-native";
import { primaryColor } from "../constants/colors";

export default Router = () => {
  const Stack = createNativeStackNavigator();

  const opciones = {
    title: "Inicio",
    headerStyle: { BackgroundColor: primaryColor },
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={home} options={{ title: "Inicio", ...opciones }}/>
        <Stack.Screen name="Detalles" component={Details} options={{ title: "Imagen del dia", ...opciones }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
