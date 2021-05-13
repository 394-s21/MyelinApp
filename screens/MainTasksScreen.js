import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { users } from '../utils/data'
import TaskList from '../components/TaskList'

const userList = users.users

const MainTasksScreen = ({ navigation }) => {
  const view = (task) => {
    navigation.navigate('TaskDetailScreen', { task: task })
  }

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Current Tasks</Text> */}
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
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
})

export default MainTasksScreen
