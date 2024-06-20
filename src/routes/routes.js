import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { primaryColor } from '../constants/colors';
import { NavigatorContainer } from "@react-navigation/native";
import Home from "../screens/home";
import Detalle from "../screens/details";

const Stack = createNativeStackNavigator()
const optionsDefault = {
    headerStyle: {
        backgroundColor: primaryColor,
    },
    headerTitleColor: {color: "blue", alignment : "center"},
    headerTitleAlign: "center",
}

export default Router = () => {
    return <NavigatorContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={optionsDefault} />
            <Stack.Screen name="Details" component={Details} options={{title: "inicio" , ...optionsDefault}} />
        </Stack.Navigator>
    </NavigatorContainer>
}