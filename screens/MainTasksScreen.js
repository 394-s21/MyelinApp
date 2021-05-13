import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Button } from 'react-native'
import { users } from '../utils/data'
import TaskList from '../components/TaskList'
import { useSafeAreaInsets } from 'react-native-safe-area-context'


const MainTasksScreen = ({ navigation, route }) => {
  const view = (task) => {
    navigation.navigate('TaskDetailScreen', {task})
  }

  // If we come from 'CreateTaskScreen' (i.e. we've added a new task), add & display the new task
  // Else, just use the hardcoded list in 'data.js'
  let userList = [...users.users]
  if (route && route.params != undefined && JSON.stringify(route.params.newTask) !== '{}') {
    userList[0].tasks.push(route.params.newTask);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('CreateTaskScreen')}
        style={styles.newTaskButton}
      >
        <Text style={styles.title}>Create new task</Text>
      </TouchableOpacity>
      {userList.map((user, idx) => (
        <TaskList key={idx} tasks={user.tasks} view={view}/>
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
    maxWidth: 800,
    shadowOffset:{width: 2,  height: 2},
    shadowColor: 'black',
    shadowOpacity: 1.0,
  },
  title: {
    fontSize: 22,
  },
})

export default MainTasksScreen
