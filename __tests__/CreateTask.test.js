import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import CreateTaskScreen from '../screens/CreateTaskScreen'
import { users } from '../utils/data'
import { PrebuiltTaskArray } from '../utils/dataTask'

// Sample user & task data
const thisUser = users.users[0]
const prebuiltTask = PrebuiltTaskArray.tasks[0]

describe('<TaskDetailScreen />', () => {

    // Check screen renders correctly, including the prebuilt task
    it("renders 'new task' message, task details, 'add task' button", async () => {
        const { screenTest, getAllByText, getByTestId } = render(
            <CreateTaskScreen
                navigation={ jest.fn() }
                route={{ params: { thisUser, prebuiltTask }}}
            />
        );
      
        expect(screenTest).not.toBeNull()
        expect(getAllByText("Post a new task!").length).toBe(1)
        expect(getByTestId("CreateTask.Name") == "I need a Handicap Vehicle Permit");
        expect(getByTestId("CreateTask.Description" == "Please order or renew handicap vehicle permit."));
    });

    // Edit the task form fields & confirm that changes occur
    it("edits task form fields", async () => {
        const { getAllByText, getByTestId } = render(
            <CreateTaskScreen
                navigation={ jest.fn() }
                route={{ params: { thisUser, prebuilTask }}}
            />
        );

        // Edit task fields
        fireEvent.changeText(getByTestId("CreateTask.Name"), "Sample Task #1");
        fireEvent.changeText(getByTestId("CreateTask.Desciption"), "This is a sample task description.");
        fireEvent.changeText(getByTestId("CreateTask.DueDate"), "07/01/21");
        
        // Conform that the text has changed 
        expect(getByTestId("CreateTask.Name") == "I need a Handicap Vehicle Permit");
        expect(getByTestId("CreateTask.Description") == "This is a sample task description.");
        expect(getByTestId("CreateTask.DueDate" == "07/01/21"));
    })
})



