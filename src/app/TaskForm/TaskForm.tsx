import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Checkbox, ActionButton, PageContainer, TextField } from '../../components';

import { addTodo } from 'src/store/todoSlice';

function TaskForm() {
  const [info, setInfo] = useState('');
  const dispatch = useDispatch();
  const addTask = () => dispatch(addTodo(info));

  return (
    <PageContainer>
      <h1>Task form</h1>
      <TextField
        label="Creating a task"
        placeholder="What need to do?"
        value={info}
        onChange={(e) => setInfo(e.target.value)}
      />
      <Checkbox label="Important" />
      <ActionButton text="Create a task" className="add-task-button" onClick={addTask} />
    </PageContainer>
  );
}

export default TaskForm;
