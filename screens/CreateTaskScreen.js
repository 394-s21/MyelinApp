import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Form from '../components/Form'
import { firebase } from '../firebase'
import { taskBase } from '../utils/taskBase'

const CreateTaskScreen = ({ navigation, route }) => {
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const thisUser = route.params.thisUser
  const userId = thisUser.id
  const prebuiltTask = route.params.prebuiltTask

  // Update the 'newTask' variable based on user input
  async function handleSubmit(values) {
    const newTask = {
      ...values,
      dateCreated: parseDateCreated(),
      dateModified: parseDateCreated(),
      status: 'Incomplete',
      owner: userId,
    }

    firebase
      .database()
      .ref(`users/${userId}/tasks/${Date.now()}`)
      .set(newTask)
      .catch((error) => {
        setSubmitError(error.message)
      })
  }

  // Parse date from long string to standard mm/dd/yy format
  const parseDateCreated = () => {
    const date = new Date()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const year = date.getYear() - 100

    const dateString = month + '/' + day + '/' + year
    return dateString
  }

  return !submitted ? (
    <SafeAreaView style={styles.container}>
      <Text label="Name" style={styles.name}>
        Post a new task!
      </Text>
      <ScrollView>
        <Form
          initialValues={{
            ...taskBase,
            ...prebuiltTask,
          }}
          onSubmit={(values) => {
            setSubmitted(true)
            handleSubmit(values)
          }}
        >
          <Form.Field
            name="title"
            placeholder="Enter task name"
            autoCapitalize="none"
            testID="CreateTask.Name" // Assign ID to task name (for testing)
          />
          <Form.Field
            name="description"
            placeholder="Enter task description"
            autoCapitalize="none"
            testID="CreateTask.Description" // Assign ID to task descrip. (for testing)
          />
          <Form.Field
            name="dateDue"
            placeholder="Enter due date for this task"
            autoCapitalize="none"
            testID="CreateTask.DueDate" // Assign ID to task due date (for testing)
          />
          <Form.Button
            title={'Add new task'}
            testID="CreateTask.Button" // Assign ID to task submit button (for testing)
          />
          <Form.ErrorMessage error={submitError} />
        </Form>
      </ScrollView>
    </SafeAreaView>
  ) : (
    <SafeAreaView style={styles.container}>
      <Text style={styles.h1_text}>Task successfully created!</Text>
      <TouchableOpacity
        style={styles.addTaskButton}
        onPress={() => navigation.navigate('MainTasksScreen', { thisUser })}
      >
        <Text style={styles.buttonText}>Return to Home Screen</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  addTaskButton: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'black',
    backgroundColor: '#c3a6ff',
    textAlign: 'center',
    padding: 5,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: 'black',
    shadowOpacity: 1.0,
  },
  container: {
    flex: 1,
    marginTop: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '90%',
  },
  h1_text: {
    fontSize: 48,
    marginBottom: 25,
    justifyContent: 'center',
    textAlign: 'center',
  },
  field: {
    padding: 5,
    backgroundColor: 'white',
    borderRadius: 5,
    fontSize: 18,
  },
  fieldContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  label: {
    fontWeight: 'bold',
  },
  name: {
    fontSize: 24,
    marginBottom: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  connectButton: {
    margin: 30,
    padding: 10,
    textAlign: 'center',
    backgroundColor: 'lightblue',
  },
  connectText: {
    fontSize: 22,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  roleButton: {
    backgroundColor: '#2196F3',
    fontSize: 16,
    width: 250,
    padding: 15,
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'center',
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
})

export default CreateTaskScreen
