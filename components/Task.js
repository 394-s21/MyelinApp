import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  PickerIOSComponent,
} from 'react-native'

const Task = ({ task, view }) => {
  return (
    <TouchableOpacity onPress={() => view(task)}>
      <View
        style={task.status === 'Complete' ? styles.complete : styles.container}
      >
        <View style={styles.textView}>
          <Text style={styles.title}>{task.title}</Text>
          <Text style={styles.dateDue}>Due: {task.dateDue}</Text>
        </View>
        <View style={styles.urgencyView}>
          <Text style={styles.urgencyStatus}>
            {task.urgency === 1 ? '❗️' : ''}{' '}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const row = {
  fontSize: 16,
  marginLeft: 10,
  marginRight: 10,
}

const containerStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  marginTop: 20,
  paddingTop: 5,
  paddingBottom: 5,
  width: '100%',
  borderWidth: 1,
  borderColor: 'black',
  borderRadius: 5,
}

const styles = StyleSheet.create({
  container: {
    ...containerStyle,
    backgroundColor: '#fff',
  },
  complete: {
    ...containerStyle,
    backgroundColor: 'gray',
  },
  title: {
    ...row,
    fontWeight: '500',
  },
  dateDue: {
    ...row,
    fontStyle: 'italic',
  },
  incompleteStatus: {
    ...row,
    color: 'red',
  },
  completeStatus: {
    ...row,
    color: 'green',
  },
  urgencyStatus: {
    ...row,
    color: 'red',
    fontSize: 32,
  },
  urgencyView: {
    ...row,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  textView: {
    ...row,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    width: '65%',
    color: 'red',
  },
})

export default Task
