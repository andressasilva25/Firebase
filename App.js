import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Login from './src/Screens/Login';
import Cadastro from './src/Screens/Cadastro'
import ListaItems from "./src/Screens/ListaItems";
import { View } from "react-native";

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <View>
      <NavigationContainer>

        <Tab.Screen name="Login" component={Login} options={{ tabBarBadge: 3 }} />
        <Tab.Screen name="Cadastro" component={Cadastro} options={{ tabBarBadge: 3 }} />
        <Tab.Screen name="ListaItems" component={ListaItems} options={{ tabBarBadge: 3 }} />
    


  </NavigationContainer>
    </View>
  )
}