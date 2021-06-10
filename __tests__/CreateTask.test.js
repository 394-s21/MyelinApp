import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import CreateTaskScreen from '../screens/CreateTaskScreen'
import { users } from '../utils/data'
import { PrebuiltTaskArray } from '../utils/dataTask'

// Sample user & task data
const thisUser = users.users[0]
const prebuiltTask = PrebuiltTaskArray.tasks[0]

describe('<CreateTaskScreen />', () => {
  // [TEST TYPE]: Simple rendering test
  // Check screen rendering including the prebuilt task
  it("renders 'new task' message, task details, 'add task' button", async () => {
    const { screenTest, getAllByText, getByTestId } = render(
      <CreateTaskScreen
        navigation={jest.fn()}
        route={{ params: { thisUser, prebuiltTask } }}
      />
    )

    expect(screenTest).not.toBeNull()
    expect(getAllByText('Post a new task!').length).toBe(1) // Message at top
    expect(
      getByTestId('CreateTask.Name').placeholder ==
        'I need a Handicap Vehicle Permit'
    ) // Prebuilt task data, pt. 1 ...
    expect(
      getByTestId('CreateTask.Description').placeholder ==
        'Please order or renew handicap vehicle permit.'
    ) // ... pt. 2 ...
    expect(
      getByTestId('CreateTask.DueDate').placeholder ==
        'Enter due date for this task'
    ) // ... and pt.3 ...
    expect(
      JSON.stringify(getByTestId('CreateTask.Button').title) == 'Add new task'
    ) // Button at bottom
  })

  // [TEST TYPE]: User interaction test (form input)
  // Edit the task form fields & confirm that changes occur
  it('edits task form fields', async () => {
    const { getByTestId } = render(
      <CreateTaskScreen
        navigation={jest.fn()}
        route={{ params: { thisUser, prebuiltTask } }}
      />
    )

    // Edit task fields (name, description, due date)
    fireEvent.changeText(getByTestId('CreateTask.Name'), 'Sample Task #1')
    fireEvent.changeText(
      getByTestId('CreateTask.Desciption'),
      'This is a sample task description.'
    )
    fireEvent.changeText(getByTestId('CreateTask.DueDate'), '07/01/21')

    // Confirm that this^^ text has changed
    expect(getByTestId('CreateTask.Name') == 'I need a Handicap Vehicle Permit')
    expect(
      getByTestId('CreateTask.Description').value ==
        'This is a sample task description.'
    )
    expect(getByTestId('CreateTask.DueDate').value == '07/01/21')
  })
})
