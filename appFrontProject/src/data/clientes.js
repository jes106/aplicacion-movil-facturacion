import { useState, useEffect } from 'react';

const getClientes = () => {

    fetch(global.API + '/getClients', {
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
            return clients;
        })
        .catch(error => {
            throw error;
        })

}

export default getClientes;