import React from 'react'
import { View, Text } from 'react-native'


// TODO (L11): conditional styling? 

const Task = ({task}) => (
    <View>
        <Text>{task.title}</Text>
        <Text>Due: {task.dateDue}</Text>
        <Text>Status: {task.status}</Text>
    </View>
)

export default Task