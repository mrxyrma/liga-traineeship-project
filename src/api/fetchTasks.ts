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
  PostTaskResponse,
} from 'types/api.tasks.types';

const instatnce = axios.create({
  baseURL: 'http://37.220.80.108/tasks',
  timeout: 3000,
  headers: { 'Content-Type': 'application/json;charset=utf-8' },
});

export async function getAllTasks(): Promise<GetTasksResponse> {
  const axiosResponse = await instatnce.get('');
  return axiosResponse.data;
}
