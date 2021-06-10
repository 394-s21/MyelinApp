import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import CreateMessageScreen from '../screens/CreateMessageScreen'
import { users } from '../utils/data'

// Sample user & task data
const thisUser = users.users[0]
const task = thisUser.tasks[0]

describe('<CreateMessageScreen />', () => {
  // [TEST TYPE]: Simple rendering test
  // Check screen rendering
  it("renders 'new message' text, text box, submit button", async () => {
    const { screenTest, getAllByText, getByTestId } = render(
      <CreateMessageScreen
        navigation={jest.fn()}
        route={{ params: { user: thisUser, task } }}
      />
    )

    expect(screenTest).not.toBeNull()
    expect(getAllByText('Post a message on this task').length).toBe(1) // Text at top
    expect(getByTestId('CreateMessage.Input').placeholder == 'Enter message') // Message input
    expect(
      JSON.stringify(getByTestId('CreateMessage.Button').title) ==
        'Send Message'
    ) // Submit button
  })

  // [TEST TYPE]: User interaction test (message input)
  // Edit message input box & confirm that text changes occur
  it('edits task form fields', async () => {
    const { getByTestId } = render(
      <CreateMessageScreen
        navigation={jest.fn()}
        route={{ params: { user: thisUser, task } }}
      />
    )

    // Edit message in the input box
    fireEvent.changeText(
      getByTestId('CreateMessage.Input'),
      'This is a sample message.'
    )

    // Confirm that this^^ message text has changed
    expect(getByTestId('CreateTask.Input').value == 'This is a sample message.')
  })
})
