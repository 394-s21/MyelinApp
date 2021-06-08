import React from 'react'
//import 'react-native'
import { render, fireEvent } from '@testing-library/react-native';
import AppViewScreen from '../screens/AppViewScreen'
import { users } from '../utils/data'

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

// test - see if main task screen renders correctly
const dummyUser = users.users[0]

describe('<AppViewScreen />', () => {

    it('Renders correctly', async () => {
        // Fails if the props are passed incorrectly or if they have bad data.
        const { screenTest, getAllByText } = render(
                    <AppViewScreen/>
        );
        // Check non-null.
        expect(screenTest).not.toBeNull()
        // Check various text objects as given by the data.
        expect(getAllByText('Welcome to Myelin!').length).toBe(1)
        expect(getAllByText('Care Team Member').length).toBe(1) 
        expect(getAllByText('Patient/Caregiver').length).toBe(1)
    })

    it('Goes to the register screen', async () => {
        const navigation = {navigate: jest.fn()}
        const { getAllByText, getByTestId } = render(
                    <AppViewScreen
                        navigation = {navigation}
                    />
        );

        // Press button, now expect navigation to be called.
        fireEvent.press(getByTestId("AppView.CareTeam"))
        const roles = {role: 'careTeam'}
        expect(navigation.navigate).toBeCalledWith("RegisterScreen", {roles})
    })
});