import React from 'react'
import { render, fireEvent } from '@testing-library/react-native';
import {users} from '../utils/data'

import PrebuiltTaskScreen from '../screens/PrebuiltTaskScreen'
import TaskDetailScreen from '../screens/TaskDetailScreen'

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
      dispatch: jest.fn()
    })
  };
});

const dummyUser = users.users[0]
const dummyTask = dummyUser.tasks[0]

describe('<PrebuiltTaskScreen />', () => {

  it('Renders correctly', async () => {
    const { screenTest } = render(
      <PrebuiltTaskScreen
        route={{params:{thisUser:dummyUser}}}
      />
    );

    expect(screenTest).not.toBeNull()
  });
})

const task ={
       "comments": "",
         "dateCreated": "05/09/2021",
        "dateDue": "05/30/2021",
        "description": "",
        "notifications": "",
        "owner": "Dr. John Doe",
         "status": "Incomplete",
         "title": "Follow up with Vascular surgery",
        "urgency": 1,
     }


it('Moves to view message screen', async () => {
  const navigation = {navigate: jest.fn()}
  const { getAllByText, getByTestId } = render(
    <PrebuiltTaskScreen
      navigation = {navigation} route={{params:{thisUser:dummyUser, task: dummyTask}}}
    />
  );

  fireEvent.press(getByTestId("PrebuiltTask.CreateTask"))
  expect(navigation.navigate).toBeCalledWith("CreateTaskScreen", {task: task, thisUser: dummyUser})
});
