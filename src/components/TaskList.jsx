import { useState } from 'react';
import { Box, Heading, List } from '@chakra-ui/react';

import data from '../mock/data.json';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';

const TaskList = () => {
  const [todoList, setTodoList] = useState(data);

  const markTask = id => {
    setTodoList(prevState =>
      prevState.map(task => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed,
          };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <Box as="section" display={'grid'} rowGap={5}>
      <Heading>Task List</Heading>
      <TaskForm todoList={todoList} setTodoList={setTodoList} />

      {todoList && (
        <List spacing={3}>
          {todoList.map(todo => (
            <TaskItem key={todo.id} todo={todo} markTask={markTask} />
          ))}
        </List>
      )}
    </Box>
  );
};

export default TaskList;
