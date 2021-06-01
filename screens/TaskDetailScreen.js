import React from 'react'
import { Text, View, StyleSheet, Linking, Button } from 'react-native'
import { firebase } from '../firebase'

const TaskDetailScreen = ({ navigation, route }) => {
  const task = route.params.task
  const thisUser = route.params.thisUser
  const userId = thisUser.id

  async function handleComplete(wantToMarkComplete) {
    const newTask = {...task};

    newTask.status = wantToMarkComplete ? "Complete" : "Incomplete"

    firebase
      .database()
      .ref(`users/${userId}/tasks/${task.id}`)
      .set(newTask)
      .catch((error) => {
        setSubmitError(error.message)
      })

    navigation.navigate('MainTasksScreen', {thisUser})
  }

  async function handleDelete() {
    firebase
      .database()
      .ref(`users/${userId}/tasks/${task.id}`)
      .remove()
      .catch((error) => {
        setSubmitError(error.message)
      })

    navigation.navigate('MainTasksScreen', {thisUser})
  }

  // handle comments & notif later
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{task.title}</Text>
      <Text style={styles.date}>
        Created: {task.dateCreated} | Due: {task.dateDue}
      </Text>
      <Text style={styles.owner}>- {task.owner} -</Text>
      <Text style={styles.description}>{task.description}</Text>
      {task.resources != '' && (
        <Text
          style={styles.resource}
          onPress={() => Linking.openURL(task.resources)}
        >
          {task.resources}
        </Text>
      )}

      <View style={styles.statusContainer}>
        <Text style={task.status==="Complete" ? styles.completeStatus : styles.incompleteStatus}>{task.status}</Text>
      </View>
      <Button
        title="Edit Task"
        onPress={() =>
          navigation.navigate('EditTaskScreen', { task, thisUser })
        }
      />
      <Button
      title="View Messages"
      onPress={() =>
        navigation.navigate('ViewMessagesScreen', { task, thisUser })
      }
      />

      {task.status === "Complete" ? 
      <Button
        title="Mark Task as Incomplete"
        onPress={() =>
          // Mark as complete in firebase
          handleComplete(false)
        }
      /> : 
      <Button
        title="Complete Task"
        onPress={() =>
          // Mark as complete in firebase
          handleComplete(true)
        }
      />}
      
      <Button
        title="Delete Task"
        onPress={() =>
          // Delete in firebase
          handleDelete()
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  statusContainer: {
    backgroundColor: 'white',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 75,
    paddingRight: 75,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  resource: {
    fontSize: 16,
    marginBottom: 10,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  date: {
    fontSize: 14,
    fontStyle: 'italic',
    marginBottom: 5,
  },
  incompleteStatus: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
  },
  completeStatus: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
  },
  owner: {
    marginBottom: 30,
  },
})

export default TaskDetailScreen
