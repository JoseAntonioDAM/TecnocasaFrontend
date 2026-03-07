import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Importa tu pantalla del cliente
import ClientHomeScreen from "../screens/ClienteScreens/ClienteScreens";

// Tipos de navegación SOLO para lo que usas ahora
export type RootStackParamList = {
    ClientHome: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="ClientHome">

                <Stack.Screen
                    name="ClientHome"
                    component={ClientHomeScreen}
                    options={{ headerShown: false }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}
