import React, { useState, useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { StyleSheet, View, Button, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import MainTasksScreen from './screens/MainTasksScreen'
import TaskDetailScreen from './screens/TaskDetailScreen'
import CreateTaskScreen from './screens/CreateTaskScreen'
import ViewPatientsScreen from './screens/ViewPatientsScreen'
import PrebuiltTaskScreen from './screens/PrebuiltTaskScreen'
import EditTaskScreen from './screens/EditTaskScreen'
import ViewMessagesScreen from './screens/ViewMessagesScreen'
import CreateMessageScreen from './screens/CreateMessageScreen'
import AppViewScreen from './screens/AppViewScreen'
import RegisterScreen from './screens/RegisterScreen'
import { firebase } from './firebase'


const Stack = createStackNavigator()

// Logout button!!
const LogoutButton = ({ navigation }) => (
  <View style={{marginRight: 10}}>
     <Button
      title="Logout"
      color="#f28888"
      onPress={() => {
        firebase.auth().signOut()
        navigation.navigate('AppViewScreen')
        alert('Successfully logged out!')
      }}
    />
  </View>
)

export default function App() {
  const [user, setUser] = useState({ role: 'admin' })

  const [auth, setAuth] = useState()

  useEffect(() => {
    if (auth && auth.uid) {
      const db = firebase.database().ref('users').child(auth.uid)
      const handleData = (snap) => {
        setUser({ uid: auth.uid, ...snap.val() })
      }
      db.on('value', handleData, (error) => alert(error))
      return () => {
        db.off('value', handleData)
      }
    } else {
      setUser(null)
    }
  }, [auth])

  useEffect(() => {
    firebase.auth().onAuthStateChanged((auth) => {
      setAuth(auth)
    })
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation }) => ({
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
            right: 0,
          },
          headerRight: ({}) => (
            user
            ?
            <LogoutButton navigation={navigation} />
            :
            <Text />
          ),
        })}
      >
        <Stack.Screen
          name="AppViewScreen"
          component={AppViewScreen}
          options={{ title: 'Choose App View' }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ title: 'Register' }}
        />
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
          name="ViewMessagesScreen"
          component={ViewMessagesScreen}
          options={{ title: 'View Messages' }}
        />
        <Stack.Screen
          name="EditTaskScreen"
          component={EditTaskScreen}
          options={{ title: 'Edit Task' }}
        />
        <Stack.Screen
          name="CreateMessageScreen"
          component={CreateMessageScreen}
          options={{ title: 'New message' }}
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
