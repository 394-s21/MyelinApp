import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'



// TODO (L11): conditional styling? 

const Task = ({task}) => (
    <TouchableOpacity>
        <View style={styles.container}>
            <Text style={styles.title}>{task.title}</Text>
            <Text style={styles.dateDue}>Due: {task.dateDue}</Text>
            <Text style={styles.status}>Status: {task.status}</Text>
        </View>
    </TouchableOpacity>
)

export default Task

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'left',
      justifyContent: 'center',
      marginBottom: 20,
      marginTop: 10,
      
    },
    title: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'left',
        justifyContent: 'center',
        fontSize: 16,
      },
    dateDue: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'left',
        justifyContent: 'center',
        fontSize: 16,
    },
    status: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'left',
        justifyContent: 'center',
        fontSize: 16,
    },
})