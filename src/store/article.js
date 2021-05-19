import { createSlice } from '@reduxjs/toolkit'

const articleSlice = createSlice({
  name: 'article',
  initialState: {
    list: [{
      title: 'hello',
      author: 'me',
      content: 'hello world.'
    }]
  },
  reducers: {
    fetch: (state, { payload }) => {
      state.list = state.list.concat(payload)
    }
  }
});

export const { fetch } = articleSlice.actions

export default articleSlice.reducer;
