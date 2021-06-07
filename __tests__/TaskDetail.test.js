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
        const { screenTest, getAllByText } = render(
                    <TaskDetailScreen
                        route={{params:{task: dummyTask, thisUser:dummyUser}}}
                    />
        );
        // Check non-null.
        expect(screenTest).not.toBeNull()
        // Check various text objects as given by the data.
        expect(getAllByText('Follow up with Vascular surgery').length).toBe(1)
        expect(getAllByText('Incomplete').length).toBe(1)
        expect(getAllByText('Created: 05/09/2021 | Due: 05/30/2021').length).toBe(1)

        
    });

    it('Moves to view message screen', async () => {
        const navigation = {navigate: jest.fn()}
        const { getAllByText, getByTestId } = render(
                    <TaskDetailScreen
                        navigation = {navigation} route={{params:{task: dummyTask, thisUser:dummyUser}}}
                    />
        );

        // Press button, now expect navigation to be called.
        fireEvent.press(getByTestId("TaskDetail.ViewMessages"))
        expect(navigation.navigate).toBeCalledWith("ViewMessagesScreen", {task: dummyTask, thisUser: dummyUser})
    });
})

