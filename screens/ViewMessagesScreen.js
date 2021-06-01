import React, { useEffect, useState } from 'react'
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Button,
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

const RenderMessages = (messages) => {
  const msgs = Object.values(messages)[0]
  return (
    <ScrollView>
      {msgs.length > 1 ? (
        msgs
          .slice(1)
          .map((message, idx) => <MessageField key={idx} message={message} />)
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
      <Button title="New Message"></Button>

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
    // justifyContent: 'center',
  },

  userContainer: {
    flex: 1,
    alignItems: 'center',
  },
  fieldContainer: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 15,
    margin: 5,
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
})

export default ViewMessagesScreen
