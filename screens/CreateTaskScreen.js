import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Form from '../components/Form'
import {firebase} from '../firebase'

const CreateTaskScreen = ({ navigation, route }) => {
  const [submitted, setSubmitted] = useState(false)
  //const [newTask, setNewTask] = useState({}) // Keep track of new task


  // const CourseEditScreen = ({ navigation, route }) => {
  //   const course = route.params.course;
  //   const [submitError, setSubmitError] = useState('');

  const userId = route.params.userId

  // Update the 'newTask' variable based on user input
    async function handleSubmit(values) {
    const { title, description, dateDue } = values;
    const newTask = {
      title,
      description,
      dateCreated: Date(),
      dateDue,
      status: 'Incomplete',
      owner: userId,
      comments: '',
      notifications: '',
    }
      firebase.database().ref('users').child(userId).child('tasks').child(Date.now()).set(newTask).catch(error => {
        console.log(error.message);
      });
  }

  return !submitted ? (
    <SafeAreaView style={styles.container}>
      <Text label="Name" style={styles.name}>
        Post a new task!
      </Text>
      <ScrollView>
        <Form
          initialValues={{
            title: '',
            description: '',
            dateCreated: '',
            dateDue: '',
            status: 'Incomplete',
            owner: '',
            comments: '',
            notifications: '',
            resources:'',
          }}
          onSubmit={(values) => {
            setSubmitted(true);
            handleSubmit(values);
          }}
        >
          <Form.Field
            name="title"
            placeholder="Enter task name"
            autoCapitalize="none"
          />
          <Form.Field
            name="description"
            placeholder="Enter task description"
            autoCapitalize="none"
          />
          <Form.Field
            name="dateDue"
            placeholder="Enter due date for this task"
            autoCapitalize="none"
          />
          <Form.Button title={'Add new task'} />
        </Form>
      </ScrollView>
    </SafeAreaView>
  ) : (
    <SafeAreaView style={styles.container}>
      <Text style={styles.h1_text}>Task successfully created!</Text>
      <TouchableOpacity
        style={styles.addTaskButton}
        onPress={() => navigation.navigate('MainTasksScreen')} // Pass new task to 'MainTasksScreen.js'
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
    shadowOffset:{ width: 2,  height: 2, },
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
    // fontWeight: 500,
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
  }
})

export default CreateTaskScreen
