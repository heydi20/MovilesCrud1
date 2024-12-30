import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
///FIREBASE//
import { db } from '../config/Config'
import { ref, set } from 'firebase/database'

export default function FormularioScreen() {
    const [cedula, setcedula] = useState("")
    const [nombre, setnombre] = useState("")
    const [edad, setedad] = useState(0)
    const [correo, setcorreo] = useState("")
    ///ESCRIBIR///
    function guardar() {
  
        set(ref(db, 'usuarios/' + cedula), {
          name: nombre,
          age: edad,
          email : correo
        });
      }

    return (
        <View>
            <Text>FormularioScreen</Text>
            <TextInput
                placeholder='Ingresar cedula'
                style={styles.input}
                onChangeText={(texto)=>setcedula(texto)}
            />
            <TextInput
                style={styles.input}
                placeholder='Ingresar nombre'
                onChangeText={(texto)=>setnombre(texto)}
            />

            <TextInput
                style={styles.input}
                placeholder='Ingresar edad'
                onChangeText={(texto)=>setedad(+texto)}
                keyboardType='numeric'
            />
            <TextInput
                style={styles.input}
                placeholder='Ingresar correo'
                onChangeText={(texto)=>setcorreo(texto)}
                keyboardType='email-address'
            />

            <Button title='GUARDAR' onPress={()=>guardar()}/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        fontSize: 30,
        height: 50,
        width: '85%',
        backgroundColor: 'pink',
        borderRadius: 20,
        paddingHorizontal: 20,
        margin:10
    }

})