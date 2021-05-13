import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useFormikContext } from 'formik'

import Colors from './colors'

export default function FormButton({ title, color = 'lightPurple' }) {
  const { handleSubmit, values } = useFormikContext()
  const text = typeof title === 'function' ? title(values) : title

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: Colors[color] }]}
      onPress={handleSubmit}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'black',
    textAlign: 'center',
    padding: 5,
    shadowOffset:{ width: 2,  height: 2, },
    shadowColor: 'black',
    shadowOpacity: 1.0,
  },
  buttonText: {
    color: Colors.black,
    fontSize: 18,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  
})
