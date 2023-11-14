import { Dispatch } from 'redux';
import { setLoading, setTasks, setError } from 'src/store/tasksSlice';
import fetchTasks from 'api/fetchTasks';
import { Task } from 'types/taskType';
import { GetTasksResponse } from 'types/api.tasks.types';

export const fetchAllTasks = () => async (dispatch: Dispatch) => {
  dispatch(setLoading());
  try {
    const data = await fetchTasks.getAllTasks();
    const pure = (taskFromResponse: GetTasksResponse): Task[] => {
      return taskFromResponse.map(item => ({...item}))
    }
    dispatch(setTasks(pure(data)))
  }
};
