import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

// TODO (L11): conditional styling?

const UserProfile = ({ user, view }) => (
  <TouchableOpacity style={{ height: 60 }} onPress={() => view(user)}>
    <View style={styles.container}>
      <Text style={styles.title}>{user.patientInfo.name}</Text>
    </View>
  </TouchableOpacity>
)

const row = {
  fontSize: 16,
  marginLeft: 10,
  marginRight: 10,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: 20,
    paddingTop: 5,
    paddingBottom: 5,
    //paddingLeft: 10,
    //paddingRight: 75,
    width: '100%',
    height: '10%',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
  },
  title: {
    ...row,
    fontWeight: '500',
    fontSize:24
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
})

export default UserProfile
