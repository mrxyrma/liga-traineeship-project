import { Task } from 'types/taskType';

export interface INewTask {
  id?: number;
  name: string;
  info: string;
  isImportant: boolean;
  isCompleted: boolean;
}

export interface ITaskSliceState {
  tasks: Task[];
  visibleTasks: Task[];
  initialVisibleTasks: Task[];
  loading: boolean;
  error: string | null;
}
