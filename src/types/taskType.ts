export type Task = {
  id: number;
  name: string;
  info: string;
  isImportant: boolean;
  isCompleted: boolean;
};

export type TaskProps = {
  task: Task;
};

export type visibleTasks = {
  visibleTasks: Task[];
};
