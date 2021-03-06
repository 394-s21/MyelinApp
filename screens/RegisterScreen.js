import React, { useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import * as Yup from 'yup'
import Form from '../components/Form'
import { firebase } from '../firebase'

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Please enter a valid email')
    .email()
    .label('Email'),
  password: Yup.string()
    .required()
    .min(6, 'Password must have at least 6 characters')
    .label('Password'),
  confirm: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Confirmation password must match password'
  ),
})

const RegisterScreen = ({ route, navigation }) => {
  const [signInError, setSignInError] = useState('')

  async function handleOnLogin(values) {
    const { email, password } = values
    setSignInError(null)
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
      route.params.roles.role === 'careTeam'
        ? navigation.navigate('ViewPatientsScreen') // Care team goes here
        : navigation.navigate('MainTasksScreen', {
            user: { id: 'Chris' },
            role: 'patient',
          }) // Patients/caregiver goes here
      // (Temporarily) always navigate to Chris's account
    } catch (error) {
      setSignInError(error.message)
    }
  }

  async function handleOnSignUp(values) {
    const { name, email, password } = values
    setSignInError(null)
    try {
      const authCredential = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
      const user = authCredential.user
      await user.updateProfile({ displayName: name })
      route.params.roles.role === 'careTeam'
        ? navigation.navigate('ViewPatientsScreen') // Care team goes here
        : navigation.navigate('MainTasksScreen', { user }) // Patients/caregiver goes here
    } catch (error) {
      setSignInError(error.message)
    }
  }

  async function handleOnSubmit(values) {
    return values.confirmPassword
      ? handleOnSignUp(values)
      : handleOnLogin(values)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.h1_text}>Welcome {route.params.roles.role}s!</Text>
      <ScrollView>
        <Form
          initialValues={{
            email: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleOnSubmit}
        >
          <Form.Field
            name="email"
            leftIcon="email"
            placeholder="Enter email"
            autoCapitalize="none"
            keyboardType="email-address"
            textContentType="emailAddress"
          />
          <Form.Field
            name="password"
            leftIcon="lock"
            placeholder="Enter password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            textContentType="password"
          />
          <Form.Field
            name="confirmPassword"
            leftIcon="lock"
            placeholder="Confirm password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            textContentType="password"
          />
          <Form.Button
            title={(values) => (values.confirmPassword ? 'Register' : 'Login')}
          />
          {<Form.ErrorMessage error={signInError} visible={true} />}
        </Form>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  h1_text: {
    fontSize: 48,
    marginBottom: 25,
    textTransform: 'capitalize',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  field: {
    height: 40,
    width: 300,
    padding: 5,
    backgroundColor: 'white',
  },
  fieldContainer: {
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  label: {
    fontWeight: 'bold',
  },
})

export default RegisterScreen
