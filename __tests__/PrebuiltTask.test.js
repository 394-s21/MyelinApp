import React from 'react'
import { render, fireEvent } from '@testing-library/react-native';
import {users} from '../utils/data'
import ViewMessagesScreen from '../screens/ViewMessagesScreen'
import PrebuiltTaskScreen from '../screens/PrebuiltTaskScreen'

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
