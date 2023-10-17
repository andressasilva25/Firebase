import {React} from 'react';
import { View, StyleSheet,Text, Button } from 'react-native';
import { Notifications } from 'expo';

export default function App () {

  
  const handleSendNotification = async () => {
    // Configurar o conteúdo da notificação
    const notificationContent = {
      title: 'Lembrete de consulta',
      body: 'Sua consulta está chegando em breve',
    };
   
    

    async function getExpoPushTokenAsync() {
      const { data: token } = await Notifications.getExpoPushTokenAsync();
      return token;
    }
    // Agendar a notificação para ser enviada imediatamente
    await Notifications.scheduleNotificationAsync({
      content: notificationContent,
      trigger: null, // Para notificação imediata
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Enviar Notificação" onPress={handleSendNotification} />
      <Text style={{ fontSize: 10, fontWeight: 'bold' }}></Text>
      <Button title="Atualizar Notificação" onPress={handleSendNotification} />
      <Text style={{ fontSize: 10, fontWeight: 'bold' }}></Text>
      <Button title="Excluir Notificação" onPress={handleSendNotification} />
    </View>
  );

  
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

