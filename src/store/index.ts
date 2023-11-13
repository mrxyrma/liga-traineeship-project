import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import tasksReducer from './tasksSlice';
import visibleTasksReducer from './visibleTasksSlice';

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    visibleTasks: visibleTasksReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk).concat(logger),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
