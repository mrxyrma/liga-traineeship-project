export type Task = {
  id: number;
  info: string;
  isImportant: boolean;
  isCompleted: boolean;
};

export type TaskProps = {
  task: Task;
};

export type TasksState = {
  tasks: Task[];
};
