import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Task from './src/pages/Task/';
import NewTask from './src/pages/NewTask/';
import Detail from './src/pages/Detail/';

const Stack = createStackNavigator;

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Task'>
        <Stack.Screen
          name='Task'
          component={Task}
          options={{
            headerTitleColor: "#F00"
          }}
        />
        <Stack.Screen
          name='NewTask'
          component={NewTask}
          options={{
            headerTitleColor: "#F00"
          }}
        />
        <Stack.Screen
          name='Detail'
          component={Detail}
          options={{
            headerTitleColor: "#F00"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
