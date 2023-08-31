import { StyleSheet, Text, View } from "react-native"
import { useRoute } from "@react-navigation/native"

export default function Detalhes(){

    const route = useRoute()
    const { usuario } = route.params

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Detalhes do(a) usuário(a)</Text>
            <Text>Nome: {usuario.nome}</Text>
            <Text>Email: {usuario.email}</Text>
            <Text>Profissão: {usuario.profissao}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})