import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const PrebuiltTask = ({ prebuiltTask, view }) => (
  <View style={styles.buttonContainer}>
    <TouchableOpacity style={{ height: 60 }} onPress={() => view(prebuiltTask)}>
      <View style={[styles.container, { textAlign: 'center' }]}>
        <Text style={styles.title}>{prebuiltTask.title}</Text>
      </View>
    </TouchableOpacity>
  </View>
)

const row = {
  fontSize: 16,
  marginLeft: 10,
  marginRight: 10,
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: '70%',
    maxWidth: 700,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginTop: 20,
    paddingTop: 5,
    paddingBottom: 5,
    width: '100%',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
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
})

export default PrebuiltTask
