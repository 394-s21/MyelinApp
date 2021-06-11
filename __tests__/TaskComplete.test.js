import React from 'react'
//import 'react-native'
import { render } from '@testing-library/react-native'
import TaskDetailScreen from '../screens/TaskDetailScreen'
import { users } from '../utils/data'


const theUser = users.users[0]
const theTask = dummyUser.tasks[0]

describe('<TaskDetailScreen />', () => {
  it('Renders with Incomplete or Complete Tag', async () => {
    // Fails if the props are passed incorrectly or if they have bad data.
    const { screenTest, getAllByText } = render(
      <TaskDetailScreen
        route={{ params: { task: theTask, thisUser: theUser } }}
      />
    )
    
    // Check whether text objects are incomplete.
    expect(getAllByText('Incomplete').length).toBe(1)
    // Check non-null.
    expect(screenTest).not.toBeNull()
  })

  
})
