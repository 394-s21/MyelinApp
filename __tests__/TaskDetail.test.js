import React from 'react'
//import 'react-native'
import { render, fireEvent } from '@testing-library/react-native';
import TaskDetailScreen from '../screens/TaskDetailScreen'
import {users} from '../utils/data'

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

describe('<TaskDetailScreen />', () => {

    it('Renders correctly', async () => {
        // Fails if the props are passed incorrectly or if they have bad data.
        const { screenTest } = render(
                    <TaskDetailScreen
                        route={{params:{task: dummyTask, thisUser:dummyUser}}}
                    />
        );

        expect(screenTest).not.toBeNull()
    });
})

