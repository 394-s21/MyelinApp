import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import TaskList from '../components/TaskList'
import { firebase } from '../firebase'

const fixPatientTasks = (patient) => {
  const taskArray = []
  Object.keys(patient.tasks).map((key) => {
    const task = patient.tasks[key]
    task['id'] = key
    taskArray.push(task)
  })
  return {
    ...patient,
    taskList: taskArray,
  }
}

const MainTasksScreen = ({ navigation, route }) => {
  const userId = route.params.user.id
  const [thisUser, setThisUser] = useState(null)

  const view = (task) => {
    navigation.navigate('TaskDetailScreen', { task, thisUser })
  }

  useEffect(() => {
    const db = firebase.database().ref(`users/${userId}`)
    const handleData = (snap) => {
      if (snap.val()) setThisUser(fixPatientTasks(snap.val()))
    }
    db.on('value', handleData, (error) => console.log(error))
    return () => {
      db.off('value', handleData)
    }
  }, [])

  return thisUser ? (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('PrebuiltTaskScreen', { thisUser })}
        style={styles.newTaskButton}
      >
        <Text style={styles.title}>Create a New Task!</Text>
      </TouchableOpacity>
      <TaskList tasks={thisUser.taskList} view={view} />
    </View>
  ) : (
    <View style={styles.container}>
      <Text>Loading...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    shadowOffset: { width: 2, height: 2 },
    shadowColor: 'black',
    shadowOpacity: 1.0,
  },
  title: {
    fontSize: 22,
  },
})

export default MainTasksScreen
