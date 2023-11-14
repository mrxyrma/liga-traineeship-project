import axios, { AxiosResponse } from 'axios';
import {
  GetTasksRequest,
  GetTasksResponse,
  GetTaskRequest,
  GetTaskResponse,
  DeleteTaskRequest,
  DeleteTaskResponse,
  PatchTaskRequest,
  PatchTaskResponse,
  PostTaskRequest,
  PostTaskResponse,
} from 'types/api.tasks.types';

const instatnce = axios.create({
  baseURL: 'http://37.220.80.108/tasks',
  timeout: 3000,
  headers: { 'Content-Type': 'application/json;charset=utf-8' },
});

export default {
  getAllTasks: async function (): Promise<GetTasksResponse> {
    return await instatnce.get('');
  },
};
