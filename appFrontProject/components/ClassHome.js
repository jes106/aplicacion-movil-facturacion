import React, {Component} from 'react'  
import {View, Text, Button } from 'react-native'

class ClassHome extends Component {

    state = {
        razonSocial: "Serena Trujillo S.L."
    }
  render() {
    return (
        <View>
            <Text style = {{fontSize:20, color:'blue'}}>
                From my first Class scomponent!
            </Text>
            <Text>{this.state.razonSocial}</Text>
            <Button title= "Click" onPress={() => this.setState({razonSocial: "Soy yo desde el botón"})}></Button>
        </View>
    )
  }
}

export default ClassHome
