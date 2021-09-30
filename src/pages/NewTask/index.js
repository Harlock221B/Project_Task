import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import database from '../../config/firebaseconfig';
import styles from './styles';

export default function NewTask({ navigation }) {
    const [description, setDescription] = useState(null);

    function addTask() {
        database.collection("Banco").add({
            description: description,
            status: false
        });
        navigation.navigate('Task');
    }

    return (
        <View style={styles.container} >
            <Text style={styles.label}>
                Descriçao
            </Text>
            <TextInput style={styles.input}
                placeholder="Digite a descriçao da tarefa"
                onChangeText={
                    (text) => setDescription(text)
                }
                value={description} />
            <TouchableOpacity style={styles.buttonNewTask} onPress={() => { addTask() }}>
                <Text style={styles.iconButton}>
                    Salvar
                </Text>
            </TouchableOpacity >
        </View>
    );
}