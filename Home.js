import { useEffect, useState } from "react";
import { StyleSheet, View, Text, Button, Pressable, Alert } from "react-native";
import { db } from "./firebaseConfig";
import { collection, deleteDoc, doc, getDocs } from "@firebase/firestore";
import { getAuth, signOut } from "@firebase/auth";
import { Feather } from '@expo/vector-icons'

export default function Home({ navigation }) {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        const buscaDados = async () => {
            try {
                const usuariosRef = collection(db, 'usuarios')
                const querySnapshot = await getDocs(usuariosRef)
                const dados = querySnapshot.docs.map(doc => doc.data());
                setUsuarios(dados);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            }
        };

        buscaDados();
    }, []);

    const sair = async () => {
        try {
            const auth = getAuth()
            await signOut(auth)
            navigation.navigate('login')
        } catch (error) {
            console.error('Erro ao sair do sistema: ', error)
        }
    }

    const irTelaDetalhes = (usuario) => {
        navigation.navigate('detalhes', { usuario })
    }

    const irEditarUsuario = (usuario) => {
        navigation.navigate('editarusuario', { usuario })
    }

    const excluirUsuario = (usuario) => {
        Alert.alert("Excluir usuario?", "Tem certeza que você quer excluir esse(a) usuário(a)",
            [
                {
                    text: "Cancelar"
                },

                {
                    text: "Excluir",
                    onPress: async () => { 
                        const usuarioRef = doc(db, 'usuarios',usuario.id)
                        await deleteDoc(usuarioRef)

                      const usuariosExistentes = usuarios.filter(u => u.id !== usuario)
                     
                    
                    }
                }

            ]

        )

    }


    return (
        <View style={styles.container}>
            <Button title="SAIR" onPress={sair} />
            <Text style={{ fontSize: 30 }}>Sejam bem-vindos(as)</Text>
            {usuarios.map((usuario) => (
                <View style={styles.usuario} key={usuario.id}>
                    <Pressable style={styles.usuarioItem} key={usuario.id} onPress={() => irTelaDetalhes(usuario)}>
                        <Text style={{ fontSize: 20 }}>{usuario.nome}</Text>
                        <Feather name="edit" size={24} color={'blue'} onPress={() => irEditarUsuario(usuario)} />
                        <Feather name="trash-2" size={24} color={'red'} />
                    </Pressable>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    usuario: {
        marginBottom: 20,
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        borderRadius: 5,
    },
    usuarioItem: {
        width: 300,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});


