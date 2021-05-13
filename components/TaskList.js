import React from 'react'
import { ScrollView } from 'react-native'
import Task from './Task'

const TaskList = ({ tasks, view }) => {
  return (
    <ScrollView>
      {tasks.map((task, index) => (
        <Task key={index} task={task} view={view} />
      ))}
    </ScrollView>
  )
}

export default TaskList
