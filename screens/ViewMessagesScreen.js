import React, { useEffect, useState } from 'react'
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  TouchableOpacity,
} from 'react-native'
import { firebase } from '../firebase'

const MessageField = ({ message }) => {
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.fieldText}>{message}</Text>
      {/* <Text style={styles.field}>{value}</Text> */}
    </View>
  )
}

const RenderMessages = ({ messages }) => {
  return (
    <ScrollView>
      {messages.length > 0 ? (
        messages.map((message, idx) => (
          <MessageField key={idx} message={message} />
        ))
      ) : (
        <MessageField message={'No messages.'} />
      )}
    </ScrollView>
  )
}

// View message screen
const ViewMessagesScreen = ({ navigation, route }) => {
  const task = route.params.task
  const thisUser = route.params.thisUser
  const userId = thisUser.id

  const [messages, setMessages] = useState([])

  useEffect(() => {
    const db = firebase
      .database()
      .ref(`users/${userId}/tasks/${task.id}/comments`)
    const handleData = (snap) => {
      if (snap.val()) {
        const val = snap.val()
        const messageList = Object.values(val)
        setMessages(messageList)
      }
    }
    db.on('value', handleData, (error) => console.log(error))
    return () => db.off('value', handleData)
  }, [])

  return (
    <View style={styles.container}>
      <View>
        <RenderMessages messages={messages}></RenderMessages>
      </View>
      <TouchableOpacity 
        style={styles.lightPurpleButtonColor}
        onPress={() =>
          navigation.navigate('CreateMessageScreen', {
            user: thisUser,
            task: task,
          })}
      >
        <Text style={styles.blackButtonText}>New Message</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 30,
  },

  userContainer: {
    flex: 1,
    alignItems: 'center',
  },
  fieldContainer: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    margin: 5,
    justifyContent: 'center',
  },
  fieldText: {
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 16,
  },
  roleButton: {
    backgroundColor: '#2196F3',
    fontSize: 16,
    margin: 15,
    width: 250,
    padding: 15,
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: 'ghostwhite',
    textAlign: 'center',
  },
  lightPurpleButtonColor: {
    borderWidth: 1,
    borderColor: 'black',
    textAlign: 'center',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: 'black',
    shadowOpacity: 1.0,
    padding: 10,
    margin: 10,
    width: '70%',
    maxWidth: 800,
    height: 40,
    backgroundColor: '#c3a6ff',
    justifyContent: 'center',
  },
  blackButtonText: {
    color: 'black',
    fontSize: 18,
  },
})

export default ViewMessagesScreen
