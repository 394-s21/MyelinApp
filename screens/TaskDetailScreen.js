import React from 'react'
import { Text, View } from 'react-native'
import { users } from '../utils/data'
import Task from '../components/Task'
import TaskList from '../components/TaskList'

const userList = users.users

const TaskDetailScreen = ({ navigation, route }) => {
  const task = route.params.task

  // handle comments & notif later
  return (
    <View>
      <Text>Task Detail Screen</Text>
      <Text>{task.title}</Text>
      <Text>{task.description}</Text>
      <Text>{task.dateCreated}</Text>
      <Text>{task.dateDue}</Text>
      <Text>{task.status}</Text>
      <Text>{task.owner}</Text>
    </View>
  )
}

export default TaskDetailScreen
