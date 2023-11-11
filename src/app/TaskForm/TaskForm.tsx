import { useState } from 'react';
import { Checkbox, ActionButton, PageContainer, TextField } from '../../components';
import TaskFormProps from './TaskForm.types';
import { useAppDispatch } from 'src/hooks/hooks';
import { addTask } from 'src/store/tasksSlice';

const TaskForm: React.FC<TaskFormProps> = () => {
  const dispatch = useAppDispatch();
  const [text, setText] = useState('');
  const [importance, setImportance] = useState(false);

  const addNewTask = () => {
    const name = 'd',
      info = 'd';
    dispatch(addTask({ name, info, importance }));
    setText('');
  };

  const toggleImportance = () => {
    setImportance(!importance);
  };

  return (
    <PageContainer>
      <h1>Task form</h1>
      <TextField
        label="Creating a task"
        placeholder="What need to do?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Checkbox label="Important" onChange={toggleImportance} />
      <ActionButton text="Create a task" className="add-task-button" onClick={addNewTask} />
    </PageContainer>
  );
};

export default TaskForm;
