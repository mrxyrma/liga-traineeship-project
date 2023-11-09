import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = '';

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searching(state, action: PayloadAction<string>) {
      state.searching = action.payload;
    },
    reset(state, action) {
      state.searching = '';
    },
  },
});

export const { searching, reset } = searchSlice.actions;
export default searchSlice.reducer;
