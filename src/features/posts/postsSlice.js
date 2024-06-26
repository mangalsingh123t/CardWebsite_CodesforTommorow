import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  page: 1,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { setPage } = postsSlice.actions;

export default postsSlice.reducer;
