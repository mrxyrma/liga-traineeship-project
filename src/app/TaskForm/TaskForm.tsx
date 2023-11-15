import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ITaskFormProps from 'src/app/TaskForm/TaskForm.types';
import { Checkbox, ActionButton, PageContainer, TextField } from 'src/components';
import { useAppDispatch, useAppSelector } from 'src/hooks/hooks';
import { addTask, editTask } from 'src/store/tasksSlice';

const TaskForm: React.FC<ITaskFormProps> = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const [name, setName] = useState('');
  const [info, setInfo] = useState('');
  const [isImportant, setIsImportant] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const tasks = useAppSelector((state) => state.tasks.tasks);
  useEffect(() => {
    if (id) {
      const numberId = Number(id);
      const task = tasks.find((item) => item.id === numberId);
      if (typeof task !== 'undefined') {
        setName(task.name);
        setInfo(task.info);
        setIsImportant(task.isImportant);
        setIsCompleted(task.isCompleted);
      }
    }
  }, [id]);

  const onAddTask = () => {
    dispatch(addTask({ name, info, isImportant, isCompleted }));
    setName('');
    setInfo('');
    setIsImportant(false);
    setIsCompleted(false);
  };

  const onEditTask = () => {
    const obj = {
      id: Number(id),
      name,
      info,
      isCompleted,
      isImportant,
    };

    dispatch(editTask(obj));
  };

  const toggleImportance = () => {
    setIsImportant(!isImportant);
  };

  const toggleComplete = () => {
    setIsCompleted(!isCompleted);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <PageContainer>
      <h1>Task form</h1>
      <form onSubmit={onSubmit}>
        <TextField
          label="Task name"
          placeholder="Type the task name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Task information"
          placeholder="Type the information about task here"
          value={info}
          onChange={(e) => setInfo(e.target.value)}
        />
        <Checkbox label="Important" onChange={toggleImportance} checked={isImportant} />
        <Checkbox label="Completed" onChange={toggleComplete} checked={isCompleted} />
        <ActionButton
          text={id ? 'Edit a task' : 'Create a task'}
          className="add-task-button"
          onClick={id ? onEditTask : onAddTask}
        />
      </form>
    </PageContainer>
  );
};

export default TaskForm;
