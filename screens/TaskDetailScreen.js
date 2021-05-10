import React from 'react'
import { Text, View } from 'react-native'
import { users } from '../utils/data'
import Task from '../components/Task'
import TaskList from '../components/TaskList'

const userList = users.users

const TaskDetailScreen = ({ navigation, task }) => {
  return (
    <View>
      <Text>Task Detail Screen</Text>
    </View>
  )
}

export default TaskDetailScreen
