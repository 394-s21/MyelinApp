import React from 'react'
import { render, fireEvent } from '@testing-library/react-native';
import CreateTaskScreen from '../screens/CreateTaskScreen'
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
        const { screenTest, getAllByText } = render(
                    <CreateTaskScreen
                        route={{params:{task: dummyTask, thisUser:dummyUser}}}
                    />
        );
        // Check non-null.
        expect(screenTest).not.toBeNull()
        // Check various text objects as given by the data
    });
})



