import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { Button } from 'react-native-paper';

export default function Home({navigation}) {

    const styles = StyleSheet.create({
        buttonStyle:{
            margin: 10,
            padding: 10,
        }
    });
    
  return (
    <View>
        <Button style={styles.buttonStyle} mode = "contained" onPress={() => navigation.navigate('Crear Cliente')}>Crear Cliente</Button>
        <Button style={styles.buttonStyle} mode = "contained" onPress={() => navigation.navigate('Listado de Clientes')}>Listado de Clientes</Button>
        <Button style={styles.buttonStyle} mode = "contained" onPress={() => navigation.navigate('Crear Factura')}>Crear Factura</Button>
    </View>
  )
}

