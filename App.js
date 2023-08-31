import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "./Login"
import Home from "./Home"
import Cadastro from "./Cadastro"
import Detalhes from "./Detalhes"
import { useState } from "react"
import { getAuth } from "@firebase/auth"

const Stack = createNativeStackNavigator()


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login" screenOptions={{headerShown: false}}>
        <Stack.Screen name="login" component={Login}/>
        <Stack.Screen name="home" component={Home}/>
        <Stack.Screen name="cadastro" component={Cadastro}/>
        <Stack.Screen name="detalhes" component={Detalhes}/>
        <Stack.Screen name="editarusuario" component={EditarUsuario}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}



