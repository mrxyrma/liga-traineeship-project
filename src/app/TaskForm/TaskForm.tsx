import { Checkbox, ActionButton, PageContainer, TextField } from '../../components';

function TaskForm() {
  return (
    <PageContainer>
      <h1>Task form</h1>
      <TextField label="Creating a task" placeholder="What need to do?" />
      <Checkbox label="Important" />
      <ActionButton text="Create a task" className="add-task-button" />
    </PageContainer>
  );
}

export default TaskForm;
