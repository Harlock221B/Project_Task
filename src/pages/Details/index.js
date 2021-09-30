import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './style';
import database from '../../config/firebaseconfig';

export default function Details({ route, navigation }) {
    const[descriptionEdit, setDescriptionEdit] = useState(route.params.description);
    const idTask=route.params.id;
    function editTask(description, id){
        database.editTask("Banco").update({
            description: descriptionEdit
        })
        navigation.navigate('Task');
    }
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Editar tarefa</Text>
            <TextInput style={styles.input}
                placeholder="Descrição"
                value={descriptionEdit}            
            />
            <TouchableOpacity style={styles.buttonNewTask}
                onPress={() => {editTask(descriptionEdit, idTask)}}
            >
                <Text style={styles.iconButton}>Salvar</Text>
            </TouchableOpacity>
        </View>
    );
}