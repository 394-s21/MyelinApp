import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

// TODO (L11): conditional styling?

const Task = ({ task, view }) => (
  <TouchableOpacity onPress={() => view(task)}>
    <View style={styles.container}>
      <Text style={styles.title}>{task.title}</Text>
      <Text style={styles.dateDue}>Due: {task.dateDue}</Text>
      <Text style={styles.incompleteStatus}>Status: {task.status}</Text>
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 75,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
  },
  dateDue: {
    fontSize: 16,
    fontStyle: 'italic',
  },
  incompleteStatus: {
    fontSize: 16,
    color: 'red',
  },
  completeStatus: {
    fontSize: 16,
    color: 'green',
  }
})

export default Task


