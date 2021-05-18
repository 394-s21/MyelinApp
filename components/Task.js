import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

// TODO (L11): conditional styling?

const Task = ({ task, view }) => {
  return (
  <TouchableOpacity onPress={() => view(task)}>
    <View style={styles.container}>
      <View style={styles.textView}>
        <Text style={styles.title}>{task.title}</Text>
        <Text style={styles.dateDue}>Due: {task.dateDue}</Text>
        <Text style={styles.incompleteStatus}>Status: {task.status}</Text>
      </View>
      <View style={styles.urgencyView}>
        <Text style={styles.urgencyStatus}>{task.urgency === 1 ? "❗️": ""} </Text>
      </View>
    </View>
  </TouchableOpacity>
  )
}

const row = {
  fontSize: 16,
  marginLeft: 10,
  marginRight: 10,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: '#fff',
    alignItems: 'flex-start',
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
    fontWeight: "500",
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
  urgencyStatus: {
    ...row,
    color: 'red',
    fontSize: 32,
  },
  urgencyView: {
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "center",
    ...row,
    width: "10%",
    alignItems: "flex-end",
    
  },
  textView: {
    flexGrow: 1,
    width: "65vw",
    flexDirection: "column",
    ...row,
    color: 'red',
  },
})

export default Task
