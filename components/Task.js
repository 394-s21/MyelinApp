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

const row = {
  fontSize: 16,
  marginLeft: 10,
  marginRight: 10,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignitems: 'flex-start',
    justifyContent: 'center',
    marginTop: 20,
    paddingTop: 5,
    paddingBottom: 5,
    //paddingLeft: 10,
    //paddingRight: 75,
    width: '100%',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
  },
  title: {
    ...row,
    fontWeight: 500,
  },
  dateDue: {
    ...row,
    fontStyle: 'italic',
  },
  incompleteStatus: {
    ...row,
    color: 'red',
  },
  completeStatus: {
    ...row,
    color: 'green',
  },
})

export default Task
