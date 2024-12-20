import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/components/Home.jsx';
import CreateClient from './src/components/CreateClient.jsx';
import Clients from './src/components/Clients.jsx';
import CreateInvoice from './src/components/CreateInvoice.jsx';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Crear Cliente" component={CreateClient} />
        <Stack.Screen name = "Listado de Clientes" options = {{orientation: 'all'}} component={Clients} />
        <Stack.Screen name = "Crear Factura" component={CreateInvoice} />
      </Stack.Navigator>
    </NavigationContainer>
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
