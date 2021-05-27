import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import MainTasksScreen from './screens/MainTasksScreen'
import TaskDetailScreen from './screens/TaskDetailScreen'
import CreateTaskScreen from './screens/CreateTaskScreen'
import ViewPatientsScreen from './screens/ViewPatientsScreen'
import PrebuiltTaskScreen from './screens/PrebuiltTaskScreen'
import EditTaskScreen from './screens/EditTaskScreen'

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
          },
        }}
      >
        <Stack.Screen
          name="ViewPatientsScreen"
          component={ViewPatientsScreen}
          options={{ title: 'Your Patients' }}
        />
        <Stack.Screen
          name="MainTasksScreen"
          component={MainTasksScreen}
          options={{ title: 'Main Tasks' }}
        />
        <Stack.Screen
          name="PrebuiltTaskScreen"
          component={PrebuiltTaskScreen}
          options={{ title: 'Choose from Pre-Created Tasks' }}
        />
        <Stack.Screen
          name="CreateTaskScreen"
          component={CreateTaskScreen}
          options={{ title: 'Create New Task' }}
        />
        <Stack.Screen
          name="TaskDetailScreen"
          component={TaskDetailScreen}
          options={{ title: 'Task Details' }}
        />
        <Stack.Screen
          name="EditTaskScreen"
          component={EditTaskScreen}
          options={{ title: 'Edit Task' }}
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
