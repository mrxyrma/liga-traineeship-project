export interface INewTask {
  pureText: string;
  importance: boolean;
}

export interface IEditTask {
  id: number;
  newInfo: string;
}
