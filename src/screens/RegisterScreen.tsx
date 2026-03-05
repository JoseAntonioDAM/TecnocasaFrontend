import { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
    ScrollView,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootNavigator";

type NavProp = NativeStackNavigationProp<RootStackParamList>;

export default function RegisterScreen() {
    const navigation = useNavigation<NavProp>(); 

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [dni, setDni] = useState("");
    const [direccion, setDireccion] = useState("");
    const [cp, setCp] = useState("");
    const [telefono, setTelefono] = useState("");
    const [correo, setCorreo] = useState("");

    return (
        <ImageBackground
            source={require("../../assets/FondoInicioTres.png")}
            style={styles.background}
        >
            <ScrollView contentContainerStyle={styles.container}>

                <Text style={styles.title}>Registro</Text>

                <TextInput style={styles.input} placeholder="Nombre" placeholderTextColor="#666" value={nombre} onChangeText={setNombre} />
                <TextInput style={styles.input} placeholder="Apellido" placeholderTextColor="#666" value={apellido} onChangeText={setApellido} />
                <TextInput style={styles.input} placeholder="DNI / NIE" placeholderTextColor="#666" value={dni} onChangeText={setDni} />
                <TextInput style={styles.input} placeholder="Dirección" placeholderTextColor="#666" value={direccion} onChangeText={setDireccion} />
                <TextInput style={styles.input} placeholder="Código Postal" placeholderTextColor="#666" keyboardType="numeric" value={cp} onChangeText={setCp} />
                <TextInput style={styles.input} placeholder="Teléfono" placeholderTextColor="#666" keyboardType="phone-pad" value={telefono} onChangeText={setTelefono} />
                <TextInput style={styles.input} placeholder="Correo Electrónico" placeholderTextColor="#666" keyboardType="email-address" value={correo} onChangeText={setCorreo} />

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("Login")} 
                >
                    <Text style={styles.buttonText}>Confirmar</Text>
                </TouchableOpacity>

            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
    container: {
        paddingHorizontal: 30,
        paddingTop: 200,
        paddingBottom: 40,
        alignItems: "center",

    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#00A86B",
        marginBottom: 25,
    },
    input: {
        width: "100%",
        backgroundColor: "rgba(255,255,255,0.9)",
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
        borderColor: "#00A86B",
        borderWidth: 4,
    },
    button: {
        width: "100%",
        backgroundColor: "#00A86B",
        paddingVertical: 14,
        borderRadius: 10,
        marginTop: 10,
    },
    buttonText: {
        color: "#fff",
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
    },
});
