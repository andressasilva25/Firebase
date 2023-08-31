import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

export default function EditarUsuario({ route, navigation }) {
    const { usuario } = route.params;
    const [nome, setNome] = useState(usuario.nome);
    const [email, setEmail] = useState(usuario.email);
    const [profissao, setProfissao] = useState(usuario.profissao);

    const salvarEdicoes = async () => {
        try {
            const usuarioRef = doc(db, "usuarios", usuario.id);
            await updateDoc(usuarioRef, {
                nome: nome,
                email: email,
                profissao: profissao,
            });

            navigation.goBack();
        } catch (error) {
            console.error("Erro ao salvar edições:", error);
        }
    };

    return (
        <View style={styles.container}>
            <Text>Editar Usuário:</Text>
            <TextInput
                style={styles.input}
                placeholder="Nome"
                value={nome}
                onChangeText={setNome}
            />
            <TextInput
                style={styles.input}
                placeholder="E-mail"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Profissão"
                value={profissao}
                onChangeText={setProfissao}
            />
            <Button title="Salvar Edições" onPress={salvarEdicoes} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        width: 250,
        height: 40,
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
        borderRadius: 5,
    },
});
