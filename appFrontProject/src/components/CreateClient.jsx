import React from 'react'
import {ScrollView, Text, StyleSheet, KeyboardAvoidingView, View} from 'react-native'
import { TextInput, Button } from 'react-native-paper';
import {REACT_APP_API_NAME} from '@env';

export default function CreateClient(props) {

    const [razonSocial, setRazonSocial] = React.useState('');
    const [nombre, setNombre] = React.useState('');
    const [nif, setNif] = React.useState('');
    const [direccion, setDireccion] = React.useState('');
    const [poblacion, setPoblacion] = React.useState('');
    const [telefono, setTelefono] = React.useState('');

    const insertClient = () => {
        fetch(REACT_APP_API_NAME+'/newClient', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Allow-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({
                razonSocial: razonSocial,
                nombre: nombre,
                nif: nif,
                direccion: direccion,
                poblacion: poblacion,
                telefono: telefono,
            })
        })
            .then(resp => resp.json())
            .then(data => {
                props.navigation.navigate('Listado de Clientes');
            })
            .catch(error => console.log(error))
    }


    const style = StyleSheet.create({
        inputStyle:{
            margin: 10,
            padding: 10,
            allignItems: 'right',
        },

        titleStyle:{
            fontFamily: 'sans-serif',
            fontSize: 20,
            fontWeight: 'bold',
        }
    });

  return (
    <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={300}>
    <ScrollView>
        <View>
        <TextInput style = {style.inputStyle} label = "Razón Social" value={razonSocial} onChangeText={text => setRazonSocial(text)} />
        <TextInput style = {style.inputStyle} label = "Nombre" value = {nombre} onChangeText={text => setNombre(text)}></TextInput>
        <TextInput style = {style.inputStyle} label = "NIF" value={nif} onChangeText={text => setNif(text)} />
        <TextInput style = {style.inputStyle} label = "Dirección" value={direccion} onChangeText={text => setDireccion(text)} />
        <TextInput style = {style.inputStyle} label = "Población" value={poblacion} onChangeText={text => setPoblacion(text)} />
        <TextInput style = {style.inputStyle} label = "Teléfono" value={telefono} onChangeText={text => setTelefono(text)} />

        <Button style = {style.inputStyle} icon = "plus" mode="contained" onPress={() => insertClient()}>Crear Cliente </Button>
        </View>
    </ScrollView>
    </KeyboardAvoidingView>
  )


}
