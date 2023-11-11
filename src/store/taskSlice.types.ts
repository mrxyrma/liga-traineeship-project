export interface INewTask {
  name: string;
  info: string;
  importance: boolean;
}

export interface IEditTask {
  id: number;
  newInfo: string;
}
