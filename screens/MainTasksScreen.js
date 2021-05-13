import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Button } from 'react-native'
import { users } from '../utils/data'
import TaskList from '../components/TaskList'

const userList = users.users

const MainTasksScreen = ({ navigation }) => {
  const view = (task) => {
    navigation.navigate('TaskDetailScreen', { task: task })
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('CreateTaskScreen')}
        style={styles.newTaskButton}
      >
        <Text style={styles.title}>Add new task</Text>
      </TouchableOpacity>
      {userList.map((user, idx) => (
        <TaskList key={idx} tasks={user.tasks} view={view} />
      ))}
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
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
})

export default MainTasksScreen
