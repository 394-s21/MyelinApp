import { render, fireEvent } from '@testing-library/react-native';
//import { QuestionsBoard } from '../QuestionsBoard';
import CreateTaskScreen from '../screens/CreateTaskScreen';


test("renders",  () => {
   render(<CreateTaskScreen />)
})


// Unhappy path test.