import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView } from "react-native";
import { useState } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/RootNavigation";

type NavProp = NativeStackNavigationProp<RootStackParamList>;

export default function AgendaCitaScreen() {
    const route = useRoute();
    const navigation = useNavigation<NavProp>();

    const { propiedad /* , usuario */ } = route.params as any;

    const [fecha, setFecha] = useState(new Date());
    const [hora, setHora] = useState(new Date());
    const [mostrarFecha, setMostrarFecha] = useState(false);
    const [mostrarHora, setMostrarHora] = useState(false);

    const confirmarCita = async () => {
        const payload = {
            // usuario_id: usuario.id,
            propiedad_id: propiedad.id,
            fecha: fecha.toISOString().split("T")[0],
            hora: hora.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        };

        console.log("CITA ENVIADA:", payload);

        navigation.navigate("Confirm"); 
    };

    return (
        <ImageBackground
            source={require("../../../assets/FondoClienteUno.png")}
            style={styles.background}
        >
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.container}>

                    <Text style={styles.title}>Agenda tu cita</Text>

                    {/* Selección de fecha */}
                    <TouchableOpacity onPress={() => setMostrarFecha(true)}>
                        <Text style={styles.selector}>Fecha: {fecha.toDateString()}</Text>
                    </TouchableOpacity>

                    {mostrarFecha && (
                        <DateTimePicker
                            value={fecha}
                            mode="date"
                            display="default"
                            onChange={(e, selected) => {
                                setMostrarFecha(false);
                                if (selected) setFecha(selected);
                            }}
                        />
                    )}

                    {/* Selección de hora */}
                    <TouchableOpacity onPress={() => setMostrarHora(true)}>
                        <Text style={styles.selector}>
                            Hora: {hora.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                        </Text>
                    </TouchableOpacity>

                    {mostrarHora && (
                        <DateTimePicker
                            value={hora}
                            mode="time"
                            display="default"
                            onChange={(e, selected) => {
                                setMostrarHora(false);
                                if (selected) setHora(selected);
                            }}
                        />
                    )}

                    {/* Botón confirmar */}
                    <TouchableOpacity style={styles.button} onPress={confirmarCita}>
                        <Text style={styles.buttonText}>Confirmar cita</Text>
                    </TouchableOpacity>

                </View>
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
    scrollContent: {
        paddingTop: 180,
        paddingHorizontal: 20,
        paddingBottom: 40,
    },
    container: {
        flex: 1,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#00A86B",
        marginBottom: 30,
    },
    selector: {
        backgroundColor: "rgba(255,255,255,0.9)",
        padding: 15,
        borderRadius: 10,
        fontSize: 18,
        marginBottom: 20,
    },
    button: {
        backgroundColor: "#00A86B",
        paddingVertical: 15,
        borderRadius: 10,
        marginTop: 40,
    },
    buttonText: {
        color: "#fff",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
    },
});
