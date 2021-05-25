import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const PrebuiltTask = ({ prebuiltTask, view }) => (
  <TouchableOpacity style={{ height: 60 }} onPress={() => view(prebuiltTask)}>
    <View style={styles.container}>
      <Text style={styles.title}>{prebuiltTask.title}</Text>
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
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
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
