import React, { useState, useEffect } from 'react'
import { ScrollView, Text, StyleSheet, KeyboardAvoidingView, View } from 'react-native'
import { TextInput, Button } from 'react-native-paper';
import * as global from '../../assets/global.js'
import DropDownPicker from 'react-native-dropdown-picker';
import {Dimensions} from 'react-native'


export default function CreateInvoice(props) {

    const [data, setData] = useState([]);

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);

    const [productos, setProductos] = useState([]);

    const [inputList, setInputList] = useState([]);

    useEffect(() => {
        fetch(global.API + '/getClientsSimplificado', {
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
                clients.map(client => {
                    setData(data => [...data, { label: client.razonSocial, value: client.id }])
                })
            })
            .catch(error => {
                throw error;
            })

    }, []);

    const onCheck = (cantidad, nombre, importe) => {
        setProductos(productos => [...productos, { cantidad: cantidad, nombre: nombre, importe: importe }])
    }

    const onAddBtnClick = event => {
        setInputList(inputList.concat(
            <View style={{ flexDirection: 'row' }}>
                <TextInput id='ruta' style={{ width: 50, margin: 10 }} label="C" />
                <TextInput style={{ width: 150, margin: 10 }} label="Producto" />
                <TextInput style={{ width: 50, margin: 10 }} label="€" />
                <Button style={{ width: Dimensions.get('window').height/10, margin: 10 }} mode="contained" onPress={() => {console.log('Hello')}}>+</Button>
            </View>
        ));
    };
    

    const style = StyleSheet.create({
        inputStyle: {
            margin: 10,
            padding: 10,
            allignItems: 'right',
        },

        titleStyle: {
            fontFamily: 'sans-serif',
            fontSize: 20,
            fontWeight: 'bold',
        },

        dropDownStyle: {
            margin: 5,
            padding: 5,
            width: Dimensions.get('window').width - 10,
        }
    });

    return (
        <View>
                <DropDownPicker
                    style={style.dropDownStyle}
                    placeholder="Seleccione un cliente"
                    open={open}
                    value={value}
                    items={data}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setData}
                />
            <ScrollView>
                {inputList}
                <Button style={style.inputStyle} mode="contained" onPress={onAddBtnClick}>Añadir Producto</Button>
            </ScrollView>
        </View>
    )


}