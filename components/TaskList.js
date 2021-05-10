import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import Task from './Task'

const TaskList = ({tasks, view}) => {
    return (
        <ScrollView>
            {tasks.map((task) => (
                <Task task={task}/>
            ))}
        </ScrollView>
    );
};

export default TaskList;