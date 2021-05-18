import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Button } from 'react-native'
import { users } from '../utils/data'
import TaskList from '../components/TaskList'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import UserProfile from '../components/UserProfile'


const ViewPatientsScreen = ({ navigation, route }) => {
  const view = (user) => {
    navigation.navigate('MainTasksScreen', {user : user})
  }

  // If we come from 'CreateTaskScreen' (i.e. we've added a new task), add & display the new task
  // Else, just use the hardcoded list in 'data.js'
  let userList = users.users


  return (
    <View style={styles.container}>
      {userList.map((user, idx) => (
        <UserProfile key={idx} user={user} view={view}/>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
  },
  newTaskButton: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'black',
    backgroundColor: '#c3a6ff',
    width: '85%',
    textAlign: 'center',
    padding: 5,
    maxWidth: 800,
    shadowOffset:{width: 2,  height: 2},
    shadowColor: 'black',
    shadowOpacity: 1.0,
  },
  title: {
    fontSize: 22,
  },
})

export default ViewPatientsScreen
