import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { PrebuiltTaskArray } from '../utils/dataTask'
import PrebuiltTask from '../components/PrebuiltTask'

const PrebuiltTaskScreen = ({ navigation, route }) => {
  const view = (prebuiltTask) => {
    navigation.navigate('CreateTaskScreen', { thisUser, prebuiltTask })
  }

  const thisUser = route.params.thisUser

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          return navigation.navigate('CreateTaskScreen', {
            thisUser,
          })
        }}
        style={styles.newTaskButton}
      >
        <Text style={styles.title}>Create Blank Task</Text>
      </TouchableOpacity>
    <View style={styles.container2}>
      {PrebuiltTaskArray.tasks.map((prebuiltTask, idx) => (
        <PrebuiltTask key={idx} prebuiltTask={prebuiltTask} view={view} />
      ))}
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
  },
  container2: {
    width: '85%',
    alignItems: 'center',
    maxWidth: 800,
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

export default PrebuiltTaskScreen
