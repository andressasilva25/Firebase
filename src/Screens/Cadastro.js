import React, { useState } from 'react';
import { Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

const Cadastro = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  


  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 10 }}>E-mail</Text>
      <Button
        title="Digite seu email"
        onPress={() => navigation.navigate('email')}
      />

  
      <TextInput
        style={{
          borderBottomWidth: 1,
          borderColor: 'gray',
          marginBottom: 20,

        }}
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput

        style={{
          borderBottomWidth: 1,
          borderColor: 'gray',
          marginBottom: 20,
        }}
        placeholder="Digite sua Senha"
        value={senha}
        onChangeText={(text) => setSenha(text)}
      />

      <Button>
        <Text>Continuar</Text>
      </Button>
    
      <TextInput
        style={{
          borderBottomWidth: 1,
          borderColor: 'gray',
          marginBottom: 20,
        }}
        placeholder="Confirme sua Senha"
        value={confirmarsenha}
        onChangeText={(text) => setConfirmarSenha(text)}
      />


      <Button text={styles.container}
        title="Continuar"
        onPress={handleChangePassword}
        color="lightblue"
      />

      <Text style={{ fontSize: 24, marginTop: 20, marginBottom: 10 }}>
        Informações Pessoais
      </Text>
      <Text>Nome Completo:</Text>
      <TextInput
        style={{
          borderBottomWidth: 1,
          borderColor: 'gray',
          marginBottom: 10,
        }}
        placeholder="Digite seu nome completo"
      />

      <Text>Celular:</Text>
      <TextInput
        style={{
          borderBottomWidth: 1,
          borderColor: 'gray',
          marginBottom: 10,
        }}
        placeholder="Digite seu número de celular"
      />

      <Text>Data de Nascimento:</Text>
      <TextInput
        style={{
          borderBottomWidth: 1,
          borderColor: 'gray',
          marginBottom: 10,
        }}
        placeholder="Digite sua data de nascimento"
      />

      <Text>RG:</Text>
      <TextInput
        style={{
          borderBottomWidth: 1,
          borderColor: 'gray',
          marginBottom: 10,
        }}
        placeholder="Digite seu RG"
      />

      <Text>CPF:</Text>
      <TextInput
        style={{
          borderBottomWidth: 1,
          borderColor: 'gray',
          marginBottom: 20,
        }}
        placeholder="Digite seu CPF"
      />

      <Text style={{ fontSize: 24, marginTop: 20, marginBottom: 10 }}>
        Endereço de Entrega
      </Text>
      <Text>CEP:</Text>
      <TextInput
        style={{
          borderBottomWidth: 1,
          borderColor: 'gray',
          marginBottom: 10,
        }}
        placeholder="Digite seu CEP"
      />

      <Text>UF do Estado:</Text>
      <TextInput
        style={{
          borderBottomWidth: 1,
          borderColor: 'gray',
          marginBottom: 10,
        }}
        placeholder="Digite o número da casa"
      />


      <Text>Confirmar a Nova Senha:</Text>
      <TextInput
        style={{
          borderBottomWidth: 1,
          borderColor: 'gray',
          marginBottom: 20,
        }}
        placeholder="Confirme sua senha"
        secureTextEntry={true}
        value={confirmarsenha}
        onChangeText={(text) => setConfirmarSenha(text)}
        
      />
      <Button style={styles.button} />
        <Text>Cadastrar</Text>
      
    </ScrollView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    background: '4785C5',
    fontFamily:'LatoRegular'
    
  },
 
  button: {
    color: 'ffffff',
    Height: '40%',
    width: 160,
    borderBottomColor: 'silver'
  },
  formcadastro: {
    flexDirection: 'row',
    fontFamily: 'latoRegular',
    height: '581',
    width: '690',

  }






})
export default Cadastro;