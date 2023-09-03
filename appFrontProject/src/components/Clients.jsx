import React, {useState, useEffect} from 'react'
import { ScrollView , Text, StyleSheet, Button, FlatList} from "react-native"
import {DataTable} from 'react-native-paper'
import {REACT_APP_API_NAME} from '@env';
import getClientes from '../data/clientes.js'



function Clients (props) {
    
    const [data, setData] = useState([]);
    useEffect( () => {
        fetch(REACT_APP_API_NAME + '/getClients', {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Allow-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Methods': '*',
            },
        })
            .then(resp => resp.json())
            .then(clients => {
                 setData(clients);
            })
            .catch(error => {
                throw error;
            })
    },[])


    const eliminarCliente = (id) => {
        fetch(API_NAME+'/deleteClient/'+id, {
            method: 'DELETE',
            mode: 'cors',
        })
        .then(()=>{
            setData(getClientes())
        })
        .catch(error => {
            throw error;
        })
    }


    return (
        <ScrollView>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Razón Social</DataTable.Title>
                    <DataTable.Title>NIF</DataTable.Title>
                    <DataTable.Title>Dirección</DataTable.Title>
                    <DataTable.Title>Población</DataTable.Title>
                    <DataTable.Title>Telefono</DataTable.Title>
                    <DataTable.Title>Acciones</DataTable.Title>
                </DataTable.Header>
                {data.map(cliente => (
                    <DataTable.Row key={cliente.id}>
                        <DataTable.Cell>{cliente.razonSocial}</DataTable.Cell>
                        <DataTable.Cell>{cliente.NIF}</DataTable.Cell>
                        <DataTable.Cell>{cliente.direccion}</DataTable.Cell>
                        <DataTable.Cell>{cliente.poblacion}</DataTable.Cell>
                        <DataTable.Cell>{cliente.telefono}</DataTable.Cell>
                        <DataTable.Cell><Button mode = "contained" onPress={() => eliminarCliente(cliente.id)} title="🗑"></Button></DataTable.Cell>
                    </DataTable.Row>
                ))}
            </DataTable>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    textStyle:{
        color: 'red',
        padding: 10,
        margin: 10,
        fontSize: 70,
    },

    cardStyle:{
        margin: 10,
        padding: 10,
    },

    fab:{
        possition: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    }
})

export default Clients;
