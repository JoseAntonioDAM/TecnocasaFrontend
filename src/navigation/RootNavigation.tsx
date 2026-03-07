import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Importa tus pantallas
import ClientHomeScreen from "../screens/ClienteScreens/ClienteScreens";
import PropertyDetailScreen from "../screens/ClienteScreens/PropertyDetailScreen";
import AgendaCita from "../screens/ClienteScreens/AgendaCita";

// Tipos de navegación SOLO para lo que usas ahora
export type RootStackParamList = {
    ClientHome: undefined;
    PropertyDetail: { propiedad: any };
    AgendaCita: { propiedad: any /* , usuario: any */ };

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

                <Stack.Screen
                    name="PropertyDetail"
                    component={PropertyDetailScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="AgendaCita"
                    component={AgendaCita}
                    options={{ headerShown: false }}
                />


            </Stack.Navigator>
        </NavigationContainer>
    );
}
