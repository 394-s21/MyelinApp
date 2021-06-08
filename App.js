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
import UserContext from './UserContext'


const Stack = createStackNavigator()

// Logout button
const LogoutButton = ({ navigation }) => (
  <View style={{marginRight: 10}}>
     <Button
      title="Logout"
      color="#db4d4d"
      onPress={() => {
        firebase.auth().signOut()
        navigation.navigate('AppViewScreen')
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
    <UserContext.Provider value={user}>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#610f94', // Some purple color
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
        }}
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
          options={({ navigation }) => ({
            title: 'Your Patients',
            headerRight: () => (
              user
              ?
              <LogoutButton navigation={navigation} />
              :
              <Text />
            ),
          })}
        /> 
        <Stack.Screen
          name="MainTasksScreen"
          component={MainTasksScreen}
          options={({ navigation }) => ({
            title: 'Main Tasks',
            headerRight: () => (
              user
              ?
              <LogoutButton navigation={navigation} />
              :
              <Text />
            ),
          })}
        />
        <Stack.Screen
          name="PrebuiltTaskScreen"
          component={PrebuiltTaskScreen}
          options={({ navigation }) => ({
            title: 'Choose from Pre-Created Tasks',
            headerRight: () => (
              user
              ?
              <LogoutButton navigation={navigation} />
              :
              <Text />
            ),
          })}
        />
        <Stack.Screen
          name="CreateTaskScreen"
          component={CreateTaskScreen}
          options={({ navigation }) => ({
            title: 'Create New Task',
            headerRight: () => (
              user
              ?
              <LogoutButton navigation={navigation} />
              :
              <Text />
            ),
          })}
        />
        <Stack.Screen
          name="TaskDetailScreen"
          component={TaskDetailScreen}
          options={({ navigation }) => ({
            title: 'Task Details',
            headerRight: () => (
              user
              ?
              <LogoutButton navigation={navigation} />
              :
              <Text />
            ),
          })}
        />
        <Stack.Screen
          name="ViewMessagesScreen"
          component={ViewMessagesScreen}
          options={({ navigation }) => ({
            title: 'View Message',
            headerRight: () => (
              user
              ?
              <LogoutButton navigation={navigation} />
              :
              <Text />
            ),
          })}
        />
        <Stack.Screen
          name="EditTaskScreen"
          component={EditTaskScreen}
          options={({ navigation }) => ({
            title: 'Edit Task',
            headerRight: () => (
              user
              ?
              <LogoutButton navigation={navigation} />
              :
              <Text />
            ),
          })}
        />
        <Stack.Screen
          name="CreateMessageScreen"
          component={CreateMessageScreen}
          options={({ navigation }) => ({
            title: 'New Message',
            headerRight: () => (
              user
              ?
              <LogoutButton navigation={navigation} />
              :
              <Text />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </UserContext.Provider>
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
