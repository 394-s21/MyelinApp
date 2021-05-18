import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import UserProfile from './UserProfile'

const UserProfileList = ({ tasks, view }) => {
  return (
    <ScrollView style={styles.container}>
      {tasks.map((task, idx) => (
        <UserProfile key={idx} task={task} view={view} />
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '85%',
    maxWidth: 800,
  },
})

export default UserProfileList