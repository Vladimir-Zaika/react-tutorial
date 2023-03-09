import { useState } from 'react';
import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';

const TaskForm = ({ todoList, setTodoList }) => {
  const [userInput, setUserInput] = useState('');

  const handleChange = event => setUserInput(event.currentTarget.value);

  const handleSubmit = event => {
    event.preventDefault();

    if (userInput.trim()) {
      const id = todoList.length ? todoList[todoList.length - 1].id + 1 : 1;

      setTodoList(prevState => [
        ...prevState,
        {
          id,
          task: userInput,
          completed: false,
        },
      ]);

      setUserInput('');
    }
  };

  const handleFilter = () =>
    setTodoList(prevState => prevState.filter(task => !task.completed));

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel>Add task here</FormLabel>
        <Input value={userInput} onChange={handleChange} />
      </FormControl>
      <ButtonGroup mt={5}>
        <Button colorScheme={'green'} type="submit">
          Add
        </Button>
        <Button colorScheme={'red'} onClick={handleFilter}>
          Delete completed
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default TaskForm;
