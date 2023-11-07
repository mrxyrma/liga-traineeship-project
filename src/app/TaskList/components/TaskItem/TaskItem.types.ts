interface TaskItem {
  info: string;
  isImportant: boolean;
  isCompleted: boolean;
  id: number;
}

export interface TaskItemProps {
  task: TaskItem;
}
