import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const TaskDetailScreen = ({ navigation, route }) => {
  const task = route.params.task

  // handle comments & notif later
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{task.title}</Text>
      <Text style={styles.date}>
        Created: {task.dateCreated} | Due: {task.dateDue}
      </Text>
      <Text style={styles.owner}>- {task.owner} -</Text>
      <Text style={styles.description}>{task.description}</Text>
      <View style={styles.statusContainer}>
        <Text style={styles.incompleteStatus}>{task.status}</Text>
      </View>
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
  },
  title: {
    fontSize: 20,
    fontWeight: 500,
  },
  description: {
    fontSize: 16,
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
