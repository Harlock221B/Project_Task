import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity} from 'react-native';
import database from '../../config/firebaseconfig';
import styles from './styles';

export default function NewTask({ navigation }) {
    const [description, setDescription] = useState(null);

    function addTask(){
        database.ref('tasks').push({
            description: description,
            status: false
        });
        navigation.navigate('Task');
    }

    return (
        <View>
            <Text>
                New Task
            </Text>
        </View>
    );
}