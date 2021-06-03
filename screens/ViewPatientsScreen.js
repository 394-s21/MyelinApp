import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import UserProfile from '../components/UserProfile'
import { firebase } from '../firebase'

const ViewPatientsScreen = ({ navigation }) => {
  const view = (user) => {
    navigation.navigate('MainTasksScreen', { user: user, role: roles })
  }

  const [userList, setUserList] = useState([])

  const [roles, setUserRole] = useState('careTeam')

  useEffect(() => {
    const db = firebase.database().ref('users')
    const handleData = (snap) => {
      if (snap.val()) {
        const users = snap.val()
        setUserList(Object.keys(users).map((key) => users[key]))
      }
    }
    db.on('value', handleData, (error) => console.log(error))
    return () => db.off('value', handleData)
  }, [])

  return (
    <View style={styles.container}>
      {userList.map((user, idx) => (
        <UserProfile key={idx} user={user} view={view} />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
  },
  newTaskButton: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'black',
    backgroundColor: '#c3a6ff',
    width: '85%',
    textAlign: 'center',
    padding: 5,
    maxWidth: 800,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: 'black',
    shadowOpacity: 1.0,
  },
  title: {
    fontSize: 22,
  },
})

export default ViewPatientsScreen
