import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';

const url = 'http://37.220.80.108/tasks/';

const instatnce = axios.create({
  baseURL: 'http://37.220.80.108/tasks/',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
});

export const fetchTasks: any = createAsyncThunk('tasks/fetchTasks', async function () {
  const data = await fetch(url).then((response) => response.json());
  return data;
});
