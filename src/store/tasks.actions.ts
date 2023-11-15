import { Dispatch } from 'redux';
import { AxiosError } from 'axios';
import { setTasks, setLoading, setError } from './tasksSlice';
import { getAllTasks } from 'api/fetchTasks';

// export const fetchAllTasks = () => async (dispatch: Dispatch) => {
//   dispatch(setLoading(true));
//   try {
//     const data = await getAllTasks();
//     if (Array.isArray(data)) {
//       dispatch(setTasks(data));
//       dispatch(setLoading(false));
//     } else {
//       throw new Error();
//     }
//   } catch (e: AxiosError | Error) {
//     dispatch(setError('Invalid server response'));
//   }
// };
