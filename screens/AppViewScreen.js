import React, { useState, useEffect } from 'react'
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'

// Original home screen
// Currently not used
const AppViewScreen = ({ navigation }) => {
  const [roles, setRoles] = useState({});

  return (
    <View style={styles.container}>
      <Text h1 style={styles.h1_text}>
        Welcome to Myelin!
      </Text>
      <Text h3 style={styles.h3_text}>
        Are you a:
      </Text>
      <View>
        <TouchableOpacity
          style={styles.roleButton}
          onPress={() => {
            const roles = {role: 'careTeam'};
            navigation.navigate('RegisterScreen', {roles});
          }}
        >
          <Text style={styles.buttonText}>Care Team Member</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.roleButton}
          onPress={() => {
            const roles = {role: 'patient'};
            navigation.navigate('RegisterScreen', {roles});
          }}
        >
          <Text style={styles.buttonText}>Patient/Caregiver</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  userContainer: {
    flex: 1,
    alignItems: 'center',
  },
  h1_text: {
    fontSize: 48,
    marginBottom: 25,
  },
  h3_text: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  h4_text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 15,
  },
  roleButton: {
    backgroundColor: '#c3a6ff',
    fontSize: 16,
    margin: 15,
    width: 250,
    padding: 15,
    textAlign: 'center',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: 'black',
    shadowOpacity: 1.0,
  },
  buttonText: {
    fontSize: 20,
    color: 'black', //'ghostwhite',
    textAlign: 'center',
  },
})

export default AppViewScreen