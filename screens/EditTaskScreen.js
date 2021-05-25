import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Form from '../components/Form'
import {firebase} from '../firebase'

const EditTaskScreen = ({ navigation, route }) => {
  const task = route.params.task
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
    
    firebase.database().ref('users').child(userId).child('tasks').child(task.id).set(newTask).catch(error => {
      console.log(error.message);
    });

    navigation.navigate('TaskDetailScreen', {task: newTask, userId})
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text label="Name" style={styles.name}>
        Task Edit Screen
      </Text>
      <ScrollView>
        <Form
          initialValues={{
            title: task.title,
            description: task.description,
            dateCreated: '',
            dateDue: task.dateDue,
            status: 'Incomplete',
            owner: '',
            comments: '',
            notifications: '',
            resources:'',
          }}
          onSubmit={(values) => {
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
          <Form.Button title={'Save changes'} />
        </Form>
      </ScrollView>
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

export default EditTaskScreen
