import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, FlatList } from 'react-native';
import database from '../../config/firebaseconfig';
import styles from './style';
import { FontAwesome } from '@expo/vector-icons'

export default function Task({ navigation }) {
    const [tasks, setTasks] = useState([]);

    function deleteTask(task) {
        database.collection('Banco').doc(id).delete();
    }

    useEffect(() => {
        database.collection('Banco').onSnapshot((query) => {
            const list = []
            query.forEach((doc) => {
                list.push({ ...doc.data(), id: doc.id })
            })
            setTasks(list)
        })
    }, [])
    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={tasks}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.Task}>
                            <TouchableOpacity
                                style={styles.deleteTask}
                                onPress={() => deleteTask(item.id)}>
                                <FontAwesome
                                    name="star"
                                    size={23}
                                    color="#F92E6A"
                                >
                                </FontAwesome>
                            </TouchableOpacity>
                            <Text style={styles.DescriptionTask}
                                onPress={() => {
                                    navigation.navigate('Details', {
                                        id: item.id,
                                        description: item.description,
                                    })
                                }}>{item.description}</Text>
                        </View>
                    )
                }}
            />
            <TouchableOpacity
                style={styles.buttonNewTask}
                onPress={() => navigation.navigate('New Task')}>

                <Text style={styles.iconButton}>+</Text>
            </TouchableOpacity>

        </View>
    );
}