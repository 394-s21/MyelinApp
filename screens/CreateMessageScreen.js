import React, { useState } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { firebase } from '../firebase'
import { ScrollView } from 'react-native-gesture-handler'
import Form from '../components/Form'

const CreateMessageScreen = ({ navigation, route }) => {
  const [messageSent, setMessageSent] = useState(false)

  const user = route.params.user
  const userId = user.id
  const task = route.params.task

  async function handleSubmit(values) {
    const { message } = values
    firebase
      .database()
      .ref(`users/${userId}/tasks/${task.id}/comments`)
      .child(Date.now())
      .set(message)
      .catch((error) => {
        setSubmitError(error.message)
        console.log(error.message)
      })
    setMessageSent(true)
  }

  const placeholder = 'Enter message'
  return (
    <SafeAreaView style={styles.container}>
      {!messageSent && (
        <Text label="Name" style={styles.name}>
          Post a message on this task
        </Text>
      )}

      {messageSent ? (
        <View>
          <Text label="Name" style={styles.name}>
            Message successfully posted!
          </Text>
          <TouchableOpacity
            style={styles.connectButton}
            onPress={() => {
              navigation.navigate('ViewMessagesScreen', {
                thisUser: user,
                task: task,
              })
            }}
          >
            <Text style={styles.connectText}>Return to message board</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <ScrollView>
          <Form
            initialValues={{ message: '' }}
            onSubmit={(message) => handleSubmit(message)}
          >
            <Form.Field
              name="message"
              leftIcon="inbox"
              placeholder={placeholder}
              autoCapitalize="none"
              autoFocus={true}
              multiline={true}
              numberOfLines={20}
            />
            <Form.Button title={'Send Message'} />
          </Form>
        </ScrollView>
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '90%',
  },
  field: {
    padding: 5,
    backgroundColor: 'white',
    borderRadius: 5,
    fontSize: 18,
  },
  fieldContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  label: {
    fontWeight: 'bold',
  },
  name: {
    fontSize: 24,
    marginBottom: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  developerImage: {
    width: 200,
    height: 300,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10,
  },
  connectButton: {
    margin: 30,
    padding: 10,
    textAlign: 'center',
    backgroundColor: '#c3a6ff',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: 'black',
    shadowOpacity: 1.0,
  },
  connectText: {
    fontSize: 22,
    marginLeft: 'auto',
    marginRight: 'auto',
    // fontWeight: 500,
  },
})

export default CreateMessageScreen
