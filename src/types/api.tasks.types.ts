import { paths } from 'src/types/api';

export type GetTasksRequest = paths['/tasks']['get'];
export type GetTasksResponse = paths['/tasks']['get']['responses'][200]['content']['application/json'];

export type GetTaskRequest = paths['/tasks/{taskId}']['get']['parameters']['path']['taskId'];
export type GetTaskResponse = paths['/tasks/{taskId}']['get']['responses'][200]['content']['application/json'];

export type DeleteTaskRequest = paths['/tasks/{taskId}']['delete']['parameters']['path']['taskId'];
export type DeleteTaskResponse =
  paths['/tasks/{taskId}']['delete']['responses']['200']['content']['application/json; charset=utf-8'];

export type PatchTaskRequest = paths['/tasks/{taskId}']['patch']['parameters']['path']['taskId'];
export type PatchTaskResponse = paths['/tasks/{taskId}']['patch']['responses'][200]['content']['application/json'];

// export type PostTaskRequest = paths['/tasks']['post']['requestBody']['content']['application/json'];
export type PostTaskResponse = paths['/tasks']['post']['responses'][200]['content']['application/json'];
