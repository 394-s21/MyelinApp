import React from 'react'
import { Text, View, StyleSheet, Linking, Button, TouchableOpacity } from 'react-native'
import { firebase } from '../firebase'

const TaskDetailScreen = ({ navigation, route }) => {
  const task = route.params.task
  const thisUser = route.params.thisUser
  const userId = thisUser.id

  async function handleComplete(wantToMarkComplete) {
    const newTask = { ...task }

    newTask.status = wantToMarkComplete ? 'Complete' : 'Incomplete'

    firebase
      .database()
      .ref(`users/${userId}/tasks/${task.id}`)
      .set(newTask)
      .catch((error) => {
        setSubmitError(error.message)
      })

    navigation.navigate('MainTasksScreen', { thisUser })
  }

  async function handleDelete() {
    firebase
      .database()
      .ref(`users/${userId}/tasks/${task.id}`)
      .remove()
      .catch((error) => {
        setSubmitError(error.message)
      })

    navigation.navigate('MainTasksScreen', { thisUser })
  }

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
        <Text
          style={
            task.status === 'Complete'
              ? [styles.greenStatusText, {fontWeight: 'bold'}]
              : [styles.redStatusText, {fontWeight: 'bold'}]
          }
        >
          {task.status}
        </Text>
      </View>

      <TouchableOpacity 
        style={styles.lightPurpleButtonColor} 
        onPress={() =>
          navigation.navigate('EditTaskScreen', { task, thisUser })
        }
      >
        <Text style={styles.blackButtonText}>Edit Task</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.lightPurpleButtonColor} 
        onPress={() =>
          navigation.navigate('ViewMessagesScreen', { task, thisUser })
        }
        testID="TaskDetail.ViewMessages"
      >
        <Text style={styles.blackButtonText}>View Message Board</Text>
      </TouchableOpacity>
        {task.status === 'Complete' ? (
            <TouchableOpacity 
              style={styles.whiteButtonColor} 
              onPress={() => handleComplete(false)}
            >
              <Text style={styles.redStatusText}>Mark Task As Incomplete</Text>
            </TouchableOpacity>
        ) : (
            <TouchableOpacity 
              style={styles.whiteButtonColor} 
              onPress={() => handleComplete(true)}
              testID="TaskDetail.Complete"
            >
              <Text style={styles.greenStatusText}>Mark Task As Complete</Text>
            </TouchableOpacity>
        )}

          <TouchableOpacity 
            style={styles.redButtonColor} 
            onPress={() => handleDelete()}
          >
            <Text style={styles.whiteButtonText}>Delete Task</Text>
          </TouchableOpacity>
      </View>
  )
}

const buttonColor = {
  borderWidth: 1,
  borderColor: 'black',
  textAlign: 'center',
  shadowOffset: { width: 1, height: 1 },
  shadowColor: 'black',
  shadowOpacity: 1.0,
  padding: 10,
  margin: 10,
  width: '70%',
  maxWidth: 800,
  height: 40,
  justifyContent: 'center',
};

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
  owner: {
    marginBottom: 30,
  },
  tempContainer: {
    flex: 1,
    flexDirection: 'row',
    width: '70%', 
    maxWidth: 800,
  }, 
  bottomButtonContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  whiteButtonColor: {
    ...buttonColor,
    backgroundColor: 'white',
  },
  purpleButtonColor: {
    ...buttonColor,
    backgroundColor: 'purple',
  },
  lightPurpleButtonColor: {
    ...buttonColor,
    backgroundColor: '#c3a6ff',
  },
  redButtonColor: {
    ...buttonColor,
    backgroundColor: '#db4d4d',
  },
  redStatusText: {
    fontSize: 16,
    color: 'red',
  },
  greenStatusText: {
    fontSize: 16,
    color: 'green',
  },
  blackButtonText: {
    color: 'black',
    fontSize: 18,
  },
  whiteButtonText: {
    color: 'white',
    fontSize: 18,
  },
})

export default TaskDetailScreen
