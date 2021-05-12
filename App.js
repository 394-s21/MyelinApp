import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import MainTasksScreen from './screens/MainTasksScreen'
import TaskDetailScreen from './screens/TaskDetailScreen'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#610f94', // some purple color lol
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            alignSelf: 'center',
            fontWeight: 'bold',
          },
          headerTitleContainerStyle: {
            left: 0,
          }
        }}>
        <Stack.Screen
          name="MainTasksScreen"
          component={MainTasksScreen}
          options={{ title: 'Main Tasks' }}
        />
        <Stack.Screen
          name="TaskDetailScreen"
          component={TaskDetailScreen}
          options={{ title: 'Task Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
