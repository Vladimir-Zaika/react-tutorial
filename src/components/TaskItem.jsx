import { ListIcon, ListItem } from '@chakra-ui/react';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';

const TaskItem = ({ todo, markTask }) => {
  return (
    <ListItem cursor={'pointer'} onClick={() => markTask(todo.id)}>
      <ListIcon as={todo.completed ? MdCheckBox : MdCheckBoxOutlineBlank} />
      {todo.task}
    </ListItem>
  );
};

export default TaskItem;
