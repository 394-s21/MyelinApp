import React from 'react'
import { render } from '@testing-library/react-native'
import TaskList from '../components/TaskList'
import { users } from '../utils/data'

const thisUser = users.users[0]
const tasks = thisUser.tasks

describe('<TaskList />', () => {
  // [TEST TYPE]: rendering test
  // Check rendering of task list component
  it('Renders correctly', async () => {
    const { screenTest, getAllByText, getByTestId } = render(
      <TaskList tasks={tasks} view={jest.fn()} />
    )

    expect(screenTest).not.toBeNull()
    // Renders each task exactly once
    // Note: task titles must be unique
    tasks.map((task) => {
      expect(getAllByText(task.title).length).toBe(1)
      expect(getAllByText())
    })
  })
})
