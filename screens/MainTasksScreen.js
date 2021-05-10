import React from 'react'
import { Text, View } from 'react-native'
import { users } from '../utils/data'
import Task from '../components/Task'
import TaskList from '../components/TaskList'

const userList = users.users

const MainTasksScreen = () => {
  return (
    <View>
      <Text>MainTasksScreen</Text>
      {userList.map((user) => (
        <TaskList tasks={user.tasks}/>
      ))}
    </View>
  )
}

export default MainTasksScreen
